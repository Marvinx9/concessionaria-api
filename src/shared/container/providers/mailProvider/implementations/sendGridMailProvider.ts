import { injectable } from 'tsyringe';
import { IMailProvider } from '../IMailProvider';
import nodemailer, { Transporter } from 'nodemailer';
import Handlebars from 'handlebars';
import fs from 'fs';
import sendgridTransport from 'nodemailer-sendgrid-transport';
import * as dotenv from 'dotenv';

dotenv.config();

@injectable()
class SendGridMailProvider implements IMailProvider {
  private client: Transporter;

  constructor() {
    this.client = nodemailer.createTransport(
      sendgridTransport({
        auth: {
          api_key: process.env.SENDGRID_API_KEY,
        },
      }),
    );
  }

  async sendMail(
    to: string,
    subject: string,
    variables: any,
    path: string,
  ): Promise<void> {
    const templateFileContent = fs.readFileSync(path).toString('utf-8');
    const templateParse = Handlebars.compile(templateFileContent);
    const templateHTML = templateParse(variables);

    const message = {
      to,
      from: 'afraniodantas.data@gmail.com <afraniodantas.data@gmail.com>',
      subject,
      html: templateHTML,
    };

    const result = await this.client.sendMail(message);

    console.log('Message sent: %s', result.messageId);
  }
}

export { SendGridMailProvider };
