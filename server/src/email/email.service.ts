import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private readonly transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  async sendEmail(email: string) {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Redefinir Senha',
      text: 'Clique no link para redefinir sua senha: http://seusite.com/resetar-senha',
    };

    try {
      await this.transporter.sendMail(mailOptions);
      console.log('Email enviado');
    } catch (error) {
      console.log('Erro ao enviar o email',error);
      throw new Error('Erro ao enviar o email');
    }
  }
}
