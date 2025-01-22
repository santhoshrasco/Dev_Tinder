-node modules
-Install Express
-Create a server using express
-write request handlers for /test, /hello
-Installed nodemon and created a script to run the server with nodemon
-what are dependencies
-what is the use use of '-g' while install npm
-difference between caret ^ and tilde ~
-Orders of the routes matters alot
-Installed postman app to test the server --tested api call
-Written logic for GET, POST, DELETE, PUT and PATCH requests
-Explord the use of ?,+, (), * in the routes
-Use of regex in routes /a/, /.*fly$/
-reading the query papameters in the routs
-reading dynamic routes

-multiple route handlers
-next()
-next function and errors along with res.send()
-What is middlware & why do we need it?
-how express js basically handles requests behind the scenes
-app.use() & app.all() DIFFERENCES?
-errorhandling using this app.use('/',(err,req,res,next)=>{}), This is not a bettwer way and TRY CATCH is the best way.

-Create a free cluster on MONGO DB website
-INstalled mongoose library
-connect your application to the database "connection URL/devTInder"
-Call the connect DB function and connect to database before starting application on 3000

-Create a user schema and user model
-create POST /signup API to add data to database
-push some document using API calls from postman
-Error Handling using TRY, CATCH

-JS object vs JSON objects
-Add the express.json middleware to your app
-make your signup API dynamic to receive data from the end user
-User.findone() with duplicate email ids, which obk=ject returned
-API - Get user by ID

-Create a delete user API
-Difference betwen PATCH and PUT
-API - Update user by ID
-Explores the mongoose DOcumentation for model methods
-What are the options in a Model.findOneandUpdate method, explore more about it
-API - update with email id

-Explore Schematype options from the documentation

-add required, unique, and minlengh, trim validation to the email field
-Add default
-Create a custom validate function for gender
-Improve the DB schema - PUT all appropriate validations on each field in schema
-Add timestamps to the userSchema
-Add API level validation on patch request & Signup post api
-Data sanitizing - add API validation for each field
-install validator
Explore Validator library function and use Validator funcions for password, email, photoUrl
-Never trust req. body

-validate data signup using helper function
-install bcrypt package
-Create passwordHash using bcrypt.hash & save the user is encrypted password
-create login API
-Compare passwords and throw errors if email or password is valid

-INstall Cookie-parser
-just send a dummy cookie to user
-create GET /profile API and check if you get the cookie back
-install json webtoken
-In Login API, after email and password validation, create JWT token and send it to user in cookies
-read the cookies inside your profile API and find the Logged in User
-userAuth Middleware

-Add the userAuth middleware in profile and a new sendConnectionRequest API
-Set the expiry of JWT token and cookies to 7 days
-Create UserScema method to getJwt()
-Create UserSchema method to comparepassword(passwordInputByUser)

-explore tinder APIs with tinder
-Read documentation for express.router()
-Create AuthRouter, ProfileRouter, requestRouter
-Import these routers in app.js
-Create POST/Logout API
-Create PATCH /profile/edit
-Create PATCH/ profile/password API => forget password API'
-Make you validate all data in every POST, PATCH apis

-Create Connection request Schema
-Send Connection Request API
-Proper validation of DATA
-THink about all corner Cases
-$or query in Mongooose ***important**
-schema.pre("save") function
-Read more about indexes in Mongo DB
-Why do we need indexes in MongoDB
-What is the advantages and disadvantages of creating?
-Read this article about Compound indexes
-ALWAYS THINK ABOUT CORNER CASES
    