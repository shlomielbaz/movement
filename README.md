# Movement Assignment
A simple RESTFul API service based on the awesome [Nest JS](https://docs.nestjs.com/) framework.
The [system requirements](https://github.com/shlomielbaz/movement-assignment/blob/main/REQUIRMENTS.md) link
### API Documentation:
The URL to the RESTFull API documentation (Swagger) is: HTTP://localhost:3000/api
<img width="1505" alt="image" src="https://github.com/shlomielbaz/movement-assignment/assets/426076/6624ee29-5f21-4157-8d3f-a4f176144e95">



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
