import { readFile } from 'fs/promises';
import { join } from 'path';

let cachedProducts = null;

export default async function handler(req, res) {
    try {
        if (!cachedProducts) {
            const filePath = join(process.cwd(), 'db.json');
            const jsonData = await readFile(filePath, 'utf-8');
            const db = JSON.parse(jsonData);
            cachedProducts = db.products;
        }
        res.status(200).json(cachedProducts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to load products' });
    }
}
