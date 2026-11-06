type SiteConfig = {
  name: string;
  url: `https://${string}`;
  contactEmail: string | null;
  contactEmailEnabled: boolean;
  doc4orgUrl: `https://${string}` | null;
};

export const siteConfig = {
  name: 'EISDEC',
  url: 'https://eisdec.com',
  contactEmail: 'contact@eisdec.com',
  contactEmailEnabled: false,
  doc4orgUrl: null,
} as const satisfies SiteConfig;
