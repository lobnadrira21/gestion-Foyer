# Étape 1 : Utiliser Node.js 18 pour la construction
FROM node:18 AS build

# Définir le répertoire de travail
WORKDIR /app

# Copier package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le contenu du projet dans le conteneur
COPY . .

# Construire l'application Angular
RUN npm run build -- --configuration production


# Étape 2 : Utiliser Nginx pour servir l'application
FROM nginx:alpine

# Copier les fichiers Angular construits dans le dossier de Nginx
COPY --from=build /app/dist/FoyerFront /usr/share/nginx/html

# Copier la configuration Nginx pour la redirection vers index.html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposer le port 80
EXPOSE 80

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
