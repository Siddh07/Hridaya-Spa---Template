import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, service, date, time, message } = body;

    // Validation
    if (!name || !phone || !service || !date || !time) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 },
      );
    }

    // Create transporter
    // NOTE: For production, use real SMTP credentials via environment variables
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const adminEmail = "siddhant1793@gmail.com";

    // Email to admin
    await transporter.sendMail({
      from: `"Hridaya Spa Website" <${process.env.EMAIL_USER}>`,
      to: adminEmail,
      subject: `🌿 New Appointment Request — ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"></head>
        <body style="font-family: Georgia, serif; background: #F5F0E8; margin: 0; padding: 20px;">
          <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 4px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #2E3A1A 0%, #4A5C2B 100%); padding: 30px; text-align: center;">
              <h1 style="color: #D4AF37; font-family: Georgia, serif; font-size: 24px; margin: 0; letter-spacing: 2px;">HRIDAYA</h1>
              <p style="color: rgba(245,240,232,0.7); font-family: Arial, sans-serif; font-size: 12px; margin: 4px 0 0; letter-spacing: 3px; text-transform: uppercase;">Wellness & Spa Center</p>
            </div>
            
            <!-- Content -->
            <div style="padding: 30px;">
              <h2 style="color: #2E3A1A; font-family: Georgia, serif; font-size: 20px; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 2px solid #B8941F;">
                New Appointment Request
              </h2>
              
              <table style="width: 100%; border-collapse: collapse;">
                ${[
                  ["👤 Client Name", name],
                  ["📞 Phone", phone],
                  ["✉️ Email", email || "Not provided"],
                  ["💆 Service Requested", service],
                  ["📅 Preferred Date", date],
                  ["🕐 Preferred Time", time],
                ]
                  .map(
                    ([label, value]) => `
                  <tr>
                    <td style="padding: 10px 0; color: #6B6B5A; font-family: Arial, sans-serif; font-size: 13px; font-weight: bold; width: 160px; vertical-align: top;">${label}</td>
                    <td style="padding: 10px 0; color: #1A1A1A; font-family: Arial, sans-serif; font-size: 14px;">${value}</td>
                  </tr>
                  <tr><td colspan="2" style="border-bottom: 1px solid #EDE5D5;"></td></tr>
                `,
                  )
                  .join("")}
                ${
                  message
                    ? `
                  <tr>
                    <td style="padding: 10px 0; color: #6B6B5A; font-family: Arial, sans-serif; font-size: 13px; font-weight: bold; vertical-align: top;">📝 Special Notes</td>
                    <td style="padding: 10px 0; color: #1A1A1A; font-family: Arial, sans-serif; font-size: 14px; line-height: 1.6;">${message}</td>
                  </tr>
                `
                    : ""
                }
              </table>
              
              <div style="background: #F5F0E8; border-left: 3px solid #B8941F; padding: 15px; margin-top: 25px; border-radius: 2px;">
                <p style="font-family: Arial, sans-serif; font-size: 13px; color: #4A5C2B; margin: 0;">
                  <strong>Action Required:</strong> Please contact the client at <strong>${phone}</strong> to confirm their appointment.
                </p>
              </div>
            </div>
            
            <!-- Footer -->
            <div style="background: #F5F0E8; padding: 20px; text-align: center; border-top: 1px solid #EDE5D5;">
              <p style="font-family: Arial, sans-serif; font-size: 12px; color: #6B6B5A; margin: 0;">
                Hridaya Wellness & Spa Center | Greenland Chowk, Tokha Road, Kathmandu & Opening Soon at Opposite building to Buddha Air, Pulchowk Rd | +977 9805011700
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    // Confirmation email to client (if email provided)
    if (email) {
      await transporter.sendMail({
        from: `"Hridaya Wellness & Spa" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: `Your Appointment Request — Hridaya Wellness & Spa`,
        html: `
          <!DOCTYPE html>
          <html>
          <body style="font-family: Georgia, serif; background: #F5F0E8; margin: 0; padding: 20px;">
            <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 4px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
              <div style="background: linear-gradient(135deg, #2E3A1A 0%, #4A5C2B 100%); padding: 30px; text-align: center;">
                <h1 style="color: #D4AF37; font-family: Georgia, serif; font-size: 24px; margin: 0;">HRIDAYA</h1>
                <p style="color: rgba(245,240,232,0.7); font-size: 12px; margin: 4px 0 0; letter-spacing: 3px; font-family: Arial, sans-serif; text-transform: uppercase;">Wellness & Spa Center</p>
              </div>
              <div style="padding: 35px;">
                <h2 style="color: #2E3A1A; font-family: Georgia, serif; font-size: 22px; margin-bottom: 10px;">Thank You, ${name}! 🌸</h2>
                <p style="font-family: Arial, sans-serif; font-size: 14px; color: #6B6B5A; line-height: 1.7; margin-bottom: 25px;">
                  We've received your appointment request for <strong style="color: #4A5C2B;">${service}</strong> on <strong style="color: #4A5C2B;">${date}</strong> at <strong style="color: #4A5C2B;">${time}</strong>. Our team will contact you at <strong>${phone}</strong> to confirm your booking.
                </p>
                <div style="background: linear-gradient(135deg, #4A5C2B, #6B7F45); border-radius: 4px; padding: 20px; text-align: center; margin-bottom: 25px;">
                  <p style="color: rgba(245,240,232,0.8); font-family: Arial, sans-serif; font-size: 13px; margin: 0 0 6px;">We look forward to welcoming you</p>
                  <p style="color: #D4AF37; font-family: Georgia, serif; font-size: 18px; margin: 0; font-style: italic;">"Where healing begins"</p>
                </div>
                <p style="font-family: Arial, sans-serif; font-size: 13px; color: #6B6B5A; line-height: 1.7;">
                  📍 Greenland Chowk, Tokha Road, Kathmandu<br>
                  📞 +977 9805011700<br>
                  🕐 Open Daily: 9:00 AM – 8:00 PM
                </p>
              </div>
            </div>
          </body>
          </html>
        `,
      });
    }

    return NextResponse.json({
      success: true,
      message: "Appointment request sent successfully!",
    });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      {
        error:
          "Failed to send email. Please call us directly at +977 9805011700.",
      },
      { status: 500 },
    );
  }
}
