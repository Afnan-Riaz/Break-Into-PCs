import fs from "fs";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const data = await fs.promises.readFile(
            "./src/utils/blogs.json",
            "utf-8"
        );
        const jsonData = JSON.parse(data);
        return NextResponse.json(jsonData);
    } catch (error) {
        console.error("Error reading JSON file:", error);
    }
}
