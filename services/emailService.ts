export const sendEmail = async (): Promise<void> => {
    try {
        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Error sending email');
        }
    } catch (error) {
        console.error('Error:', error);
    }
};
