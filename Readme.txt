Steps to run the project: 
1- open the project
2- npm i

**************************************
1) Register a user with the below CURL

curl --location --request POST 'localhost:1000/register' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "test@live.com",
    "password": "testpw",
    "name": "Task"
}'

--------------------------------
2) Login with below CURL

curl --location --request POST 'localhost:1000/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "test@live.com",
    "password": "testpw"
}'

-----------------------------------
3) /me using the authorization header with the below CURL after getting the token from /register or /login

curl --location --request GET 'localhost:1000/me' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAbGl2ZS5jb20iLCJpYXQiOjE2NzIyNDQ1NjQsImV4cCI6MTY3MjI0ODE2NH0.dZfOljEoI73FN-VRVCMO9uqXdVC0pOwqj9PC6OmQnVo' \
--data-raw ''