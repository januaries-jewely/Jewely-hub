export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  console.log("M-Pesa Callback:", JSON.stringify(req.body));

  return res.status(200).json({
    ResultCode: 0,
    ResultDesc: "Accepted"
  });
}
