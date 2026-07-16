import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

const artifactDir = 'C:\\Users\\Tanvir Shahriar\\.gemini\\antigravity\\brain\\670be913-29ec-417f-9060-b7e898d81305';

async function run() {
  console.log('Starting screenshot capture...');
  console.log('Launching browser...');
  const browser = await chromium.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });
  console.log('Browser launched. Creating context...');
  const context = await browser.newContext();
  
  // Capture reference desktop
  console.log('Navigating to https://www.muhammadyunus.org/ (Desktop)...');
  const page = await context.newPage();
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto('https://www.muhammadyunus.org/', { waitUntil: 'domcontentloaded', timeout: 30000 });
  // Wait a bit for animations/content to settle
  console.log('Page loaded. Waiting for 3s to settle...');
  await page.waitForTimeout(3000);
  const refDesktopPath = path.join(artifactDir, 'ref_desktop.png');
  await page.screenshot({ path: refDesktopPath, fullPage: false });
  console.log(`Saved reference desktop screenshot to ${refDesktopPath}`);

  // Capture reference mobile
  console.log('Navigating to https://www.muhammadyunus.org/ (Mobile)...');
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('https://www.muhammadyunus.org/', { waitUntil: 'domcontentloaded', timeout: 30000 });
  console.log('Page loaded. Waiting for 3s to settle...');
  await page.waitForTimeout(3000);
  const refMobilePath = path.join(artifactDir, 'ref_mobile.png');
  await page.screenshot({ path: refMobilePath, fullPage: false });
  console.log(`Saved reference mobile screenshot to ${refMobilePath}`);

  await browser.close();
  console.log('Finished capturing screenshots successfully.');
}

run().catch(async (err) => {
  console.error('Error during screenshot capture:', err);
  process.exit(1);
});
