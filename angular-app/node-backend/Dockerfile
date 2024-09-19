# Usa una imagen base de Node.js
FROM node:14

# Crear directorio de la aplicación
WORKDIR /usr/src/app

# Copiar archivos package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer el puerto 5000 para el backend
EXPOSE 5000

# Comando para correr la aplicación
CMD ["npm", "start"]
