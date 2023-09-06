[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/XqBuIcOG)

# Week 11 Assignment : Backend Project deployed on https://recippedia-book.fly.dev/api-docs/

This week 11 assignment which is Backend Project implements node js, express, authentication, authorization, open api documentation and validation in swagger. Here are the requirements and steps that I did to develop recipe book backend web app as described below:

## Deliverables
-	A web application with database integration. 
-	A custom-built API Role-Based Access Control (RBAC). 
-	Database (SQL using MySQL).
-	Implement CRUD (Create, Read, Update, Delete) functionality. 
-	Implement Authentication and Authorization, method of author choice. 
-	A theme of book recipe is chosen. 
-	Comprehensive API Documentation

## Web application choice : Recipe Book
a.	Theme: Design a recipe book application for users to store and retrieve recipes.
b.	Database: Use an SQL database to store recipe details such as ingredients and instructions.
c.	API: Create endpoints to manage recipes, including adding, editing, and deleting recipes.

## Description
Build a recipe book web application as a choice. Web app should be integrated with a database through a custom-built API and implement CRUD (Create, Read, Update, Delete) functionality. 

## Skill Set
Creates a custom API for your web application. Implement CRUD (Create, Read, Update, Delete) functionality. Implement database functionality (SQL using MySQL). Document API comprehensively.
## Tips
### Project planning
Review again the requirements carefully. Plan recipe book web application, including features and functionality to be implemented. SQL with MySQL is database technology choosen for this recipe book web app. 
### API Development
Build custom API. Define endpoints that Recipe Book will have. Implement user registration and authentication. Implement RBAC within API for this Recipe Book.
### Database Management
Set up MySQL database system on DBeaver Viewer. Integrate database with API for CRUD operations. Ensure data flow between API and database is functional (through postman or swagger or one of them). Implement user registration and login functinality securely. Consider RBAC implementation within the API for data access control. Test database operations for CRUD and error handling.
### Documentation and Refinement
Document API comprehensively (open api swagger?), include endpoint descriptions, request/response example, and any authetication mechanisms. Refine recipe book web app’s functionality. Test recipe book web application thoroghly to ensure it meets the assignment requirements. Update README.md file with clear instructions on how to run recipe book app locally. Reflect on how RBAC enhances the scurity and access control of recipe book web app. 
## Output
Primary deployment method through fly.io. Nevertheless, author creates sql files as priority first to check whether the codes are running just fine or not.
## Language and Validation
Javascript and validation fields
## Role-Based Access Control (RBAC):
Author created RBAC as instructions above or database and API endpoints as described after this part. 
## API development with recippedia database on MySQL & DBeaver Viewer
The database name is recippedia in MySQL on DBeaver viewer. The tables are described below:
User Table:
Fields: user_id, username, password_hash, role
Recipe Table:
Fields: id, user_id (foreign key), name, ingredients, instructions, created_at, updated_at
API Endpoints:
POST /recipes, Roles Allowed: User, Publisher
GET /recipes/{id}, Roles Allowed: User, Publisher
GET /recipes, Roles Allowed: User, Publisher
PUT /recipes/{id}, Roles Allowed: Publisher
DELETE /publisher/recipes/{id}, Roles Allowed: Publisher
### Notes 
Only publisher who can update and delete recipes and do all CRUD functionality while user could only create recipe, get all recipe and get recipe by id. The deleted recipes by Publisher will stay in database for data mining purpose.
## Supporting Tools 
Chat GPT

Please visit https://recippedia-book.fly.dev/api-docs/ for checking deployment with Open API Swagger Preview.

Please contact author at andalanaldi@gmail.com for further information. Thank you