import { defineAppSetup } from '@slidev/types'
import packageJson from '../package.json'

export default defineAppSetup(({ app }) => {
  // This tells Vue: "Make SLIDE_VERSION available in every single template!"
  app.config.globalProperties.SLIDE_VERSION = packageJson.version
})