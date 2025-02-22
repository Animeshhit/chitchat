import crypto from "crypto";

const CLERK_WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET!;

export function verifyClerkWebhook(body: string, signature: string): boolean {
  const expected = crypto
    .createHmac("sha256", CLERK_WEBHOOK_SECRET)
    .update(body)
    .digest("base64");
  return expected === signature;
}
