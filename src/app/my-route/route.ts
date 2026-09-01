import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const GET = async () => {
  await getPayload({
    config: configPromise,
  })

  return Response.json({
    name: 'هزاره کالا API',
    version: '1.0.0',
    status: 'running',
  })
}
