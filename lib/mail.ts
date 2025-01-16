import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export async function sendVerificationEmail(email: string, token: string) {
  // TODO: change the confirm link
  const confirmLink = `http://localhost:3000/new-verification?token=${token}`;

  try {
    // TODO: check this, probably change to another provider
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Confirm your email",
      html: `<p>Click <a href="${confirmLink}">here</a> to confirm your email. </p>`,
    });
    return;
  } catch (error) {
    throw error;
  }
}

export async function sendResetPasswordEmail(email: string, token: string) {
  // TODO: change the restet link
  const resetLink = `http://localhost:3000/new-password?token=${token}`;

  try {
    // TODO: check this, probably change to another provider
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Reset Your Password",
      html: `<p>Click <a href="${resetLink}">here</a> to reset your password. </p>`,
    });
    return;
  } catch (error) {
    throw error;
  }
}
