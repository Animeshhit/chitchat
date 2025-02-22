import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db"; // Database connection
import { headers } from "next/headers";
import { verifyClerkWebhook } from "@/lib/clerk"; // Clerk signature verification
import User from "@/models/UserModel";

export const config = {
  runtime: "edge", // Ensures it runs as an Edge function
};

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text(); // Read raw request body
    const headerList = headers(); // Get request headers
    const signature = (await headerList).get("clerk-signature");

    if (!signature || !verifyClerkWebhook(rawBody, signature)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const data = JSON.parse(rawBody);

    dbConnect();

    if (data.type === "user.created") {
      const { email_addresses, first_name, last_name, image_url } = data.data;

      const user = new User({
        imageUrl: image_url,
        name: `${first_name} ${last_name}`,
        email: email_addresses[0]?.email_address,
      });
      await user.save();
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error handling webhook:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
