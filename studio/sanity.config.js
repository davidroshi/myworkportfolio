import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
    name: 'default',
    title: 'David Roshi Portfolio',

    projectId: 'YOUR_PROJECT_ID',
    dataset: 'production',

    plugins: [structureTool(), visionTool()],

    schema: {
        types: schemaTypes,
    },
})
