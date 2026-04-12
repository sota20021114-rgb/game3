const fs = require("fs");
const path = require("path");
const { defineConfig } = require("@playwright/test");

const nodeCandidates = [
  process.execPath,
  path.join(process.env.ProgramFiles || "C:\\Program Files", "nodejs", "node.exe"),
  path.join(process.env.LOCALAPPDATA || "", "Programs", "nodejs", "node.exe"),
];

const nodeBinary = nodeCandidates.find((candidate) => candidate && fs.existsSync(candidate)) || "node";

module.exports = defineConfig({
  testDir: "./tests",
  timeout: 30_000,
  expect: {
    timeout: 5_000,
  },
  retries: 0,
  use: {
    baseURL: "http://127.0.0.1:4173",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
  },
  webServer: {
    command: `"${nodeBinary}" tests/server.js`,
    url: "http://127.0.0.1:4173",
    reuseExistingServer: true,
    timeout: 10_000,
  },
  projects: [
    {
      name: "chromium",
      use: {
        browserName: "chromium",
      },
    },
  ],
});
