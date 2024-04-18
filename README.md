# Movement Assignment
The server is a simple RESTFul API service based on the awesome [Nest JS](https://docs.nestjs.com/) framework. \
The UI was built with [Angular 17](https://angular.io/) using [PrimeNG](https://primeng.org/) UI kit. \
The service uses [SQLite](https://www.sqlite.org/) database, and the ORM framework is [TypeORM](https://typeorm.io/). \
The [system requirements](https://github.com/shlomielbaz/movement-assignment/blob/main/REQUIRMENTS.md) link.

## Endpoints:
The URL to the RESTFull API documentation is: HTTP://localhost:3000/api

#### Swagger snapshot:
<img width="1458" alt="image" src="https://github.com/shlomielbaz/movement-assignment/assets/426076/fe3cc277-ffe9-4aa7-af94-658ae8002634">

## Authentication:
The service uses the JWT authentication mechanism, and protected API endpoints are limited to access by ```@UseGuards(AuthGuard)```, where only the requests with header ``` Authorization: Bearer ${token} ``` allow access to the resource.

#### JWT flow schema:
<img width="612" alt="image" src="https://github.com/shlomielbaz/movement-assignment/assets/426076/43c52bc7-cb0c-4d61-9dc7-8a7e95232ac7">

#### Generate TOKEN_SECRET using CLI:
```javascript
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```
## Error Handling:
The API access failures are caught automatically and it's delivered by ```NestJS```.

## CORS Configuration:
The CORS settings are in the server bootstrap, enabling access to the UI service, Google, and Facebook.

```javascript
  app.enableCors({
    allowedHeaders: '*',
    origin: [
      'http://localhost:4200',
      'http://www.google.com',
      'https://www.facebook.com',
    ],
  });
```
The ``` http://localhost:4200 ``` is the client URL.

## Design Patterns and Code Quality:
The server (api-service) is organized in a module pattern where a bunch of common operations are encapsulated in module scope, some classes are set as **_injectable_** to utilize **_Dependency injection_** to get more decoupled code, also a **_Repository Pattern_** and **_Façade Pattern_** is reached by **_TypeORM_** and more...

The client (ui-service) also uses **_injectable_** objects and **_Observer Pattern_** and more...

## Data Storage:
As mentioned, the service uses an SQLite database, the setting:
```
  TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'src/data/db',
      synchronize: true,
      entities: [User],
    }),
```

## Frontend & UI Snapshots:
<img width="1298" alt="image" src="https://github.com/shlomielbaz/movement-assignment/assets/426076/8a44ab23-2cc8-4485-a076-ce9ec70aedd4">

<img width="763" alt="image" src="https://github.com/shlomielbaz/movement-assignment/assets/426076/404cce4a-8f07-49de-8f17-fbca0e164214">

<img width="764" alt="image" src="https://github.com/shlomielbaz/movement-assignment/assets/426076/a4968d3a-0b3d-4d85-aadf-daa3b601c44e">

### Installation:
For server installation, get into api-servoce directory and run the following CLI commands
```bash
npm install --force
```
For client installation, get into ui-servoce directory and run the following CLI commands
```bash
npm install
```

### Running the application:
#### Using CLI
From ui-service and api-service folders run ``` npm start ```.

#### Using docker-compose
From the application root directory run the following CLI commands
```bash
docker-compose build
```
```bash
docker-compose up
```
#### docker-compose logs:
<img width="1416" alt="image" src="https://github.com/shlomielbaz/movement-assignment/assets/426076/7a060948-c379-45c9-aaab-c73cc079ac18">

#### Docker Desktop:
<img width="1243" alt="image" src="https://github.com/shlomielbaz/movement-assignment/assets/426076/0c8cf2c6-af73-47ab-b86e-6364ab0605fe">

## Project Structure:
```
├── api-service
│   └── src
│       ├── data
│       │   └── constants.ts
│       ├── entities
│       │   └── user.entity.ts
│       ├── main.ts
│       └── modules
│           ├── app
│           │   ├── app.controller.ts
│           │   ├── app.module.ts
│           │   └── app.service.ts
│           ├── auth
│           │   ├── auth.controller.ts
│           │   ├── auth.guard.ts
│           │   ├── auth.module.ts
│           │   └── auth.service.ts
│           └── users
│               ├── dtos
│               │   ├── create-user.dto.ts
│               │   ├── update-user.dto.ts
│               │   └── user.dto.ts
│               ├── users.controller.ts
│               ├── users.module.ts
│               └── users.service.ts
└── ui-service
    └── src
        ├── app
        │   ├── app.component.html
        │   ├── app.component.ts
        │   ├── components
        │   │   ├── login
        │   │   │   ├── login.component.html
        │   │   │   ├── login.component.scss
        │   │   │   └── login.component.ts
        │   │   ├── page-not-found
        │   │   │   ├── page-not-found.component.html
        │   │   │   ├── page-not-found.component.scss
        │   │   │   └── page-not-found.component.ts
        │   │   ├── register
        │   │   │   ├── register.component.html
        │   │   │   ├── register.component.scss
        │   │   │   └── register.component.ts
        │   │   └── users
        │   │       ├── users.component.html
        │   │       ├── users.component.scss
        │   │       └── users.component.ts
        │   ├── interfaces
        │   │   └── user.ts
        │   ├── services
        │   │   ├── auth.service.ts
        │   │   └── users.service.ts
        │   └── utils
        │       ├── app.config.ts
        │       ├── app.routes.ts
        │       ├── auth.guard.ts
        │       ├── constants.ts
        │       └── jwt.interceptor.ts
        ├── assets
        ├── index.html
        ├── main.ts
        └── styles.scss
```

