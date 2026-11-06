type SiteConfig = {
  name: string;
  url: `https://${string}`;
  contactEmail: string | null;
  doc4orgUrl: `https://${string}` | null;
};

export const siteConfig = {
  name: 'EISDEC',
  url: 'https://eisdec.com',
  contactEmail: null,
  doc4orgUrl: null,
} as const satisfies SiteConfig;
