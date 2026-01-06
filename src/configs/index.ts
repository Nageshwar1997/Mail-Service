import nodemailer from "nodemailer";
import { MAIL_PORT, MAIL_HOST, MAIL_PASS, MAIL_USER } from "../envs";

export const transporterConfig = nodemailer.createTransport({
  host: MAIL_HOST,
  port: Number(MAIL_PORT),
  secure: false,
  auth: { user: MAIL_USER, pass: MAIL_PASS },
});

export default transporterConfig;
