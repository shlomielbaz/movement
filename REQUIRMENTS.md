**Full Stack Developer Home Assignment**

**Introduction**

Thank you for taking on our home assignment. This task requires the implementation of a Users Web List application, encompassing both the backend and frontend components. The backend, developed in Node.js Web API, interacts with an external API ([https://reqres.in/](https://reqres.in/)) and includes various endpoints, authentication, and CORS configuration. The frontend will be a simple UI that interacts with and calls functions from the backend.

**Backend Requirements**

Endpoints

1.  **Reading all USERS from a specific page**

*   Route: **/getUsers/{page}**
*   Method: GET

1.  **Read specific USER**

  

*   Route: **/getUser/{id}**
*   Method: GET

1.  **Create a new USER**

  

*   Route: **/createUser**
*   Method: POST

1.  **Update USER**

  

*   Route: **/updateUser/{id}**
*   Method: PUT
*   Note: Ensure proper validation, checking for existence, etc.

1.  **Delete USER**

  

*   Route: **/deleteUser/{id}**
*   Method: DELETE

Authentication

Implement authentication in a way of your choice. Ensure that only authenticated requests are accepted.

Error Handling

Return appropriate HTTP status codes:

*   Successful: 200 or 204
*   Incorrect Request Content: 404

CORS Configuration

Allow your app to be consumed only by the specified origins:

*   [https://localhost](https://localhost/)
*   [www.google.com](http://www.google.com/)
*   [https://www.facebook.com](https://www.facebook.com/)

Design Patterns and Code Quality

Apply design patterns intelligently and write code that is readable, clean, and efficient. Consider using a User UML for guidance. Ignore the support object received at the API calls – use only the data.

Data Storage

You have the flexibility to either save users received from the external API in a database or manage them in the application cache.

**Frontend Requirements**

Implement a simple and user-friendly UI to interact with the backend, use a UI framework/library of your choosing. The frontend should include:

1.  **List of Users**

*   Display a paginated list of users retrieved from the backend's **/getUsers/{page}** endpoint.

1.  **View User Details**

  

*   Allow users to click on a user in the list to view detailed information using the **/getUser/{id}** endpoint.

  

1.  **Create User Form**

  

*   Implement a form to create a new user using the **/createUser** endpoint.

  

1.  **Update User Form**

  

*   Create a form to update user information using the **/updateUser/{id}** endpoint.

  

1.  **Delete User Option**

  

*   Provide an option to delete a user through the **/deleteUser/{id}** endpoint.

  

1.  **Error Handling**

  

*   Display appropriate error messages for unsuccessful backend requests.

  

**Submission**

Please upload both the backend and frontend solutions to your GitHub repository. Reply to this email with a link to the repository.

Good luck! If you have any questions or need clarifications, feel free to reach out.
