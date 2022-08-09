import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from "next";

const verifyRecaptcha = async ( token: string ) => {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  var verificationUrl =
    "https://www.google.com/recaptcha/api/siteverify?secret=" +
    secretKey +
    "&response=" +
    token;

  return await axios.post(verificationUrl);
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const token: string = req.body.token;

    // Recaptcha response
    const response = await verifyRecaptcha(token);
    console.log(response);

    if (response.data.success && response.data.score >= 0.5) {
      return res
        .status(200)
        .json({ status: "Success", message: "Thanks for your message!" });
    } else {
      return res.json({
        status: "Failed",
        message: "Something went wrong, please try again!!!",
      });
    }
  } catch (error) {
    console.log("ERRRRROr", error);
    res.json({
      status: "Failed",
      message: "Something went wrong, please try again!!!",
    });
  }
}

export default handler;