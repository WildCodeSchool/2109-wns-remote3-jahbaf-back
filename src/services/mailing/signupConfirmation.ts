import sgMail from '@sendgrid/mail';

export async function sendConfirmationEmail(email: string, confirmationUrl: string) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
    const message = {
        to: email,
        from: 'abdelli.amine.aa@gmail.com',
        subject: 'Confirmation de votre compte',
        html: (`
    <p>Bonjour,</p>
    <p>Pour finaliser votre inscription sur la plateforme jahbaf, merci de cliquer sur le lien ci-dessous :<br>
    <a href="${confirmationUrl}">Confirmer mon compte</a><br>
    Si vous n'êtes pas à l'origine de cette action, ignorez simplement cet e-mail.<br>
    Pour toute demande, contactez nous à cette adresse : contact@jahbaf.io.<br><br>
    Nous vous remercions pour votre confiance.<br><br>
    L'équipe Jahbaf</p><br><br>
    `),
    };

    await sgMail.send(message);
}

export function createMailingURL(token: string, route: string) {
    return `${process.env.FRONTEND_URL}${route}&token=${token}`;
}