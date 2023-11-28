# Тech-site

This is a WEB application using React for the front-end - a site for posting classifieds for technique.
Used a Softuni Practice server for back-end.

## Steps for local instalation and review:
1. Clone the repository: https://github.com/fanitaadamova/My-personal-React-Project-Softuni.git
2. Navigate to server folder (cd server;):
   - npm install - command for install all packages dependances;
   - node server.js - command to start the back-en server;
4. Navigate to client folder(cd client):
   - npm install - command for install all install all packages dependances;
   - npm run dev - runs the app in development mode;
   - open http://localhost:5173 to view it in the browser.


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



# Under the banner there is a section, which showes latest 3 created ads: 
There is a button with link to Catalog page with all ads.
![image](https://github.com/fanitaadamova/My-personal-React-Project-Softuni/assets/113979211/75b7d633-5d26-4b27-a5a1-4f67182dbd9d)

![image](https://github.com/fanitaadamova/My-personal-React-Project-Softuni/assets/113979211/df149101-b78e-4597-9f26-943da207475a)

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


### DEMO USERS
  - peter@abv.bg       pass: 123456;



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



