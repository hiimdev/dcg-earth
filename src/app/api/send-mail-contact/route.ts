import fs from 'fs';
import path from 'path';

import { transporter } from './mail.config';

export async function POST(request: Request) {
  try {
    const { email, name, subject, message } = await request.json();

    // Send email to admin
    const templatePath = path.resolve('src/templates/contact-template.html');
    let htmlTemplate = fs.readFileSync(templatePath, 'utf-8');

    htmlTemplate = htmlTemplate
      .replaceAll('{{name}}', name)
      .replaceAll('{{email}}', email)
      .replaceAll('{{message}}', message)
      .replaceAll('{{subject}}', subject);

    const mailOptions = {
      from: process.env.SMTP_DEFAULT_EMAIL,
      to: process.env.SMTP_DEFAULT_EMAIL,
      subject: `New Contact Request - ${message}`,
      html: htmlTemplate,
      cc: process.env.NEXT_PUBLIC_DCG_MAIL_CC,
    };

    await transporter.sendMail(mailOptions);

    // Send email to user
    const userTemplatePath = path.resolve('src/templates/user-contact-template.html');
    let userHtmlTemplate = fs.readFileSync(userTemplatePath, 'utf-8');

    userHtmlTemplate = userHtmlTemplate.replaceAll('{{name}}', name);

    const userMailOptions = {
      from: process.env.SMTP_DEFAULT_EMAIL,
      to: email,
      subject: `${name}, Thank you for your enquiry to Digital Climate Group ! 🎉`,
      html: userHtmlTemplate,
    };

    await transporter.sendMail(userMailOptions);

    return new Response(JSON.stringify({ message: 'Send email successfully' }), { status: 200 });
  } catch (error: any) {
    return (Response as any)?.json({ error }, { status: 500 });
  }
}
