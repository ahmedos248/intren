import { readFile } from 'fs/promises';
import { join } from 'path';

let cachedBlog = null;

export default async function handler(req, res) {
    try {
        if (!cachedBlog) {
            const filePath = join(process.cwd(), 'db.json');
            const jsonData = await readFile(filePath, 'utf-8');
            const db = JSON.parse(jsonData);
            cachedBlog = db.blog;
        }

        res.status(200).json(cachedBlog);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to load blog posts' });
    }
}
