import { fastify } from "fastify";
import "dotenv/config"
import { connectDB } from "./src/config/connect.js";

const PORT = process.env.PORT || 3000;

const start = async () => {
    await connectDB(process.env.MONGO_URI);
    const app = fastify();

    try {
        await app.listen({ port: PORT, host: '0.0.0.0' });
        console.log(`Server listening on ${PORT}`);
    } catch (err) {
        console.error("Error starting server:", err);
        process.exit(1); 
    }
};

start();
