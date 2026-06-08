/**
 * Centralised ambient/background video clips used across the homepage.
 *
 * Kept here (rather than inline in each section) so the source CDN isn't
 * scattered through the component tree and the clips are easy to swap.
 *
 * Note: these load client-side, so the final URLs are still present in the
 * shipped bundle — to fully mask the source, self-host the files under
 * `public/media/` or behind an elixpo.com path and point these keys there.
 */
const CDN = "https://d8j0ntlcm91z4.cloudfront.net";
const ns = "user_38xzZboKViGWJOttwIXH07lWA1P";
const clip = (id: string) => `${CDN}/${ns}/${id}.mp4`;

export const VIDEOS = {
  hero: clip("hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41"),
  art: clip("hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4"),
  blogs: clip("hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4"),
};
