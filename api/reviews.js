import { readFile } from 'fs/promises';
import { join } from 'path';

let cachedReviews = null;

export default async function handler(req, res) {
    try {
        if (!cachedReviews) {
            const filePath = join(process.cwd(), 'db.json');
            const jsonData = await readFile(filePath, 'utf-8');
            const db = JSON.parse(jsonData);
            cachedReviews = db.reviews; // cache in memory
        }

        res.status(200).json(cachedReviews);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to load reviews' });
    }
}
