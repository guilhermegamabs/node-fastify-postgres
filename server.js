import { fastify } from 'fastify';
import { DatabaseMemory } from './database-memory';

const server = fastify();
const PORT = 3333;

server.get("/", () => {
    return 'Hello World!';
});

server.post('/videos', () => {
    return 'Hello';
});

server.put('/videos/:id', () => {
    return 'Hello Node.js';
});

server.delete('/videos/:id', () => {
    return 'Hello Node.js';
})

server.listen({
    port: PORT,
});