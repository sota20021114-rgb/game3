const fs = require("fs");
const path = require("path");
const { test, expect } = require("@playwright/test");

const rootDir = path.resolve(__dirname, "..");

function emptyFoundations() {
  return Array.from({ length: 4 }, () => ({
    genreKey: null,
    genreLabel: "",
    cards: [],
  }));
}

async function dragCardWithTouch(page, source, target) {
  const moved = await page.evaluate(({ sourceInput, targetInput }) => (
    window.__wordSolitaireTest.simulateTouchDrag(sourceInput, targetInput)
  ), {
    sourceInput: source,
    targetInput: target,
  });

  expect(moved).toBe(true);
}

test("index.html is a minimal shell", async () => {
  const html = fs.readFileSync(path.join(rootDir, "index.html"), "utf8");
  expect(html).toContain('<div id="app"></div>');
  expect(html).toContain('<script src="script.js"></script>');
  expect(html).not.toContain("このレベルをやり直す");
  expect(html).not.toContain("ヒント");
  expect(html).not.toContain("ジャンル置き場");
});

test("initial level renders inside the board", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator("h1")).toHaveText("ことばソリティア");
  await expect(page.locator("#level-name")).toContainText("Lv.1");
  await expect(page.locator("#completed-count")).toHaveText("0 / 6");
  await expect(page.locator("#move-count")).toHaveText("0 / 72");
  await expect(page.locator(".level-button.current")).toContainText("昼下がりの文机");
  await expect(page.locator(".tableau-column")).toHaveCount(4);
  await expect(page.locator(".play-card").first()).toHaveAttribute("draggable", "true");
});

test("genre library and level catalog are greatly expanded", async ({ page }) => {
  await page.goto("/");

  const state = await page.evaluate(() => window.__wordSolitaireTest.getState());
  expect(state.genreLibraryCount).toBeGreaterThanOrEqual(80);
  expect(state.levelCount).toBeGreaterThanOrEqual(80);
  expect(state.levelCardCount).toBeGreaterThan(state.genreCount * 4);
});

test("mobile tap tray appears for a selected card and can clear selection", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const mobileLayout = await page.evaluate(() => {
    const tableau = document.querySelector("#tableau");
    const foundationRow = document.querySelector("#foundations");
    return {
      tableauColumns: getComputedStyle(tableau).gridTemplateColumns.split(" ").length,
      foundationColumns: getComputedStyle(foundationRow).gridTemplateColumns.split(" ").length,
    };
  });
  expect(mobileLayout.tableauColumns).toBe(2);
  expect(mobileLayout.foundationColumns).toBe(2);

  await page.locator(".play-card").first().click();
  await expect(page.locator("#selection-tray")).toHaveAttribute("data-active", "true");

  await page.locator("#selection-tray-clear").click();
  await expect(page.locator("#selection-tray")).toHaveAttribute("data-active", "false");
});

test("mobile touch drag can move a waste card into a foundation slot", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  await page.evaluate((snapshot) => {
    window.__wordSolitaireTest.setBoard(snapshot);
  }, {
    currentLevelIndex: 0,
    columns: [
      [],
      [],
      [],
      [],
    ],
    stock: [],
    waste: [
      { id: 31, type: "genre", genreKey: "music", genreLabel: "髻ｳ讌ｽ", label: "髻ｳ讌ｽ" },
    ],
    activeFoundations: emptyFoundations(),
    completed: [],
    moveCount: 0,
    status: "playing",
  });

  await dragCardWithTouch(
    page,
    { type: "waste", index: 0 },
    { type: "foundation", index: 0 },
  );

  const state = await page.evaluate(() => window.__wordSolitaireTest.getState());
  expect(state.foundationCardCounts[0]).toBe(1);
  expect(state.activeFoundationCount).toBe(1);
  expect(state.columnLengths).toEqual([0, 0, 0, 0]);
  expect(state.wasteCount).toBe(0);
});

