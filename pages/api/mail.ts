// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import emailjs from "@emailjs/browser";
type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const body = JSON.parse(req.body);
  const message = `
  Name: ${body.name}\r\n
  Email: ${body.email}\r\n
  Message: ${body.message}\r\n
  `;

  const data = {
    subject: "New Web Form Message",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };
  console.log(data);
  // res.status(200).json({ status: "Ok" });
  emailjs
    .sendForm(
      "service_idsrvvs",
      "template_ta4ej0k",
      data.html,
      "BaFVKBFCQ2PQQyiKN"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
}
