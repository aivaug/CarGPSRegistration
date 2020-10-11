using backend.Models.UsersEntities;
using MailKit.Net.Smtp;
using MimeKit;
using System;

namespace backend.Helpers
{
    public class EmailSending
    {
        public static void SendVerificationEmails(User userData)
        {
            try
            {
                var message = new MimeMessage();
                string Name = userData.Email.Split('@')[0];
                message.From.Add(new MailboxAddress("Rask kambarioka", "raskambarioka@gmail.com"));
                message.To.Add(new MailboxAddress(Name, userData.Email));
                message.Subject = "You are added as \"Vehicle GPS registration system \" user, please finish your registration";
                message.Body = new TextPart("Html")
                {
                    Text = string.Format("<div><p>Please press on the link below to finish registration:</p><p><a href=\"http://localhost:3000/pr/verification/{0}\">Registration</a>{0}</p></div>", userData.VerificationCode)
                };
                using (var client = new SmtpClient())
                {
                    client.Connect("smtp.gmail.com", 587, false);
                    client.Authenticate("raskambarioka@gmail.com", "nesaugusslaptazodis");
                    client.Send(message);
                    client.Disconnect(true);
                }
            }
            catch(Exception e)
            {
                Console.WriteLine(string.Format("Google auth error, verification code: {0}", userData.VerificationCode));
            }
        }
    }
}
