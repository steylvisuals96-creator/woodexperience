import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'apliysvo',
    dataset: 'production',
  },
  studioHost: 'woodexperience-studio',
})
