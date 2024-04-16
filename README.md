# Movement Assignment
A simple RESTFul API service based on the awesome [Nest JS](https://docs.nestjs.com/) framework.
The [system requirements](https://github.com/shlomielbaz/movement-assignment/blob/main/REQUIRMENTS.md) link
### API Documentation:
The URL to the RESTFull API documentation (Swagger) is: HTTP://localhost:3000/api
<img width="1505" alt="image" src="https://github.com/shlomielbaz/movement-assignment/assets/426076/6624ee29-5f21-4157-8d3f-a4f176144e95">

### UI Snapshots:
<img width="1321" alt="image" src="https://github.com/shlomielbaz/movement-assignment/assets/426076/179f34ec-4ba4-4d0a-bd58-af231bea936e">

<img width="763" alt="image" src="https://github.com/shlomielbaz/movement-assignment/assets/426076/404cce4a-8f07-49de-8f17-fbca0e164214">

<img width="765" alt="image" src="https://github.com/shlomielbaz/movement-assignment/assets/426076/8861f84a-64dd-4c10-9401-76214870c0c9">


### Running the application using docker-compose
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




#### Generate TOKEN_SECRET using CLI
```javascript
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```
