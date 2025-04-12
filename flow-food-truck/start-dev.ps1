# Augmente la mémoire allouée à Node.js à 4GB
$env:NODE_OPTIONS="--max-old-space-size=4096"

# Affiche un message de confirmation
Write-Host "Mémoire allouée à Node.js augmentée à 4GB" -ForegroundColor Green

# Lance l'application en mode développement
Write-Host "Démarrage de l'application..." -ForegroundColor Yellow
npm run dev 