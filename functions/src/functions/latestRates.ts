import { onRequest } from "firebase-functions/v2/https";
import { fetchLatestRates } from "../services/latestRates.service";

export const latestRates = onRequest(async (req, res) => {
  try {
    const base =
      typeof req.query.base === "string"
        ? req.query.base
        : "USD";

    const data = await fetchLatestRates(base);

    res.status(200).json(data);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Internal server error",
    });
  }
});

