import { useEffect, useState } from 'react';
import { fetchSiteContent } from '../api/content.js';

export function useSiteContent() {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    fetchSiteContent()
      .then((data) => {
        if (isMounted) {
          setContent(data);
        }
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return { content, loading };
}
