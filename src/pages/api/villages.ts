// import { getLocalJsonData } from "@/lib/localDatahelper";
// import type { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method !== "GET") {
//     return res.status(405).json({ message: "Method not allowed" });
//   }

//   const { page = "0", limit = "10" } = req.query;

//   const pageNum = parseInt(page as string, 10);
//   const limitNum = parseInt(limit as string, 10);

//   if (isNaN(pageNum) || isNaN(limitNum) || pageNum < 0 || limitNum <= 0) {
//     return res.status(400).json({ error: "Invalid query parameters" });
//   }

//   try {
//     const data = await getLocalJsonData("Village", pageNum, limitNum);
//     return res.status(200).json(data);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return res.status(500).json({ error: "Failed to read data" });
//   }
// }
