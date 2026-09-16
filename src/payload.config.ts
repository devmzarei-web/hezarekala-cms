// @ts-nocheck
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Products } from './collections/Products'
import { ProductCategories } from './collections/ProductCategories'
import { Pages } from './collections/Pages'
import { Settings } from './collections/Settings'
import { Messages } from './collections/Messages'
import { Posts } from './collections/Posts'
import { Projects } from './collections/Projects'
import { Gallery } from './collections/Gallery'
import { Team } from './collections/Team'
import { HomeSections } from './collections/HomeSections'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

function requiredEnv(name: string): string {
  const value = process.env[name]

  if (!value || value.trim() === '') {
    throw new Error(`Missing required environment variable: ${name}`)
  }

  return value.trim()
}

function cleanUrl(value: string): string {
  return value.replace(/\/+$/, '')
}

const payloadSecret = requiredEnv('PAYLOAD_SECRET')
const databaseUrl = requiredEnv('DATABASE_URL')

const frontendUrl = cleanUrl(
  process.env.FRONTEND_URL || process.env.NEXT_PUBLIC_SITE_URL || 'https://hezarehkala.ir',
)

const cmsUrl = cleanUrl(
  process.env.CMS_URL || process.env.NEXT_PUBLIC_CMS_URL || 'https://cms.hezarehkala.ir',
)

export default buildConfig({
  serverURL: cmsUrl,

  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },

  collections: [
    Users,
    Media,
    Products,
    ProductCategories,
    Pages,
    Settings,
    Messages,
    Posts,
    Projects,
    Gallery,
    Team,
    HomeSections,
  ],

  editor: lexicalEditor(),

  secret: payloadSecret,

  cors: [
    'http://localhost:3000',
    'http://localhost:3001',
    frontendUrl,
    cmsUrl,
    'https://hezarehkala.ir',
    'https://www.hezarehkala.ir',
    'https://cms.hezarehkala.ir',
    'https://hezarehkala.com',
    'https://www.hezarehkala.com',
    'https://cms.hezarehkala.com',
  ].filter(Boolean),

  csrf: [
    'http://localhost:3000',
    'http://localhost:3001',
    frontendUrl,
    cmsUrl,
    'https://hezarehkala.ir',
    'https://www.hezarehkala.ir',
    'https://cms.hezarehkala.ir',
    'https://hezarehkala.com',
    'https://www.hezarehkala.com',
    'https://cms.hezarehkala.com',
  ].filter(Boolean),

  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },

  db: mongooseAdapter({
    url: databaseUrl,
  }),

  sharp,

  plugins: [],
})
