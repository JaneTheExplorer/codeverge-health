// pages/api/signup.ts
import type { NextApiRequest, NextApiResponse } from 'express';
import { sendWelcomeEmail } from '../../utils/mailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { email, name } = req.body;

  try {
    // Saving user to database

    await sendWelcomeEmail(email, name);
    res.status(200).json({ message: 'Signup successful and email sent!' });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Signup successful but email failed.' });
  }
}
