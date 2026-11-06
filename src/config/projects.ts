import { siteConfig } from './site';

export type Project = {
  id: string;
  name: string;
  status: string;
  description: string;
  url: string | null;
};

export const projects: readonly Project[] = [
  {
    id: 'doc4org',
    name: 'Doc4Org',
    status: 'Research Project',
    description:
      'Exploring how to make information and documentation requirements from organizations easier to understand and navigate.',
    url: siteConfig.doc4orgUrl,
  },
];

export function getProjectUrl(value: string | null): string | null {
  if (!value) return null;

  try {
    const url = new URL(value);
    return url.protocol === 'https:' && !url.username && !url.password
      ? url.href
      : null;
  } catch {
    return null;
  }
}
