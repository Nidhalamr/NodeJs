setTimeout(()=>{console.log('HELLO WORLD')}, 0);




const http = require("http")
const server = http.createServer(function(req,res){
    res.write("<h1>Hello Node!!!!</h1>")
})

server.listen(3000,(err)=>{
    err?console.log(err):console.log("server is runnig on port 3000")
}) 


var fs = require('fs');

fs.readFile('welcome.txt', function (err, data) {
    if (err) {
       return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
 }); 





 var generator = require('generate-password');
var passwords=[]
passwords.push(passwordsgenerator.generate({
	length: 10,
	numbers: true
}));
console.log(passwords);



var nodemailer = require('nodemailer');
 
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'nidhal.amr@gmail.com',
      pass: 'hehe'
    }
  });

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });