# Table of Contents

1. [What&rsquo;s MEANStack?](#orge468dbf)
2. [MEAN explanation](#org60afa7f)
    1. [MongoDB](#org8e21721)
    2. [Express](#org606706b)
    3. [Angular](#org350e30a)
    4. [Node.js](#org0bcf02b)
    5. [Javascript everywhere paradigm](#orgcb6ce08)
3. [How MEANStack works?](#org8a12694)
    1. [Backend](#orgfb6568b)
    2. [Frontend](#orgbaffaac)
4. [Acknowledgements](#orgec06995)

<a id="orge468dbf"></a>

# What&rsquo;s MEANStack?

This is a template project that implements the MEAN stack. The acronym MEAN stands for (M)ongoDB, (E)xpress, (A)ngular
and (N)ode.js. This is a full Javascript stack so both backend and frontend are written in the same language.
Furthermore, the project is production-ready thanks to the use of the Docker engine which allows a fast and scalable
deployment. And last but not least this stack is fully open source, which means that many developers work every day on
all these components.

<a id="org60afa7f"></a>

# MEAN explanation

<a id="org8e21721"></a>

## MongoDB

MongoDB is a document-oriented NoSQL database that uses JSON-like document called BSON (Binary JSON). MongoDB use
collections and documents: documents consist of key-value pairs which are the basic unit of data in MongoDB. Collections
contain sets of documents and function which is the equivalent of relational database tables. These features allow
MongoDB to be used for high volume data storage.

<a id="org606706b"></a>

## Express

Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and
mobile applications. Express has a myriad of HTTP utility, methods and middleware used to create a robust API quickly
and easily. Express provides a thin layer of fundamental web application features, without obscuring Node.js, for this
reasons it&rsquo;s the standard framework used on it.

<a id="org350e30a"></a>

## Angular

Angular is a development platform, built on TypeScript. As a platform, Angular include a component-based framework for
building scalable web applications and a collection of well-integrated libraries that cover a wide variety of features,
including routing, forms management, client-server communication, and more. Angular also has a suite of developer tools
to help the development, build, test, and maintenance of the code. Angular offers the advantage of a platform that can
scale from single-developer projects to enterprise-level applications.

<a id="org0bcf02b"></a>

## Node.js

Node.js is an open-source, cross-platform, backend Javascript runtime environment that runs on the V8 engine and
executes Javascript code outside a web browser. Node.js lets developers use Javascript to write command-line tools for
server-side scripting and running scripts server-side to produce dynamic web page content before the page is sent to the
user&rsquo;s web browser.

<a id="orgcb6ce08"></a>

## Javascript everywhere paradigm

Node.js is a representation of the JavaScript everywhere paradigm that means unifying web application development around
a single programming language, rather than different languages for server-side and client-side scripts. Such as Node.js
the MEAN stack aims to use Javascript in the whole development.

<a id="org8a12694"></a>

# How MEANStack works?

MEANStack is a boilerplate which consists in a template web application that shows the interactions between all the MEAN
stack components. The project is divided into backend and frontend, both parts are production-ready and can be simply
deployed using the Docker engine. Both backend and frontend have a `docker-compose.yaml` file in their root directory,
the dockers are based on a `node:latest` docker image and work using `pm2-runtime`. PM2 is a daemon process manager that
helps to manage and keep applications online and automatically allows the cluster mode to run multi-thread processes.

<a id="orgfb6568b"></a>

## Backend

The backend provides APIs callable only by the frontend thanks to the CORS policy implementation. The APIs are handled
by the routing module that is divided into sub-modules. The sub-modules interact with the MongoDB models that create the
connections and are defined by a schema-model. The `user` model describes a simple user schema with only a username and
a password. The `entity` schema is defined with only `id` and `data`, this structure allows to insert every not-defined
object in `data` without change the schema. N.B.: This is not a good practice but allows a very fast implementation

To start the backend service it is necessary to create a `.env` file in the backend folder and define the MongoDB
variables, backend and frontend ports and the comma-separated CORS origins. Note that in production it is necessary to
insert in the `FRONTEND_ORIGINS` variable the domain name of the site (
Example: `FRONTEND_ORIGINS=domain-site.com,another-domain-site.com`).

    # This is an example of the backend .env file
    PORT=8888
    MONGO_INITDB_ROOT_USERNAME=admin
    MONGO_INITDB_ROOT_PASSWORD=password
    MONGO_INITDB_DATABASE=db_name
    FRONTEND_ORIGINS=localhost,127.0.0.1
    FRONTEND_PORT=4200

<a id="orgbaffaac"></a>

## Frontend

The frontend consists in a few pages and simple interactions with the backend: `user` registration/login features and
the `entity` inserting and reading features. To frontend has two `Dockerfile` that can be defined in
the `docker-compose.yaml`. The default is `Dockerfile.dev` that only serve the Angular application and it can be used in
development since it does not allow connection from external hosts. To deploy the frontend in production it is necessary
to replace the `Dokerfile.dev` with `Dockerfile` in `docker-compose.yaml`. To define the environment variables it is
necessary to change the `frontend/src/environment/environment.ts` and `frontend/src/environment/environment.prod.ts` and
to create a `.env` file in the frontend folder.

    // environment.ts
    export const environment = {
      production: false,
      BACKEND_IP: '127.0.0.1',
      BACKEND_PORT: 8888
    };

    // environment.prod.ts
    export const environment = {
      production: true,
      BACKEND_IP: '127.0.0.1',
      BACKEND_PORT: 8888
    };

    # This is an example of the frontend .env file
    PORT=4200
    BACKEND_IP=localhost
    BACKEND_PORT=8888

Note that in the above example the `BACKEND_IP` in `.env` is defined as `localhost`, because the frontend works with a
proxy. The proxy redirects the requests made to the frontend that contains the `/api` base endpoint to the backend (
localhost in development). The development proxy configurations are stored in the `frontend/config/proxy.config.json`.
Instead, in case of production, it is necessary to change the `BACKEND_IP` defined in the `environment.prod.ts` with the
effective backend IP. When in production the proxy requests are handled by `nginx`, this because in production once the
Angular build is completed the `dist` folder is moved to an `nginx:latest` docker container and is defined as a proxy
through the `nginx-proxy.conf`.

<a id="orgec06995"></a>

# Acknowledgements

This project is not completed, we are working to improve both flexibility and security of the components. We hope that
this template can help someone to create, develop and deploy his project in a fast way and without worrying to create
from zero the components and their interactions.

