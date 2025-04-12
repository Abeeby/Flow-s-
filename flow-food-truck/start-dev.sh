#!/bin/bash

# Augmente la mémoire allouée à Node.js à 4GB
export NODE_OPTIONS="--max-old-space-size=4096"

# Affiche un message de confirmation
echo -e "\e[32mMémoire allouée à Node.js augmentée à 4GB\e[0m"

# Lance l'application en mode développement
echo -e "\e[33mDémarrage de l'application...\e[0m"
npm run dev 