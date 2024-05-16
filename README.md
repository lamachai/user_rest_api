# What is this?
This is a simple web api project. This project was developed to help test front-end applications
This is a good helper. You just need to regist the name and email of a user into the database

## Dependencies
The dependencies of this project are:
* expressjs
* body-parser
* validator
* cors
* sequelize
* mysql2

# How to use it?
To use the project you need mysql database(Xampp, Wampp or other), Insomnia, postman or other tool to test apis, nodejs and npm installed

## 1 - Download the project from github
## 2 - Configure mysql
    run the follow command on the mysql prompt (after login):
    Change the credentials in the file db.js on the src folder
    DATABASE_NAME = yourdatabase
    DATABASE_USER = yourDatabaseUser
    DATABASE_PASSWORD = yourDatabasePassword

    CREATE DATABASE yourdatabase

## 3 - install the dependencies
    run the follow command in the root folder (the folder that contains the index,.js file)
    npm i

## 4- run the app
    npm run start

## 5- insert your data using your api testing tool
    to insert data create a POST http request to http://localhost:5051/create
    choose the body json
    write json as bellow
    {
        "name": "theNameToRegist",
        "email": "TheEmailToRegist@domain.com"
    }

    the name must no be an empty
    the email must follow the pattern
