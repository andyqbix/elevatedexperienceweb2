import type { APIRoute } from 'astro';
import { full } from '@/lib/llms';
export const GET: APIRoute = () => new Response(full(), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
