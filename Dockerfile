# Étape 1 : Construction de l'application Angular
FROM node:18.19 AS build

# Définir le répertoire de travail dans le container
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code source de l'application
COPY . .

# Compiler l'application Angular
RUN npm run build --prod

# Étape 2 : Créer l'image de production
FROM nginx:alpine

# Copier les fichiers construits dans l'image de Nginx
COPY --from=build /app/dist/ /usr/share/nginx/html

# Exposer le port de Nginx
EXPOSE 80

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
