# UK Bank Holidays

This is a web application hosted in AWS which shows upcoming Uk bank holidays. It has two parts frontend and backed.
###  FrontEnd: 
The frontend is a static webpage deployed on AWS S3. 
Locally it can be accessed by just opening the index.html file under frontend directory

###  BackEnd: 
The backend is a serverless application which runs as an AWS Lambda function and is accessed by an API Gateway.

## Dev Setup

### Start Backend
Locally the app runs using serverless offline.Run below commands:    

cd backend   
npm install   
npm start

### Open UI
Just open the index.html file under frontend directory in your favourite browser 

### Run Backend Tests
cd backend   
npm test   

### Deploy serverless application in AWS
cd backend   
npm run deploy   


## Working application in AWS
http://holidays-dev.s3-website.eu-west-2.amazonaws.com/
