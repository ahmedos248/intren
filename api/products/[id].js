import { readFile } from 'fs/promises';
import { join } from 'path';

export default async function handler(req, res) {
    try {
        const { id } = req.params; // <- use params, not query
        const filePath = join(process.cwd(), 'db.json');
        const jsonData = await readFile(filePath, 'utf-8');
        const db = JSON.parse(jsonData);

        const product = db.products.find(p => p.id.toString() === id.toString());
        if (!product) return res.status(404).json({ message: 'Product not found' });

        const reviews = db.reviews.filter(r => r.productId.toString() === id.toString());
        res.status(200).json({ ...product, reviews });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch product' });
    }
}

