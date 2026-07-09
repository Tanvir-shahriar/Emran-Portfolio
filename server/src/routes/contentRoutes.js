import { Router } from 'express';
import { siteContent } from '../../../shared/siteContent.js';
import { hasMongoConnection } from '../config/db.js';
import { GalleryItem } from '../models/GalleryItem.js';
import { News } from '../models/News.js';

export const contentRouter = Router();

async function getNewsArticles() {
  if (!hasMongoConnection()) {
    return siteContent.news;
  }

  const articles = await News.find().sort({ order: 1, createdAt: -1 }).lean();
  return articles.length ? articles : siteContent.news;
}

async function getGalleryItems() {
  if (!hasMongoConnection()) {
    return siteContent.gallery;
  }

  const items = await GalleryItem.find().sort({ order: 1, createdAt: -1 }).lean();
  return items.length ? items : siteContent.gallery;
}

contentRouter.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    database: hasMongoConnection() ? 'mongodb' : 'memory'
  });
});

contentRouter.get('/site', async (req, res, next) => {
  try {
    const [news, gallery] = await Promise.all([getNewsArticles(), getGalleryItems()]);
    res.json({
      ...siteContent,
      news,
      gallery
    });
  } catch (error) {
    next(error);
  }
});

contentRouter.get('/news', async (req, res, next) => {
  try {
    res.json(await getNewsArticles());
  } catch (error) {
    next(error);
  }
});

contentRouter.get('/gallery', async (req, res, next) => {
  try {
    res.json(await getGalleryItems());
  } catch (error) {
    next(error);
  }
});

contentRouter.get('/pages/about', (req, res) => {
  res.json(siteContent.about);
});
