# Тech-site

This is a WEB application using React for the front-end - a site for posting classifieds for technique.
Used a Softuni Practice server for back-end.

## Steps for local instalation and review:
1. Clone the repository: https://github.com/fanitaadamova/My-personal-React-Project-Softuni.git
2. Navigate to server folder (cd server):
   - npm install - command for install all packages dependances;
   - node server.js - command to start the back-en server;
4. Navigate to client folder(cd client):
   - npm install - command for install all install all packages dependances;
   - npm run dev - runs the app in development mode;
   - open http://localhost:5173 to view it in the browser.

## Deployment
- Project DEMO - https://tech-site-six.vercel.app
- Link to repository with deployed version code - https://github.com/fanitaadamova/Tech-site-version-with-deploy
- Used:
  - Vercel for the frontend deployment;
  - Render for the backend deployment;

    
## Site overview 
### Every page contains navigation
 - NON logged in user
![image](https://github.com/fanitaadamova/My-personal-React-Project-Softuni/assets/113979211/84882981-672b-4e85-8f6b-bc16837765c4)




image.png
 - logged in user 
 image.png
![image](https://github.com/fanitaadamova/My-personal-React-Project-Softuni/assets/113979211/20a41b22-b002-46b5-b412-0d08c8be1188)


### Every page contains footer
![image](https://github.com/fanitaadamova/My-personal-React-Project-Softuni/assets/113979211/142d0bf7-6f63-4f30-9231-f6e3ce09eea8)


### Home page
Public page for all users.

Showes baner - products by category (there are 5 categories - each button goes to the page with products from the corresponding category). 



![image](https://github.com/fanitaadamova/My-personal-React-Project-Softuni/assets/113979211/8b21e1c9-3eb3-4a5f-9225-9f623c23a510)
![image](https://github.com/fanitaadamova/My-personal-React-Project-Softuni/assets/113979211/022bc90f-75eb-40da-8931-e1c524ad342b)

![image](https://github.com/fanitaadamova/My-personal-React-Project-Softuni/assets/113979211/cf8863ec-729c-4bdb-a4b6-9278488ece28)
![image](https://github.com/fanitaadamova/My-personal-React-Project-Softuni/assets/113979211/855433e7-dcef-4134-bd35-ed56321d9cac)



#### Under the banner there is a section, which showes latest 3 created ads: 
The button "Виж всички оферти" goes to Catalog page with all ads.
![image](https://github.com/fanitaadamova/My-personal-React-Project-Softuni/assets/113979211/75b7d633-5d26-4b27-a5a1-4f67182dbd9d)

![image](https://github.com/fanitaadamova/My-personal-React-Project-Softuni/assets/113979211/df149101-b78e-4597-9f26-943da207475a)


##### CRUD OPERATIONS

 - GET to endpoint HOST/data/:collection
   The service return array of all products in technique collection;

 - GET to endpoint HOST/data/:collection?where=type={match}                      
       *for example: GET  http://localhost:3030/data/technique?where=type="Лаптоп"
    Append where={match} to the query parameters, where {match} is a URL-encoded string of comma-separated entries in format propName=value. Only full matches returned.


### Login page

The login form expects as input: email and password.
Valid credentials in this case are:
 -	The valid Email address must be example@example.example.
 -	Password should be at least 5 symbols as well.
 -	Button is disabled, if some of fiels is empty or does not meet the conditions.
   
  ![image](https://github.com/fanitaadamova/My-personal-React-Project-Softuni/assets/113979211/2495792e-d634-4d71-ba3a-1b6ad251c9b4)



### Register page

The register form expects as input: username, email, mobile number, password and repeat password.
Valid inputs in this case are:
 - 	Username should be at least 5 symbols as well.
 - 	The valid Email address must be example@example.example
 - 	Password should be at least 5 symbols as well
 - 	Repeat password and password must be matched.
 - 	All fields must be requered.
 -    Button is disabled, if some of fiels is empty or does not meet the conditions.
   

 ![image](https://github.com/fanitaadamova/My-personal-React-Project-Softuni/assets/113979211/73c49041-9314-44e4-a049-bc2540fcd4c3)

![image](https://github.com/fanitaadamova/My-personal-React-Project-Softuni/assets/113979211/85764948-171a-498d-a642-b47d28327134)

#### Authorization and CRUD OPERATIONS
 - POST to endpoint HOST/users/login
 - POST to endpoint HOST/users/register
 - GET  to endpoint HOST/users/logout
   
    - User can login in system after successful registration with email and password.
    - The service automatically creates a session and returns an authorization token, that will be used for requests. The session is stored in browser's Local storage. 
    - Path for registration and login is stored in authAPI.js file
    - Registration require username, valid email, telephone number and password.


### DEMO USERS
  - peter@abv.bg       pass: 123456;
  - george@abv.bg      pass: 123456;



### Add new product adds
Page only for logged in users.
Every logged in user can create a new add in the site.

The form expects as input: type of product, model, year, description, price, image and os.
Valid data in this case is:
 -	Model and description- should be at least 5 characters long
 -	The year must be greater than 2000.
 -	The price must be a positive number.
 - All fields are requared.
The "Създай" button should be disabled if the inputs are NOT valid.

![image](https://github.com/fanitaadamova/My-personal-React-Project-Softuni/assets/113979211/95d8eb3c-c722-42d3-98ce-d088bc5aeea0)


### Profile page
Page only for logged in users
Profile page contains:
 -  personal account information for user;
 -  list with own created adds with link to the details of theme;
 -  information about the total amount of purchases;
 -  list with all bought products with link to the details of theme.

![image](https://github.com/fanitaadamova/My-personal-React-Project-Softuni/assets/113979211/2e7a8c5e-9362-4e6e-a29d-2889be8614d5)

![image](https://github.com/fanitaadamova/My-personal-React-Project-Softuni/assets/113979211/c754ebe0-2f66-424e-abf7-10b9970b7b15)
![image](https://github.com/fanitaadamova/My-personal-React-Project-Softuni/assets/113979211/2469109a-946d-445b-bd5d-f847e7b0e861)


### Search page
Public page for all users.
Search by name of product  - case insensitive and dynamic search on typed character input 

![image](https://github.com/fanitaadamova/My-personal-React-Project-Softuni/assets/113979211/11d87c06-c893-4f08-827d-5aacf2271eae)

![image](https://github.com/fanitaadamova/My-personal-React-Project-Softuni/assets/113979211/ffc600ef-5c00-4865-a411-39a8d4fed622)


### Product deatails page
The page there are two parts - public and private(for logged in users).
1. Public part: 
 - all users can see product info and comments, but not to buy, edit, delete product or to add a new comment.
   
![image](https://github.com/fanitaadamova/My-personal-React-Project-Softuni/assets/113979211/d0932e67-4a61-4a7f-b514-5ec3b90b2d7d)




2. Private part - only for logged in users:   
   - Can buy every product only once. If the product was already bought, the user wiil see message;
   - Can posts a new comment;
   - If the user is owner of post, it sees edit and delete buttons.

![image](https://github.com/fanitaadamova/My-personal-React-Project-Softuni/assets/113979211/9fad5850-9694-4dfa-9e61-356f4ad4db2d)




#### Product deatails - delete product

![image](https://github.com/fanitaadamova/My-personal-React-Project-Softuni/assets/113979211/640f7d18-09ee-4530-a94a-d0f08ba23188)



#### Product deatails - edit information

![image](https://github.com/fanitaadamova/My-personal-React-Project-Softuni/assets/113979211/7a627883-5299-4b82-b10e-b4d085de4ced)




