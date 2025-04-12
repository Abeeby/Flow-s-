# Guide de déploiement sur Netlify pour Flow Food Truck

Ce guide vous explique comment déployer correctement votre application Flow Food Truck sur Netlify.

## Prérequis

- Un compte Netlify
- Un dépôt Git (GitHub, GitLab, Bitbucket) contenant votre projet

## Configuration

Les fichiers nécessaires sont déjà configurés dans ce projet :

1. `netlify.toml` - Configuration pour Netlify
2. `@netlify/plugin-nextjs` - Plugin installé comme dépendance de développement

## Étapes de déploiement

### Méthode 1: Déploiement via l'interface web de Netlify

1. Connectez-vous à votre compte Netlify
2. Cliquez sur "New site from Git"
3. Choisissez votre fournisseur Git (GitHub, GitLab, Bitbucket)
4. Sélectionnez votre dépôt Flow Food Truck
5. Paramètres de déploiement :
   - Branche à déployer : `main` (ou votre branche principale)
   - Commande de build : `npm run build` (déjà configurée dans netlify.toml)
   - Répertoire de publication : `.next` (déjà configuré dans netlify.toml)
6. Cliquez sur "Deploy site"

### Méthode 2: Déploiement via Netlify CLI

1. Installez Netlify CLI : `npm install -g netlify-cli`
2. Authentifiez-vous : `netlify login`
3. Initialisez votre site : `netlify init`
4. Suivez les instructions à l'écran
5. Déployez : `netlify deploy --prod`

## Variables d'environnement

Assurez-vous de configurer les variables d'environnement nécessaires dans l'interface Netlify :

1. Allez dans les paramètres de votre site sur Netlify
2. Naviguez vers "Build & deploy" > "Environment"
3. Ajoutez les variables d'environnement de votre fichier `.env` ou `.env.production`

## Problèmes courants et solutions

### Erreur "Page not found"

Si vous voyez une erreur "Page not found" après le déploiement :

1. Vérifiez que le plugin Next.js pour Netlify est correctement installé
2. Assurez-vous que les redirections sont correctement configurées dans netlify.toml
3. Vérifiez les journaux de build pour les erreurs

### Problèmes avec les routes API

Les routes API de Next.js nécessitent un serveur. Sur Netlify, elles sont traitées comme des fonctions Netlify.

### Problèmes avec les images

Si vous utilisez le composant Image de Next.js, assurez-vous que les domaines d'images sont correctement configurés dans `next.config.ts`.

## Support

Si vous rencontrez des problèmes, consultez :

- [Documentation Netlify pour Next.js](https://docs.netlify.com/integrations/frameworks/next-js/overview/)
- [GitHub du plugin Netlify Next.js](https://github.com/netlify/next-runtime)

## Alternative : Déploiement sur Vercel

Next.js est développé par Vercel et fonctionne de façon optimale sur leur plateforme. Si vous rencontrez trop de difficultés avec Netlify, envisagez de déployer sur Vercel pour une expérience plus fluide. 