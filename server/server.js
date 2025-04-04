import Fastify from 'fastify'
import cors from '@fastify/cors'

const fastify = Fastify({
    logger: true,
})

await fastify.register(cors, {
    origin: '*',
})

// Proxy route for NOS news feed
fastify.get('*', async function (request, reply) {

    const feed = request?.query?.feed

    if (!feed) {
        reply.code(400).send({ error: 'Feed is required' })
    }

    try {
        // Fetch the NOS news feed
        const response = await fetch(`https://feeds.nos.nl/${feed}`)
        const data = await response.text()

        // Set appropriate content type for RSS/XML
        reply.header('Content-Type', 'application/xml')
        return data
    } catch (error) {
        fastify.log.error(error)
        reply.code(500).send({ error: 'Failed to fetch NOS news feed' })
    }
})

// Run the server!
fastify.listen({ port: 3000 }, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    // Server is now listening on ${address}
})