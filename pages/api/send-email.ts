import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'eycisxxx@gmail.com',
                pass: 'hkli fpfu tlto auyd',
            },
        });

        const mailOptions = {
            from: 'eycisxxx@gmail.com',
            to: 'dzugam00@jcu.cz',
            subject: 'CV downloaded',
            text: 'Somebody has downloaded the CV from your portfolio! ',
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error sending email', error });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
