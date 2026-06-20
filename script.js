
// const fs = require('fs');

// // fs.writeFile("gift.txt","I have a wonder full gift for you",function(err){
// //    if (err) console.error(err);
// //    else console.log("File created successfully");
// // });

// // fs.writeFile("accept.txt","I have recived the gift and its wonderfull thank you for this",function(err){
// //     if(err) console.error(err);
// //     else console.log("Another file has been created successfully");
// // })

// // fs.appendFile("gift.txt","Glad you like it ",function(err){
// //     if(err) console.error(err);
// //     else console.log("File has been updated ");
// // })

// // fs.rename("accept.txt","recived.txt",function(err){
// //     if(err) console.error(err);
// //     else console.log("filename changed")
// // })

// // fs.copyFile("gift.txt","./copy/newgift.txt",function(err){
// //     if(err) console.log(err);
// //     else console.log("file has been copied to another ");
// // })

// // fs.unlink("recived.txt",function(err){
// //     if(err) console.error(err.message);
// //     else console.log("removed")
// // })

// // fs.readFile("gift.txt",function(err,data){
// //     if(err) console.error(err);
// //     else console.log(data.toString());})

// // fs.mkdir("newfolder",function(err){
// //     if(err) console.error(err);
// //     else console.log("folder created successfully");
// // })

// // fs.mkdir("frontend",function(err){
// //     if (err) console.error(err);
// //     else console.log("folder created successfully");

// // })

// fs.readFile("gift.txt",function(err, data){
//     if(err) console.error(err);
//     else console.log(data.toString());
// })

// fs.copyFile("gift.txt","./frontend/newfile.txt", function(err){
//     if(err) console.error(err);
//     else console.log("file has been copied to another folder");
// })

// fs.readFile("./frontend/newfile.txt",function(err,data){
//     if(err) console.error(err);
//     else console.log(data.toString());
// })

// const http = require('http');

// const server = http.createServer(function(req,res){
//     res.end("Hellow From server");
//  })

//  server.listen(3000);

// const express = require("express");
// const app = express();



// app.get('/',function(req,res){
//     res.send("This message should be shown on Home page");
// })

// app.get('/profile',function(req,res){
//     res.send("This message should be shown on profile page");
// })

// app.get('/about',function(req,res){
//     res.send("This message should be shown on about page");
// })

// app.get("/contact", function(req,res,next){
//     return next(new Error("Error occure while accessing the contact page"));
// })

// //---------Creating middle-wares------------------//

// app.use(function(req,res,next){
//     console.log("This is a testing middleware");
//     next();
// })


// //-----------Error Handling ---------------//
// app.use(function(err,req,res,next){
//     console.error(err.stack);
//     res.status(500).send('Error from server');
// })
// app.listen(3000);

