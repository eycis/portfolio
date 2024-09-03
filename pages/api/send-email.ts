import { NextApiRequest, NextApiResponse } from 'next';
import sendgrid from '@sendgrid/mail';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log("api handler called");
    if (req.method === 'POST') {
        const recipientEmail = process.env.RECIPIENT_EMAIL as string;
        const apiKey = process.env.API_KEY as string;
        const user = process.env.USER as string;
    
        
        if (!recipientEmail || !user || ! apiKey) {
            return res.status(500).json({ message: 'Missing email info ' });
        }
        sendgrid.setApiKey(apiKey);
        try {
            const msg = {
                to: recipientEmail,
                from: user,
                subject: 'CV downloaded',
                text: 'Somebody has downloaded the CV from your portfolio! How Amazing ',
            };

            await sendgrid.send(msg);
            res.status(200).json({ message: 'Email sent successfully' });
            console.log("mail se odeslal");
        } catch (error) {
            console.error('Error sending email:', error);
            if (error instanceof Error) {
                res.status(500).json({ message: 'Error sending email', error: error.message });
            } else {
                res.status(500).json({ message: 'Error sending email', error: 'An unknown error occurred' });
            }
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}