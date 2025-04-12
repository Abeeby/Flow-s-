const fs = require('fs');
const path = require('path');

// Création des dossiers nécessaires
const publicDir = path.join(__dirname, '../public');
const imagesDir = path.join(publicDir, 'images');
const servicesDir = path.join(publicDir, 'services');
const newsDir = path.join(publicDir, 'news');
const instagramDir = path.join(publicDir, 'instagram');

// Création du contenu d'une SVG de base
const createPlaceholderSVG = (text, width = 800, height = 600, bgColor = '#4CAF50', textColor = '#FFFFFF') => {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="${bgColor}" />
    <text x="50%" y="50%" font-family="Arial" font-size="40" text-anchor="middle" fill="${textColor}">${text}</text>
  </svg>`;
};

// Liste des dossiers à créer s'ils n'existent pas
const dirsToCreate = [
  imagesDir,
  servicesDir,
  newsDir,
  instagramDir,
  path.join(publicDir, 'menu'),
];

// Liste des images à créer
const imagesToCreate = [
  // Images de base
  { path: path.join(publicDir, 'hero-image.jpg'), content: createPlaceholderSVG('Hero Image') },
  { path: path.join(publicDir, 'logo.png'), content: createPlaceholderSVG('FLOW Logo', 250, 250) },
  { path: path.join(publicDir, 'app-store-badge.png'), content: createPlaceholderSVG('App Store', 140, 42) },
  { path: path.join(publicDir, 'google-play-badge.png'), content: createPlaceholderSVG('Google Play', 140, 42) },
  { path: path.join(publicDir, 'app-mockup.png'), content: createPlaceholderSVG('App Mockup') },
  
  // Labels et prix
  { path: path.join(publicDir, 'label-bio.png'), content: createPlaceholderSVG('Bio', 80, 80) },
  { path: path.join(publicDir, 'label-local.png'), content: createPlaceholderSVG('Local', 80, 80) },
  { path: path.join(publicDir, 'label-eco.png'), content: createPlaceholderSVG('Eco', 80, 80) },
  { path: path.join(publicDir, 'award-cuisine.png'), content: createPlaceholderSVG('Prix', 80, 80) },
  
  // Images de menu
  { path: path.join(publicDir, 'menu', 'burger-classique.jpg'), content: createPlaceholderSVG('Burger Classique') },
  { path: path.join(publicDir, 'menu', 'burger-veggie.jpg'), content: createPlaceholderSVG('Burger Veggie') },
  { path: path.join(publicDir, 'menu', 'burger-montagnard.jpg'), content: createPlaceholderSVG('Burger Montagnard') },
  { path: path.join(publicDir, 'menu', 'salade-marche.jpg'), content: createPlaceholderSVG('Salade Marché') },
  { path: path.join(publicDir, 'menu', 'bowl-mediterraneen.jpg'), content: createPlaceholderSVG('Bowl Méditerranéen') },
  { path: path.join(publicDir, 'menu', 'mousse-chocolat.jpg'), content: createPlaceholderSVG('Mousse Chocolat') },
  { path: path.join(publicDir, 'menu', 'tarte-fruits.jpg'), content: createPlaceholderSVG('Tarte Fruits') },
  { path: path.join(publicDir, 'menu', 'limonade.jpg'), content: createPlaceholderSVG('Limonade') },
  { path: path.join(publicDir, 'menu', 'the-glace.jpg'), content: createPlaceholderSVG('Thé Glacé') },

  // Images de pages spécifiques
  { path: path.join(publicDir, 'contact-hero.jpg'), content: createPlaceholderSVG('Contact Hero') },
  { path: path.join(publicDir, 'menu-hero.jpg'), content: createPlaceholderSVG('Menu Hero') },
  { path: path.join(publicDir, 'services-hero.jpg'), content: createPlaceholderSVG('Services Hero') },
  { path: path.join(publicDir, 'actualites-hero.jpg'), content: createPlaceholderSVG('Actualités Hero') },
  { path: path.join(publicDir, 'plat-semaine-hero.jpg'), content: createPlaceholderSVG('Plat Semaine Hero') },
  
  // Images de services
  { path: path.join(servicesDir, 'foodtruck.jpg'), content: createPlaceholderSVG('Food Truck') },
  { path: path.join(servicesDir, 'events.jpg'), content: createPlaceholderSVG('Événements') },
  { path: path.join(servicesDir, 'plat-emporter.jpg'), content: createPlaceholderSVG('Plat à Emporter') },
  { path: path.join(servicesDir, 'foodtruck-hero.jpg'), content: createPlaceholderSVG('Food Truck Hero') },
  { path: path.join(servicesDir, 'events-hero.jpg'), content: createPlaceholderSVG('Événements Hero') },
  { path: path.join(servicesDir, 'events-intro.jpg'), content: createPlaceholderSVG('Événements Intro') },
  { path: path.join(servicesDir, 'foodtruck-image.jpg'), content: createPlaceholderSVG('Food Truck Image') },
  
  // Images pour événements
  { path: path.join(servicesDir, 'event-mariage.jpg'), content: createPlaceholderSVG('Mariage') },
  { path: path.join(servicesDir, 'event-anniversaire.jpg'), content: createPlaceholderSVG('Anniversaire') },
  { path: path.join(servicesDir, 'event-entreprise.jpg'), content: createPlaceholderSVG('Entreprise') },
  { path: path.join(servicesDir, 'event-festival.jpg'), content: createPlaceholderSVG('Festival') },
  
  // Images pour les actualités
  { path: path.join(newsDir, 'menu-ete.jpg'), content: createPlaceholderSVG('Menu Été') },
  { path: path.join(newsDir, 'festival-gastronomique.jpg'), content: createPlaceholderSVG('Festival Gastronomique') },
  { path: path.join(newsDir, 'nouveaux-emplacements.jpg'), content: createPlaceholderSVG('Nouveaux Emplacements') },
  { path: path.join(newsDir, 'producteurs-locaux.jpg'), content: createPlaceholderSVG('Producteurs Locaux') },
  { path: path.join(newsDir, 'app-mobile.jpg'), content: createPlaceholderSVG('App Mobile') },
  
  // Icônes
  { path: path.join(publicDir, 'icon-eco.png'), content: createPlaceholderSVG('Eco Icon', 40, 40) },
  { path: path.join(publicDir, 'icon-recyclable.png'), content: createPlaceholderSVG('Recyclable', 40, 40) },
  
  // Images pour plat de la semaine
  { path: path.join(publicDir, 'plat-semaine-risotto.jpg'), content: createPlaceholderSVG('Risotto') },
  { path: path.join(publicDir, 'plat-previous-1.jpg'), content: createPlaceholderSVG('Plat Précédent 1') },
  { path: path.join(publicDir, 'plat-previous-2.jpg'), content: createPlaceholderSVG('Plat Précédent 2') },
  { path: path.join(publicDir, 'plat-previous-3.jpg'), content: createPlaceholderSVG('Plat Précédent 3') },
  
  // Instagram
  ...Array(6).fill().map((_, i) => ({
    path: path.join(instagramDir, `post-${i+1}.jpg`),
    content: createPlaceholderSVG(`Instagram ${i+1}`)
  })),
  
  // Réalisations
  ...Array(8).fill().map((_, i) => ({
    path: path.join(servicesDir, `realisation-${i+1}.jpg`),
    content: createPlaceholderSVG(`Réalisation ${i+1}`)
  })),
  
  // Food truck instagram
  ...Array(4).fill().map((_, i) => ({
    path: path.join(instagramDir, `foodtruck-${i+1}.jpg`),
    content: createPlaceholderSVG(`Foodtruck Insta ${i+1}`)
  })),
];

// Création des dossiers
dirsToCreate.forEach(dir => {
  if (!fs.existsSync(dir)) {
    console.log(`Création du dossier: ${dir}`);
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Création des images
imagesToCreate.forEach(({ path, content }) => {
  console.log(`Création de l'image: ${path}`);
  fs.writeFileSync(path, content);
});

console.log('Images de placeholder créées avec succès!'); 