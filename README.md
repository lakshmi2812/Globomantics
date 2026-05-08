# Globomantics_git_repo
Globomantics is a website that allows the users to browse homes in three different countries. It provides a dropdown search that allows users to search homes by country. It was developed using ReactJS and Typescript. It was containerized using Docker, making it easy to run it on a local machine or on cloud.

Steps to run this project locally:

1. Clone this repository to your local machine
2. Navigate to the repository
3. Run 'npm install' to install all the dependencies
4. If you run into dependency issues, then, run 'npm install --legacy-peer-deps'
4. Run 'npm start' to run the application

Note: This ReactJS project will run by default at https://localhost:3000
You can change the port if you want in package.json. 
Please delete or ignore the Dockerfile if you do not want to run the app inside a Docker conatiner

To run the app inside a Docker container:
1. Install Docker desktop, suitable for your Operating System
2. Start Docker desktop and run the following command:
   ```docker run -it -p 3000:3000 globomatics-app ```
   Note: The -it flag is optional and just helps to check the logs
   Check you app running on https://localhost:3000 
