export default async function handler(req, res) {
    if (req.method !== "POST") {
        res.setHeader("Allow", "POST");
        return res.status(405).json({ message: "Method not allowed" });
    }

    const apiKey = process.env.BREVO_API_KEY || process.env.SENDINBLUE_API_KEY;
    if (!apiKey) {
        return res.status(500).json({ message: "Email API key is not configured" });
    }

    const { email, name, message } = req.body || {};
    if (!email || !name || !message) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Api-Key": apiKey,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            sender: {
                name,
                email
            },
            to: [{
                email: "coderdannn@gmail.com",
                name: "Coder Dan"
            }],
            subject: "Inquiry from Coderdan.dev",
            textContent: message
        })
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
        return res.status(response.status).json(data);
    }

    return res.status(200).json(data);
}
