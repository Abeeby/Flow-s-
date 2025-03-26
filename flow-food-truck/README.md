# FLOW - Cuisine de Saison | Site Web & Gestion

![FLOW Logo](/public/logo.png)

## À propos

FLOW - Cuisine de Saison est un food truck proposant des plats frais et de saison, préparés avec des produits locaux et de qualité. Ce projet comprend un site web moderne avec :

- Une interface client intuitive pour passer commande
- Un système de gestion de stocks et d'ingrédients
- Un back-office pour l'administration
- Une gestion des déchets et des statistiques

## Technologies utilisées

- **Frontend** : React, Next.js, Tailwind CSS
- **Backend** : API Routes de Next.js
- **Base de données** : PostgreSQL avec Prisma ORM
- **Authentification** : NextAuth.js
- **Gestion d'état** : Zustand
- **Notifications** : React Hot Toast

## Fonctionnalités

- **Menu et Commande**
  - Affichage du menu avec catégories et filtres
  - Système de panier avec mise à jour en temps réel
  - Choix de date et heure de retrait

- **Gestion des stocks**
  - Suivi automatique des ingrédients utilisés pour chaque commande
  - Alertes pour les stocks faibles
  - Gestion des achats et des approvisionnements

- **Gestion des déchets**
  - Suivi des ingrédients gaspillés
  - Statistiques et analyses pour optimiser la consommation
  - Suggestions pour réduire les déchets

- **Tableau de bord Admin**
  - Vue d'ensemble des ventes et des commandes
  - Statistiques détaillées sur les performances
  - Gestion des produits et des ingrédients

## Installation

### Prérequis

- Node.js 18+ et npm
- PostgreSQL (pour le développement local)

### Étapes d'installation

1. Clonez le dépôt :
   ```
   git clone https://github.com/votre-username/flow-food-truck.git
   cd flow-food-truck
   ```

2. Installez les dépendances :
   ```
   npm install
   ```

3. Configurez la base de données :
   ```
   npx prisma generate
   npx prisma db push
   ```

4. Lancez le serveur de développement :
   ```
   npm run dev
   ```

5. Accédez à l'application sur http://localhost:3000

## Déploiement sur Vercel

1. Créez un compte sur [Vercel](https://vercel.com) si ce n'est pas déjà fait

2. Configurez une base de données PostgreSQL, par exemple sur [Railway](https://railway.app), [Supabase](https://supabase.com) ou [Neon](https://neon.tech)

3. Liez votre dépôt GitHub à Vercel

4. Lors de l'importation du projet, configurez les variables d'environnement suivantes:
   - `DATABASE_URL` : Votre URL de base de données PostgreSQL
   - `NEXTAUTH_SECRET` : Une chaîne aléatoire pour sécuriser les sessions
   - `NEXTAUTH_URL` : L'URL de votre site déployé (ex: https://flow-food-truck.vercel.app)

5. Déployez votre application

## Résolution des problèmes courants

### Erreurs de déploiement

- **FUNCTION_INVOCATION_FAILED** : Vérifiez que votre fichier .env est correctement configuré
- **EDGE_FUNCTION_INVOCATION_TIMEOUT** : Assurez-vous que les appels à la base de données sont optimisés
- **OPTIMIZED_IMAGE_REQUEST_FAILED** : Vérifiez que les domaines d'images sont correctement configurés dans next.config.js

### Base de données

Si vous rencontrez des erreurs de connexion à la base de données:

1. Vérifiez que votre variable `DATABASE_URL` est correcte
2. Assurez-vous que le schéma Prisma est à jour (`npx prisma generate`)
3. Vérifiez que votre base de données PostgreSQL accepte les connexions depuis Vercel

## Structure du projet

```
flow-food-truck/
├── prisma/                # Modèles de base de données et migrations
├── public/                # Fichiers statiques (images, logo, etc.)
├── src/
│   ├── app/               # Routes de l'application (routing App)
│   │   ├── admin/         # Pages d'administration
│   │   ├── api/           # API Routes
│   │   ├── cart/          # Page du panier
│   │   ├── menu/          # Page du menu
│   │   └── ...
│   ├── components/        # Composants React réutilisables
│   │   ├── layout/        # Composants de mise en page
│   │   └── ui/            # Composants d'interface utilisateur
│   └── lib/               # Bibliothèques et utilitaires
│       ├── hooks/         # Hooks personnalisés
│       ├── utils/         # Fonctions utilitaires
│       ├── prisma.ts      # Client Prisma
│       └── store.ts       # Store Zustand (état global)
└── ...
```

## Développement

### Base de données

Le schéma de la base de données est défini dans `prisma/schema.prisma`. Pour modifier le schéma, suivez ces étapes :

1. Modifiez le fichier `schema.prisma`
2. Générez le client Prisma : `npx prisma generate`
3. Appliquez les modifications : `npx prisma db push`

### API

Les points d'entrée API sont définis dans `src/app/api/`.

### Authentification

L'authentification est gérée par NextAuth.js, avec différents niveaux d'accès :
- Client : accès aux commandes et à l'historique
- Admin : accès complet au back-office

## Déploiement

Pour déployer l'application en production :

1. Construisez l'application :
   ```
   npm run build
   ```

2. Démarrez le serveur de production :
   ```
   npm start
   ```

## Maintenance

### Mise à jour des dépendances

Pour mettre à jour les dépendances du projet :
```
npm update
```

## Support

Pour toute question ou assistance, contactez [votre-email@exemple.com](mailto:votre-email@exemple.com)

## Licence

Ce projet est sous licence [MIT](LICENSE)
