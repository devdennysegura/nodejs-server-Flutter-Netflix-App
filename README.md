# Netflix App

## Requirements

* Mac OS X, Windows, or Linux
* [Node.js](https://nodejs.org/) version 9.0+
* [MongoDB](https://docs.mongodb.com/v3.2/administration/install-community/) latest version

## Quick start

````bash
git clone git@github.com:DennySegura/netflix-app.git
cd netflix-app
npm install
````

## Deploy

### Run server

#### [Release Mode]

````bash
npm run pr # Ejecuta el servidor
npm run start-pr # Ejecuta el servidor + Front
npm run apm-pr # Ejecuta aplicación con PM2
````

#### [Development Mode]

- Para ejecutar de forma independiente el servidor y la aplicación los siguientes comandos en terminales diferentes.

````bash
npm run client-dev
npm run dev
````

- Para ejecutar de forma agrupada.

````bash
npm run start-dev
````

## Tests

````bash
npm run jest
npm run jest-watch
````

## Heath check

Endpoint to health check **http://{HOST}/api/health** this return uptime

### Endpoints

**/all** to fetch all tv shows and save in your mongoDB
**/shows/:genre** get all tv shows from a genre 

### Genres

Drama, Action, Fantasy, Horror, Romance, Crime, Thriller, Mystery, 
Science-Fiction, Comedy, Family, Music, Adventure, Espionage, Supernatural

### TVMaze Api

http://www.tvmaze.com/api


Thanks
------

**Denny Segura** © 2018+. Released under the [MIT License].<br>

[MIT License]: http://mit-license.org/