test("drawing from stock increments moves and exposes a waste card", async ({ page }) => {
  await page.goto("/");

  const before = await page.evaluate(() => window.__wordSolitaireTest.getState());
  await page.locator("#stock-button").click();
  const after = await page.evaluate(() => window.__wordSolitaireTest.getState());

  expect(after.moveCount).toBe(before.moveCount + 1);
  expect(after.wasteCount).toBe(1);
  await expect(page.locator("#move-count")).toHaveText("1 / 72");
  await expect(page.locator("#waste-slot .play-card")).toHaveCount(1);
});

test("recycling waste restores cards to the stock", async ({ page }) => {
  await page.goto("/");

  const initial = await page.evaluate(() => window.__wordSolitaireTest.getState());
  await page.locator("#stock-button").click();
  await page.locator("#recycle-button").click();

  const state = await page.evaluate(() => window.__wordSolitaireTest.getState());
  expect(state.stockCount).toBe(initial.stockCount);
  expect(state.wasteCount).toBe(0);
  expect(state.moveCount).toBe(initial.moveCount + 2);
  await expect(page.locator("#message")).toContainText("山札へ戻しました");
});

test("same-genre word cards can stack on the tableau", async ({ page }) => {
  await page.goto("/");

  await page.evaluate((snapshot) => {
    window.__wordSolitaireTest.setBoard(snapshot);
  }, {
    currentLevelIndex: 0,
    columns: [
      [{ id: 1, type: "word", genreKey: "music", genreLabel: "音楽", label: "ギター" }],
      [{ id: 2, type: "word", genreKey: "music", genreLabel: "音楽", label: "リズム" }],
      [],
      [],
    ],
    stock: [],
    waste: [],
    activeFoundations: emptyFoundations(),
    completed: [],
    moveCount: 0,
    status: "playing",
  });

  await page.locator(".tableau-column").nth(0).locator(".play-card").click();
  await page.locator(".tableau-column").nth(1).locator(".column-head").click();

  const state = await page.evaluate(() => window.__wordSolitaireTest.getState());
  expect(state.columnLengths).toEqual([0, 2, 0, 0]);
  expect(state.columnTopGenres[1]).toBe("music");
});

test("genre cards can move to an empty tableau column", async ({ page }) => {
  await page.goto("/");

  await page.evaluate((snapshot) => {
    window.__wordSolitaireTest.setBoard(snapshot);
  }, {
    currentLevelIndex: 0,
    columns: [
      [{ id: 21, type: "genre", genreKey: "music", genreLabel: "音楽", label: "音楽" }],
      [],
      [],
      [],
    ],
    stock: [],
    waste: [],
    activeFoundations: emptyFoundations(),
    completed: [],
    moveCount: 0,
    status: "playing",
  });

  await page.locator(".tableau-column").nth(0).locator(".play-card").click();
  await page.locator(".tableau-column").nth(1).locator(".column-head").click();

  const state = await page.evaluate(() => window.__wordSolitaireTest.getState());
  expect(state.columnLengths).toEqual([0, 1, 0, 0]);
  expect(state.columnTopTypes[1]).toBe("genre");
});

test("connected same-genre cards move together between tableau columns", async ({ page }) => {
  await page.goto("/");

  await page.evaluate((snapshot) => {
    window.__wordSolitaireTest.setBoard(snapshot);
  }, {
    currentLevelIndex: 0,
    columns: [
      [
        { id: 201, type: "word", genreKey: "science", genreLabel: "科学", label: "分子" },
        { id: 202, type: "word", genreKey: "music", genreLabel: "音楽", label: "ギター" },
        { id: 203, type: "word", genreKey: "music", genreLabel: "音楽", label: "リズム" },
      ],
      [],
      [],
      [],
    ],
    stock: [],
    waste: [],
    activeFoundations: emptyFoundations(),
    completed: [],
    moveCount: 0,
    status: "playing",
  });

  await page.locator(".tableau-column").nth(0).locator(".play-card").click();
  await page.locator(".tableau-column").nth(1).locator(".column-head").click();

  const state = await page.evaluate(() => window.__wordSolitaireTest.getState());
  expect(state.moveCount).toBe(1);
  expect(state.columnLengths).toEqual([1, 2, 0, 0]);
  expect(state.columnTopLabels[0]).toBe("分子");
  expect(state.columnTopGenres[1]).toBe("music");
});

