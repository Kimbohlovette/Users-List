# Users-List
## Setup
In order to run this application locally. Clone the repository
```
git clone https://github.com/Kimbohlovette/Users-List.git
```
After cloning the repository, navigate to the root directory with `cd Users-List`.

Note: Make sure you have latest version of `node` installed and latest version of `npm`.

### Frontend
In order to start the web app, navigate to the frontend directory `cd frontend` and execute the command below to install all packages and their dependencies.
```
npm install
```
On successful installation, execute `npm start` or `npm run start` to start the frontend.

The application may break if the server has not yet started. 

### Backend

The backend server is built with Express.js and MongoDB database.
1. Naviage to the backend directory `cd backend`

2. Install mongodb [Follow this link to install and setup mongodb](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/)

3. After installing mongodb successfully, run `mongosh` on the terminal to enter the Mongodb terminal.
4. Create a new database called `users-list` by running the following command on the mongodb terminal
   ```
   use users-list
   ```
5. Run `npm install` to install all package dependencies and start the server with `npm run dev`.




