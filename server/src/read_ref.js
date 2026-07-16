import fs from 'fs';
const path = 'C:\\Users\\Tanvir Shahriar\\.gemini\\antigravity\\brain\\670be913-29ec-417f-9060-b7e898d81305\\.system_generated\\steps\\30\\content.md';
try {
  const content = fs.readFileSync(path, 'utf8');
  console.log('--- Content Length:', content.length);
  console.log(content.substring(0, 2000));
} catch (err) {
  console.error(err);
}
