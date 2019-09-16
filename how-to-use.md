
## Getting started
Here is an overview of how to start this project

### 1. Installing minimum deps
Make sure you have `node` installed, with a version greater than `7.0.0`. We highly recommend [`nvm`](https://github.com/creationix/nvm), or just installing the latest version of `node` with `brew install node` on macOS.

Once node is installed execute `npm install` command from the root of the project, to install all dependencies required for server to run properly.
Next, navigate to `doordash-angular` folder and run `npm install` from there to fetch all dependencies reqired for client side of the application

### 2. Serving your app
There are two modes that application can run:

- ## Production Mode: 
in this mode all client sources will be build, minified and uglified and copied to `public` folder of the project and served on `http://localhost:3000` url. To run this mode, execute `npm run start` command from the root folder of the project. 

- ## Development Mode:
in this mode all client sources will be compiled with sourcemaps, that can be used for code debugging. Application will be running on `http://localhost:8081` and all requests will be proxied to api that will be running on `http://localhost:8080`
To run this mode navigate to `doordash-angular` folder from the root of the project and execute `npm run start` command. 
This mode has a hotswap capbilities on, so all changes in source files will be refelected on application ui on-the-fly.
