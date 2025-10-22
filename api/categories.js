import { readFile } from 'fs/promises';
import { join } from 'path';

let cachedCategories = null;

export default async function handler(req, res) {
    try {
        if (!cachedCategories) {
            const filePath = join(process.cwd(), 'db.json');
            const jsonData = await readFile(filePath, 'utf-8');
            const db = JSON.parse(jsonData);
            cachedCategories = db.categories; // cache in memory
        }

        res.status(200).json(cachedCategories);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to load categories' });
    }
}
