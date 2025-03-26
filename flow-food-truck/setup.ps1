# Script d'installation pour FLOW Food Truck
Write-Host "Installation des dépendances du projet FLOW Food Truck..." -ForegroundColor Green

# Installer les dépendances principales
npm install

# Installer bcrypt et ses types
npm install bcrypt
npm install --save-dev @types/bcrypt

# Installer pg pour PostgreSQL
npm install --save-dev pg

# Générer les types Prisma
npx prisma generate

Write-Host "Installation terminée! Pour démarrer le projet en développement:" -ForegroundColor Green
Write-Host "npm run dev" -ForegroundColor Yellow

Write-Host "Pour déployer sur Vercel:" -ForegroundColor Green
Write-Host "1. Créez un dépôt GitHub et poussez votre code" -ForegroundColor Yellow
Write-Host "2. Créez un compte Vercel et importez le dépôt" -ForegroundColor Yellow
Write-Host "3. Configurez les variables d'environnement DATABASE_URL et NEXTAUTH_SECRET" -ForegroundColor Yellow 