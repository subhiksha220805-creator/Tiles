$ErrorActionPreference = 'Stop'
$projectDirectory = $PSScriptRoot
$serverUrl = 'http://127.0.0.1:8765/'
$pythonLauncher = Get-Command py.exe -ErrorAction SilentlyContinue

if (-not $pythonLauncher) {
    Add-Type -AssemblyName System.Windows.Forms
    [System.Windows.Forms.MessageBox]::Show('Python was not found. Install Python, then double-click start-viewer.bat again.', 'Tiles 360 Viewer') | Out-Null
    exit 1
}

Start-Process -FilePath $pythonLauncher.Source -ArgumentList @('-m', 'http.server', '8765', '--bind', '127.0.0.1') -WorkingDirectory $projectDirectory -WindowStyle Hidden
Start-Sleep -Milliseconds 900
Start-Process $serverUrl
