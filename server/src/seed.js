import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { siteContent } from '../../shared/siteContent.js';
import { GalleryItem } from './models/GalleryItem.js';
import { News } from './models/News.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '../..');

dotenv.config({ path: path.join(rootDir, '.env') });
dotenv.config();

if (!process.env.MONGO_URI) {
  console.error('MONGO_URI is required to seed MongoDB.');
  process.exit(1);
}

await mongoose.connect(process.env.MONGO_URI);

await Promise.all([News.deleteMany({}), GalleryItem.deleteMany({})]);

await News.insertMany(siteContent.news);
await GalleryItem.insertMany(
  siteContent.gallery.map((item, index) => ({
    ...item,
    order: index + 1
  }))
);

await mongoose.disconnect();

console.log('Database seeded successfully.');
