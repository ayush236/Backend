import * as nodemailer from 'nodemailer'
const SendMail =async(Maildetails,callback)=>{
    try{
        const transporter =nodemailer.createTransport({
            port:465,
            service:'Gmail',
            host:'smtp.gmail.com',
            secure:true,
            auth:{
                user:'ayush.khatri105@gmail.com',
                pass:'jinp bcqe xdln zzue'
            }
        })
        const info = await transporter.sendMail(Maildetails)
        callback(info)

    }

    catch(error){
        console.log(error)


    }
}
export default SendMail;