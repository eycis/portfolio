export const sendEmail = async (): Promise<void> => {
    console.log('sendEmail function called');
    try {
        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Error sending email from email service');
        }
    } catch (error) {
        console.error('Error:', error);
    }
};
