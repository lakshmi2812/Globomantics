#This file contains the instructions to containerize the Globomantics ReactJS app

#The base is a Nodejs image
FROM node:22.2.0
#The path inside the image where the application files will be copied
WORKDIR /app
#Copy all the app files to the image - relative to the path given in the Working directory
#So, when you say ./src, you mean, copy to /app/src and so on
COPY src ./src
COPY public ./public
COPY package.json ./
COPY tsconfig.json ./
#Run the command to run the npm install command to install all the dependencies from package.json
RUN npm install --legacy-peer-deps
#Run the 'npm start' command to start the app
CMD ["npm", "start"]
#Finally, expose port 3000 so that our app can run on that port
EXPOSE 3000




