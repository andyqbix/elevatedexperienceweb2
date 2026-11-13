import type { APIRoute } from 'astro';
import { summary } from '@/lib/llms';
import { getPosts } from '@/lib/sanity';
export const GET: APIRoute = async () => new Response(summary(await getPosts()), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
