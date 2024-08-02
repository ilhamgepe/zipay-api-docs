import path from "path";
import { promises as fs } from "fs";

export interface IPathDataSource {
  Criteria: string;
  Subdistrict: string;
  Village: string;
  City: string;
  Province: string;
  CategoryMCC: string;
}

export const dataPath: IPathDataSource = {
  Criteria: path.join(process.cwd(), "public", "data", "criteria.json"),
  Subdistrict: path.join(process.cwd(), "public", "data", "kecamatan.json"),
  Village: path.join(process.cwd(), "public", "data", "kecamatan.json"),
  City: path.join(process.cwd(), "public", "data", "kota.json"),
  Province: path.join(process.cwd(), "public", "data", "provinsi.json"),
  CategoryMCC: path.join(process.cwd(), "public", "data", "mcc.json"),
};

export const getLocalJsonData = async (
  source: keyof IPathDataSource,
  page: number,
  limit: number
) => {
  try {
    const filePath = path.resolve(dataPath[source]);
    const fileContents = await fs.readFile(filePath, "utf8");
    const data = JSON.parse(fileContents);

    const start = page * limit;
    const end = start + limit;
    return data.slice(start, end);
  } catch (error) {
    console.error("Error reading file:", error);
    throw error;
  }
};
