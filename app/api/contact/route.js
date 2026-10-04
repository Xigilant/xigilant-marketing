import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
  try {
    const { name, email, company, reason, message } = await req.json()

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'Xigilant <hello@xigilant.com>',
      to: ['hello@xigilant.com'],
      replyTo: email,
      subject: `[${reason}] from ${name}${company ? ` · ${company}` : ''}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1C2B1E;">New contact form submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #8B8878; font-size: 13px;">Name</td><td style="padding: 8px 0; font-size: 13px;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #8B8878; font-size: 13px;">Email</td><td style="padding: 8px 0; font-size: 13px;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #8B8878; font-size: 13px;">Company</td><td style="padding: 8px 0; font-size: 13px;">${company || '—'}</td></tr>
            <tr><td style="padding: 8px 0; color: #8B8878; font-size: 13px;">Reason</td><td style="padding: 8px 0; font-size: 13px;">${reason}</td></tr>
          </table>
          ${message ? `<h3 style="color: #1C2B1E; margin-top: 24px;">Message</h3><p style="color: #4A4A3A; font-size: 14px; line-height: 1.6;">${message}</p>` : ''}
          <hr style="border: none; border-top: 1px solid #E8E5DC; margin: 24px 0;" />
          <p style="color: #8B8878; font-size: 12px;">Sent from xigilant.com contact form</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
