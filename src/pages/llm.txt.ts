import fs from 'node:fs';
import path from 'node:path';
import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const llmsPath = path.resolve(process.cwd(), 'public/llms.txt');
  const content = fs.readFileSync(llmsPath, 'utf-8');

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
