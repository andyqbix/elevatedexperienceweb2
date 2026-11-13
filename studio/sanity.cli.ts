import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: { projectId: 's2mpqcie', dataset: 'production' },
  // Hosted at https://elevatedexperience.sanity.studio
  studioHost: 'elevatedexperience',
  deployment: { appId: 'a3e9l8o47t07nwaeo8ficeap', autoUpdates: true },
});
