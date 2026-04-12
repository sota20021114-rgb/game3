$ErrorActionPreference = "Stop"

$nodeDirCandidates = @(
  "$env:ProgramFiles\nodejs",
  "$env:LOCALAPPDATA\Programs\nodejs"
)

$nodeDir = $nodeDirCandidates | Where-Object { Test-Path (Join-Path $_ "node.exe") } | Select-Object -First 1

if (-not $nodeDir) {
  throw "Node.js の実行ファイルが見つかりません。"
}

$npm = Join-Path $nodeDir "npm.cmd"
$node = Join-Path $nodeDir "node.exe"

& $npm install
& $node ".\node_modules\playwright\cli.js" install chromium
