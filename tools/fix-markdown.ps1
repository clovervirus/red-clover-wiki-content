param(
  [switch]$WriteChanges
)

$ErrorActionPreference = 'Stop'

function Fix-H1s {
  Get-ChildItem -Recurse -Filter *.md | ForEach-Object {
    $inFence = $false
    $h1Seen = $false
    $out = foreach ($line in Get-Content $_ -Encoding UTF8) {
      if ($line -match '^```') { $inFence = -not $inFence }
      if (-not $inFence -and $line -match '^(#) (.+)') {
        if ($h1Seen) { $line = $line -replace '^# ', '## ' } else { $h1Seen = $true }
      }
      $line -replace '\s+$',''
    }
    if ($WriteChanges) { $out | Set-Content $_ -Encoding UTF8 } else { $out | Out-Null }
  }
}

function Fix-Blanks {
  (Get-ChildItem -Recurse -Filter *.md).FullName | ForEach-Object {
    $c = Get-Content $_ -Raw
    $c = $c -replace '(?m)(?<!\n)^(#{1,6} )','`n$1'
    $c = $c -replace '(?m)^(#{1,6} .+)$','$1`n'
    $c = $c -replace '(?m)(?<!\n)^(?:[-*+] |\d+\. )','`n$0'
    $c = $c -replace '(?m)(^[-*+] .+(?:\n[-*+] .+)*$)','$1`n'
    if ($WriteChanges) { Set-Content $_ $c -Encoding UTF8 }
  }
}

function Fix-Fences {
  (Get-ChildItem -Recurse -Filter *.md).FullName | ForEach-Object {
    $c = Get-Content $_ -Raw
    $c = $c -replace '(?m)^```$','```text'
    if ($WriteChanges) { Set-Content $_ $c -Encoding UTF8 }
  }
}

Fix-H1s
Fix-Blanks
Fix-Fences

Write-Host "Run: npx markdownlint-cli2 \"**/*.md\" '!node_modules' '!**/dist/**'" -ForegroundColor Cyan
