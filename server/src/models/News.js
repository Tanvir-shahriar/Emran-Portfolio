import mongoose from 'mongoose';

const newsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    category: { type: String, default: 'Miscellaneous' },
    date: { type: String, required: true },
    source: { type: String, default: 'YC' },
    excerpt: { type: String, required: true },
    image: { type: String, default: '' },
    language: { type: String, default: 'en' },
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 100 }
  },
  { timestamps: true }
);

export const News = mongoose.model('News', newsSchema);
