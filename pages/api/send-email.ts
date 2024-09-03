import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {

        const user = process.env.GMAIL_USER;
        const pass = process.env.GMAIL_PASSWORD;
        const recipientEmail = process.env.RECIPIENT_EMAIL;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user,
                pass,
            },
        });

        const mailOptions = {
            from: user,
            to: recipientEmail,
            subject: 'CV downloaded',
            text: 'Somebody has downloaded the CV from your portfolio! How Amazing ',
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error('Error sending email:', error);
            if (error instanceof Error) {
                // Pokud error je instance Error, můžete bezpečně přistupovat k error.message
                res.status(500).json({ message: 'Error sending email', error: error.message });
            } else {
                // Pokud error není instance Error, můžete jednoduše vrátit obecnou chybovou zprávu
                res.status(500).json({ message: 'Error sending email', error: 'An unknown error occurred' });
            }
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
