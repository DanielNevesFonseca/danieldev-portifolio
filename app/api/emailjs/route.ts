import { NextResponse } from "next/server";
// Make sure to install the EmailJS server-side SDK
// npm install @emailjs/nodejs
import * as emailjs from "@emailjs/nodejs";

export async function POST(req: Request) {
  try {
    // Extract the form data from the request body
    const body = await req.json();
    const { userName, userEmail, userMessage } = body;

    // Validate that all required fields are present
    if (!userName || !userEmail || !userMessage) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Prepare the template parameters for EmailJS
    const templateParams = {
      name: userName,
      email: userEmail,
      message: userMessage,
    };

    // Access environment variables securely on the server
    const serviceId = process.env.EMAILJS_SERVICE_ID!;
    const templateId = process.env.EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY!;
    // The private key is required for the server-side SDK for secure requests
    const privateKey = process.env.EMAILJS_PRIVATE_KEY!;
    console.log("serviceId: ", serviceId);
    console.log("templateId: ", templateId);
    console.log("publicKey: ", publicKey);
    console.log("privateKey: ", privateKey);

    // Send the email using the EmailJS Node.js SDK
    const response = await emailjs.send(serviceId, templateId, templateParams, {
      publicKey: publicKey,
      privateKey: privateKey,
    });

    // Check if the email was sent successfully
    if (response.status === 200) {
      return NextResponse.json(
        { message: "Email sent successfully!" },
        { status: 200 }
      );
    } else {
      // If EmailJS returns a non-200 status, forward the error
      return NextResponse.json(
        { error: `EmailJS error: ${response.text}` },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error("Failed to send email:", error);
    // Return a generic server error response
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
