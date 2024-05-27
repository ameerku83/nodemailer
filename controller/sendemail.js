
const nodemailer = require("nodemailer");


 const emailSend= async (req, res) => {
  
      const transporter = nodemailer.createTransport({
        service: "gmail",
       
        auth: {
          user:process.env.EMAIL ,
          pass:process.env.PASSWORD,
        }
      })
      
      const email =req.body.email;
      const subject =  req.body.subject;
      const body = req.body.body;
      
       transporter.sendMail({
        from: process.env.EMAIL,
        to: email,
        subject: subject,
        html :body,
        
      });
  
     res.status(200).send("Email has been  successfully sent");
    
  };
    
module.exports=emailSend