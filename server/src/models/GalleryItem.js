import mongoose from 'mongoose';

const galleryItemSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    image: { type: String, required: true },
    alt: { type: String, default: '' },
    order: { type: Number, default: 100 }
  },
  { timestamps: true }
);

export const GalleryItem = mongoose.model('GalleryItem', galleryItemSchema);