test("connected same-genre cards can move together to a foundation", async ({ page }) => {
  await page.goto("/");

  await page.evaluate((snapshot) => {
    window.__wordSolitaireTest.setBoard(snapshot);
  }, {
    currentLevelIndex: 0,
    columns: [
      [
        { id: 211, type: "word", genreKey: "science", genreLabel: "科学", label: "分子" },
        { id: 212, type: "word", genreKey: "music", genreLabel: "音楽", label: "ギター" },
        { id: 213, type: "word", genreKey: "music", genreLabel: "音楽", label: "リズム" },
      ],
      [],
      [],
      [],
    ],
    stock: [],
    waste: [],
    activeFoundations: [
      {
        genreKey: "music",
        genreLabel: "音楽",
        cards: [
          { id: 214, type: "genre", genreKey: "music", genreLabel: "音楽", label: "音楽" },
        ],
      },
      ...emptyFoundations().slice(1),
    ],
    completed: [],
    moveCount: 0,
    status: "playing",
  });

  await page.locator(".tableau-column").nth(0).locator(".play-card").click();
  await page.locator(".foundation-slot").nth(0).click();

  const state = await page.evaluate(() => window.__wordSolitaireTest.getState());
  expect(state.moveCount).toBe(1);
  expect(state.columnLengths).toEqual([1, 0, 0, 0]);
  expect(state.foundationCardCounts[0]).toBe(3);
  await expect(page.locator("#message")).toContainText("2 枚まとめて");
});

test("a shorter genre completes when its own card count is reached", async ({ page }) => {
  await page.goto("/");

  await page.evaluate((snapshot) => {
    window.__wordSolitaireTest.setBoard(snapshot);
  }, {
    currentLevelIndex: 0,
    columns: [
      [{ id: 31, type: "word", genreKey: "coffee", genreLabel: "コーヒー", label: "カップ" }],
      [],
      [],
      [],
    ],
    stock: [],
    waste: [],
    activeFoundations: [
      {
        genreKey: "coffee",
        genreLabel: "コーヒー",
        cards: [
          { id: 32, type: "genre", genreKey: "coffee", genreLabel: "コーヒー", label: "コーヒー" },
          { id: 33, type: "word", genreKey: "coffee", genreLabel: "コーヒー", label: "焙煎" },
          { id: 34, type: "word", genreKey: "coffee", genreLabel: "コーヒー", label: "香り" },
          { id: 35, type: "word", genreKey: "coffee", genreLabel: "コーヒー", label: "ドリップ" },
        ],
      },
      ...emptyFoundations().slice(1),
    ],
    completed: [],
    moveCount: 0,
    status: "playing",
  });

  await page.locator(".tableau-column").nth(0).locator(".play-card").click();
  await page.locator(".foundation-slot").nth(0).click();

  const state = await page.evaluate(() => window.__wordSolitaireTest.getState());
  expect(state.completedCount).toBe(1);
  expect(state.activeFoundationCount).toBe(0);
  expect(state.completedLabels).toContain("コーヒー");
});

test("a revealed tableau card stays visible after the top card moves away", async ({ page }) => {
  await page.goto("/");

  await page.evaluate((snapshot) => {
    window.__wordSolitaireTest.setBoard(snapshot);
  }, {
    currentLevelIndex: 0,
    columns: [
      [
        { id: 10, type: "word", genreKey: "music", genreLabel: "音楽", label: "ギター", faceUp: false },
        { id: 11, type: "word", genreKey: "music", genreLabel: "音楽", label: "リズム", faceUp: true },
      ],
      [],
      [],
      [],
    ],
    stock: [],
    waste: [],
    activeFoundations: emptyFoundations(),
    completed: [],
    moveCount: 0,
    status: "playing",
  });

  await page.locator(".tableau-column").nth(0).locator(".play-card").click();
  await page.locator(".tableau-column").nth(1).locator(".column-head").click();

  const state = await page.evaluate(() => window.__wordSolitaireTest.getState());
  expect(state.columnTopLabels[0]).toBe("ギター");
  expect(state.columnHiddenCounts[0]).toBe(0);
  await expect(page.locator(".tableau-column").nth(0).locator(".play-card")).toContainText("ギター");
});

