import { siteContent } from '../../../shared/siteContent.js';

const apiBase = import.meta.env.VITE_API_URL || '';

export async function fetchSiteContent() {
  try {
    const response = await fetch(`${apiBase}/api/site`);

    if (!response.ok) {
      throw new Error('Site content request failed');
    }

    return await response.json();
  } catch (error) {
    console.warn('Using local content fallback.', error.message);
    return siteContent;
  }
}
