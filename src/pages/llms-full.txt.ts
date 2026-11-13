import type { APIRoute } from 'astro';
import { full } from '@/lib/llms';
import { getPosts } from '@/lib/sanity';
export const GET: APIRoute = async () => new Response(full(await getPosts()), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
