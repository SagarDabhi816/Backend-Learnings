// all steps are mentioned here to perform the crud operation into database

//  Step 1 : you need to create a simple appliation with crud operation using the posman
//  Step 2 : creta a db folder and db file inside it write code to connect out application to the server using connection string
//  Step 3 : use mongodb schema to defin the structure of out data that how it will look on the database
//  Step 4 : create a model using mongoose.model and give your schema of data in it
//  Step 5 : export this model and import it at your main file like app.js or servre.js
//  Step 6 : use notemodel.create and add your title and content from the req.body  postamn

// FROM DATABASE
//  To create data : on post api use notemodel.create and add { title and content } we get from  req.body
//  To get data  : on get api use notemodel.find() this will return all data from tht databae
//  To delete data   :
