import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db"; // Database connection
import User from "@/models/UserModel";
import { Webhook } from "svix";
import { headers } from "next/headers";

export const config = {
  runtime: "edge", // Ensures it runs as an Edge function
};

export async function POST(req: NextRequest) {
  const WH_SECRET = process.env.CLERK_WEBHOOK_SECRET || "";

  if (!WH_SECRET) {
    console.error("Webhook secret is not configured.");
    return NextResponse.json({ error: "Configuration error" }, { status: 500 });
  }

  const payload = await req.text(); // Get raw body
  const headerList = headers();
  const svixHeaders = {
    "svix-id": (await headerList).get("svix-id") || "",
    "svix-timestamp": (await headerList).get("svix-timestamp") || "",
    "svix-signature": (await headerList).get("svix-signature") || "",
  };

  const wh = new Webhook(WH_SECRET);

  interface SvixData {
    id: string;
    email_addresses: { email_address: string }[];
    first_name: string;
    last_name: string;
    image_url: string;
  }

  let evt: { type: string; data: SvixData };
  try {
    evt = wh.verify(payload, svixHeaders) as { type: string; data: SvixData };
  } catch (err) {
    console.error("Webhook verification failed:", err);
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const eventType = evt.type;

  if (eventType === "user.created") {
    const { id, email_addresses, first_name, last_name, image_url } = evt.data;

    try {
      await dbConnect();

      const user = new User({
        clerkId: id,
        imageUrl: image_url,
        name: `${first_name} ${last_name}`,
        email: email_addresses[0]?.email_address,
      });

      await user.save();
    } catch (dbError) {
      console.error("Database error:", dbError);
      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }
  }

  return NextResponse.json({ success: true });
}
