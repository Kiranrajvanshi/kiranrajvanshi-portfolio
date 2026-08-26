export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    const body = typeof req.body === "string" ? new URLSearchParams(req.body) : new URLSearchParams(req.body || {});
    const name = body.get("name") || "";
    const email = body.get("email") || "";
    const subject = body.get("subject") || "Portfolio Contact";
    const message = body.get("message") || "";

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const forward = new URLSearchParams({
      name,
      email,
      subject,
      message,
      _replyto: email,
      _subject: `Portfolio Contact: ${subject}`,
      _captcha: "false",
      _template: "table"
    });

    const response = await fetch("https://formsubmit.co/ajax/kiranrajvanshi721@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json"
      },
      body: forward.toString()
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      return res.status(502).json({ success: false, message: "Email service failed", detail: data });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return res.status(500).json({ success: false, message: "Unable to send message" });
  }
}
