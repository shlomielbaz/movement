# Movement Assignment
A simple RESTFul API service based on the awsome [Nest JS](https://docs.nestjs.com/) framework.



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
