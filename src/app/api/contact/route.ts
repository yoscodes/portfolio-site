// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, message } = body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.GMAILUSER,
      pass: process.env.GMAILPASSWORD,
    },
  });
  // console.log(process.env.GMAILUSER);
  // console.log(process.env.GMAILPASSWORD);
  // console.log("GMAILPASSWORD:", process.env.GMAILPASSWORD ? "あり" : "なし");

  const mailOptions = {
    from: email,
    to: "suzukiyosei.1118@gmail.com",
    subject: `【お問い合わせ】${name}様より`,
    text: message + " | Sent from: " + email,
    html: `
      <p>【名前】</p><p>${name}</p>
      <p>【メッセージ】</p><p>${message}</p>
      <p>【メールアドレス】</p><p>${email}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "メール送信成功" }, { status: 200 });
  } catch (error: any) {
    console.error("メール送信失敗:", error);
    return NextResponse.json(
      { message: "送信失敗", error: error.message },
      { status: 500 }
    );
  }
}
