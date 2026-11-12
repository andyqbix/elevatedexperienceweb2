// Genuine videos: clips supplied by Claire and Andy, plus a shortlist from the official YouTube channel
// (https://www.youtube.com/@ElevatedeXperiencevip). Titles are the published YouTube titles.
// YouTube thumbnails are stored locally in src/assets/video-thumbs so no request goes to YouTube until a visitor presses play.
// To add a YouTube video: add it here, then run `npm run thumbs`.
import type { ImageMetadata } from 'astro';

const thumbs = import.meta.glob<{ default: ImageMetadata }>('../assets/video-thumbs/*.jpg', { eager: true });
const thumb = (id: string) => thumbs[`../assets/video-thumbs/${id}.jpg`]?.default;

export interface Video {
  key: string;
  kind: 'file' | 'youtube';
  title: string;
  type: string; // content-type label on the card
  duration?: string;
  src?: string; // local file
  poster?: string; // local file poster (in /public)
  id?: string; // YouTube id
  thumb?: ImageMetadata;
}

const yt = (key: string, id: string, title: string, type: string, duration: string): Video => ({ key, kind: 'youtube', id, title, type, duration, thumb: thumb(id) });

export const videos: Record<string, Video> = {
  // Supplied clips
  cemClip: { key: 'cemClip', kind: 'file', title: 'CEM Africa 2026: the Power Duo on stage', type: 'KEYNOTE CLIP', src: '/video/keynote-cem-africa.mp4', poster: '/video/keynote-hero-poster.jpg' },
  claireIntro: { key: 'claireIntro', kind: 'file', title: 'Claire introduces Andy on stage', type: 'STAGE CLIP', src: '/video/claire-introduces-andy.mp4', poster: '/video/claire-introduces-andy-poster.jpg' },
  // YouTube shortlist
  meetDuo: yt('meetDuo', '9lFwKouH_YY', 'Meet the power duo behind Elevated eXperience', 'VIDEO', '1:37'),
  cemKeynote: yt('cemKeynote', '4Bf8OTIaXek', 'CEM Africa 2026 - Why do great Customer eXperience initiatives still fail?', 'KEYNOTE', '1:01:38'),
  capeTown: yt('capeTown', 'Gx0wVMYHSxc', 'CEM Conference Elevated Experience Workshop Cape Town', 'WORKSHOP', '18:06'),
  live: yt('live', '4wbPblvQ46U', 'Welcome to Elevated eXperience LIVE with Claire Boscq and Andy Jarvis', 'CONVERSATION', '48:23'),
  jerseyMasterclass: yt('jerseyMasterclass', 'QPAixhCRt-g', 'JERSEY Executive eXperience Masterclass | Connecting Digital Employee & Customer Interactions', 'MASTERCLASS', '15:48'),
  vsaiPodcast: yt('vsaiPodcast', '2dkZx_LiIMo', 'Andy Jarvis VSAI Podcast hosted by Yaniv', 'PODCAST', '18:53'),
  financialCrime: yt('financialCrime', 'axFQgbntIwU', 'Hiding in Complexity - Where financial crime lives - 8th Comsure Financial Crime Conference 2026', 'KEYNOTE', '30:51'),
};

export const youtubeIds = Object.values(videos).filter((v) => v.kind === 'youtube').map((v) => v.id!);

export const keynoteVideos = [videos.cemClip, videos.claireIntro, videos.cemKeynote, videos.meetDuo];
export const resourceVideos = [videos.meetDuo, videos.cemKeynote, videos.capeTown, videos.vsaiPodcast, videos.financialCrime, videos.live];
