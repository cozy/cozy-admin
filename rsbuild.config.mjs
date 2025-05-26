import { defineConfig } from '@rsbuild/core'
import { getRsbuildConfig } from 'rsbuild-config-cozy-app'

const config = getRsbuildConfig({
  title: 'Twake Admin'
})

export default defineConfig(config)
