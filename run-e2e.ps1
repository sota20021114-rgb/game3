$ErrorActionPreference = "Stop"

$nodeCandidates = @(
  "$env:ProgramFiles\nodejs\node.exe",
  "$env:LOCALAPPDATA\Programs\nodejs\node.exe"
)

$node = $nodeCandidates | Where-Object { Test-Path $_ } | Select-Object -First 1

if (-not $node) {
  throw "node.exe が見つかりません。Node.js をインストールしてください。"
}

& $node ".\node_modules\playwright\cli.js" test @args
