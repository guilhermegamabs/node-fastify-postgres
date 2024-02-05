import { fastify } from 'fastify';
import { DatabaseMemory } from './database-memory.js';

const server = fastify();
const PORT = 3333;

const database = new DatabaseMemory();

server.get("/videos", (req, reply) => {
    const videos = database.list();

    return videos;
});

server.post('/videos', (req, reply) => {
    const { title, description, duration } = req.body;

    database.create({
        title,
        description,
        duration,
    });

    return  reply.status(201).send();
});

server.put('/videos/:id', (req, reply) => {
    const videoID = req.params.id;
    const { title, description, duration } = req.body;
    
    const video = database.update(videoID, {
        title,
        description,
        duration
    });

    return reply.status(204).send();
});

server.delete('/videos/:id', (req, reply) => {
    const videoID = req.params.id;
    
    database.delete(videoID);

    return reply.status(200).send();
});

server.listen({
    port: PORT,
});