test("changing levels updates genre count and move limit", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: /Lv\.3\s+連想ルート/ }).click();

  const state = await page.evaluate(() => window.__wordSolitaireTest.getState());
  expect(state.currentLevelIndex).toBe(2);
  expect(state.moveLimit).toBe(120);
  await expect(page.locator("#level-name")).toContainText("連想ルート");
  await expect(page.locator("#completed-count")).toHaveText("0 / 10");
  await expect(page.locator("#move-count")).toHaveText("0 / 120");
});

test("different genres cannot stack on the tableau", async ({ page }) => {
  await page.goto("/");

  await page.evaluate((snapshot) => {
    window.__wordSolitaireTest.setBoard(snapshot);
  }, {
    currentLevelIndex: 0,
    columns: [
      [{ id: 3, type: "word", genreKey: "ocean", genreLabel: "海", label: "波" }],
      [{ id: 4, type: "word", genreKey: "music", genreLabel: "音楽", label: "リズム" }],
      [],
      [],
    ],
    stock: [],
    waste: [],
    activeFoundations: emptyFoundations(),
    completed: [],
    moveCount: 0,
    status: "playing",
  });

  await page.locator(".tableau-column").nth(0).locator(".play-card").click();
  await page.locator(".tableau-column").nth(1).locator(".column-head").click();

  const state = await page.evaluate(() => window.__wordSolitaireTest.getState());
  expect(state.columnLengths).toEqual([1, 1, 0, 0]);
  await expect(page.locator("#message")).toContainText("違うジャンルです");
});

test("cards cannot stack on an original genre card in the tableau", async ({ page }) => {
  await page.goto("/");

  await page.evaluate((snapshot) => {
    window.__wordSolitaireTest.setBoard(snapshot);
  }, {
    currentLevelIndex: 0,
    columns: [
      [{ id: 5, type: "word", genreKey: "music", genreLabel: "音楽", label: "ギター" }],
      [{ id: 6, type: "genre", genreKey: "music", genreLabel: "音楽", label: "音楽" }],
      [],
      [],
    ],
    stock: [],
    waste: [],
    activeFoundations: emptyFoundations(),
    completed: [],
    moveCount: 0,
    status: "playing",
  });

  await page.locator(".tableau-column").nth(0).locator(".play-card").click();
  await page.locator(".tableau-column").nth(1).locator(".column-head").click();

  const state = await page.evaluate(() => window.__wordSolitaireTest.getState());
  expect(state.columnLengths).toEqual([1, 1, 0, 0]);
  await expect(page.locator("#message")).toContainText("元のジャンルカードの上には重ねられません");
});

test("move limit produces a loss state", async ({ page }) => {
  await page.goto("/");

  await page.evaluate(() => {
    const api = window.__wordSolitaireTest;
    const state = api.getState();
    api.setMoveCount(state.moveLimit - 1);
  });

  await page.locator("#stock-button").click();

  const state = await page.evaluate(() => window.__wordSolitaireTest.getState());
  expect(state.status).toBe("lost");
  await expect(page.locator("#move-remaining")).toHaveText("手数切れ");
  await expect(page.locator("#message")).toContainText("手数切れ");
  await expect(page.locator("#hint-button")).toBeDisabled();
});

test("next level button unlocks after a win state", async ({ page }) => {
  await page.goto("/");

  await page.evaluate(() => {
    window.__wordSolitaireTest.setStatus("won");
  });

  await expect(page.locator("#next-level-button")).toBeEnabled();
  await expect(page.locator("#message")).toHaveAttribute("data-state", "won");
});
