import { readFile } from 'fs/promises';
import { join } from 'path';

let cachedCollections = null;

export default async function handler(req, res) {
    try {
        if (!cachedCollections) {
            const filePath = join(process.cwd(), 'db.json');
            const jsonData = await readFile(filePath, 'utf-8');
            const db = JSON.parse(jsonData);
            cachedCollections = db.collections; // cache in memory
        }

        res.status(200).json(cachedCollections);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to load collections' });
    }
}
