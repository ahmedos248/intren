// pages/api/users.js  (for Next.js / Vercel)
import { readFile, writeFile } from "fs/promises";
import { join } from "path";

export default async function handler(req, res) {
    const filePath = join(process.cwd(), "db.json");
    const jsonData = await readFile(filePath, "utf-8");
    const db = JSON.parse(jsonData);

    if (req.method === "POST") {
        const { email, name, image } = req.body;

        if (db.users.find(u => u.email === email)) {
            return res.status(400).json({ error: "User already exists" });
        }

        const newUser = { id: Date.now().toString(), email, name, image, isAdmin: false };
        db.users.push(newUser);
        await writeFile(filePath, JSON.stringify(db, null, 2));

        return res.status(201).json(newUser);
    }

    // GET users
    if (req.method === "GET") {
        return res.status(200).json(db.users);
    }

    return res.status(405).json({ error: "Method not allowed" });
}
