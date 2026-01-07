export const getCatchErrorMessage = (
  error: unknown,
  defaultMessage?: string
) => {
  return typeof error === "string"
    ? error
    : error instanceof Error
    ? error.message
    : defaultMessage ?? "Something went wrong";
};

export const getOtpHtmlMessage = (title: string, otp: string) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>${title}</title>
    </head>
    <body style="margin:0; padding:0; font-family: 'Helvetica', Arial, sans-serif; background-color:#f4f4f7;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f7; padding: 40px 0;">
        <tr>
          <td align="center">
            <table width="400" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1); padding: 30px; text-align:center;">
              <tr>
                <td>
                  <h1 style="color:#333333;">${title}</h1>
                  <p style="color:#555555; font-size:16px;">Use the following OTP to complete your verification process.</p>
                  <h2 style="color:#111111; font-size:28px; margin:20px 0;"><strong>${otp}</strong></h2>
                  <p style="color:#777777; font-size:14px;">It will expire in <strong>10 minutes</strong>.</p>
                  <hr style="border:none; border-top:1px solid #eeeeee; margin:20px 0;">
                  <p style="color:#999999; font-size:12px;">If you did not request this OTP, please ignore this email.</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
};

export const getPasswordResetHtmlMessage = (
  title: string,
  resetLink: string
) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>${title}</title>
    </head>
    <body style="margin:0; padding:0; font-family: Helvetica, Arial, sans-serif; background-color:#f4f4f7;">
      <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
        <tr>
          <td align="center">
            <table width="420" cellpadding="0" cellspacing="0"
              style="background:#ffffff; border-radius:12px; box-shadow:0 6px 18px rgba(0,0,0,0.08); padding:32px; text-align:center;">
              
              <tr>
                <td>
                  <h1 style="margin-bottom:12px; color:#222;">${title}</h1>
                  <p style="color:#555; font-size:15px; margin-bottom:24px;">
                    Click the button below to set your password. This link will expire in <strong>60 minutes</strong>.
                  </p>

                  <!-- Button -->
                  <a href="${resetLink}" target="_blank"
                    style="
                      display:inline-block;
                      padding:16px 32px;
                      background:#9747ff;
                      color:#ffffff;
                      text-decoration:none;
                      border-radius:8px;
                      font-size:16px;
                      font-weight:600;
                    ">
                    Set Password
                  </a>

                  <p style="margin-top:24px; font-size:12px; color:#999;">
                    If you did not request this, you can safely ignore this email.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
};

export const getForgotPasswordHtmlMessage = (title: string, link: string) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>${title}</title>
    </head>
    <body style="margin:0; padding:0; font-family: Helvetica, Arial, sans-serif; background-color:#f4f4f7;">
      <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
        <tr>
          <td align="center">
            <table width="420" cellpadding="0" cellspacing="0"
              style="background:#ffffff; border-radius:12px; box-shadow:0 6px 18px rgba(0,0,0,0.08); padding:32px; text-align:center;">
              
              <tr>
                <td>
                  <h1 style="margin-bottom:12px; color:#222;">${title}</h1>
                  <p style="color:#555; font-size:15px; margin-bottom:24px;">
                    Click the button below to set your password. This link will expire in <strong>60 minutes</strong>.
                  </p>

                  <!-- Button -->
                  <a href="${link}" target="_blank"
                    style="
                      display:inline-block;
                      padding:16px 32px;
                      background:#9747ff;
                      color:#ffffff;
                      text-decoration:none;
                      border-radius:8px;
                      font-size:16px;
                      font-weight:600;
                    ">
                    Set New Password
                  </a>

                  <p style="margin-top:24px; font-size:12px; color:#999;">
                    If you did not request this, you can safely ignore this email.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
};
