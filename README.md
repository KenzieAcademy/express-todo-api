# Express API TODO App

Here are your the definitions for the schema and endpoints you will need in your application. You may have other endpoints or additional fields on your schema, but the following ones are required.

## Schema

*This is the where the structure of your data is definined. A TODO in this application is just a JavaScript object with properties on it that store information related to that TODO.*

`todo`

The following are required fields:

- id: integer
- title: string
- createdAt: datetime object

## API

`/todos`

Methods:

- GET
- POST

`/todos/:id` (id is the id of the todo item you want to interact with)

Methods:

- GET
- PATCH
- DELETE

## Additional Notes

The db array can keep track of all the data only while the server is still running. If you stop or restart the server, then the db array will be empty again and you will have to add new data. If you were using a real database, then the data would be saved there and it would persist even if the server restarted.
