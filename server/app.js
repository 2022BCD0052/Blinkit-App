import { fastify } from "fastify";
import "dotenv/config"
import { connectDB } from "./src/config/connect.js";
import {admin, buildAdminRouter} from "./src/config/setup.js"
// import {PORT} from "./src/config/config.js";

const PORT = process.env.PORT || 3000;

const start = async () => {
    await connectDB(process.env.MONGO_URI);
    const app = fastify();
    await buildAdminRouter(app)

    try {
        await app.listen({ port: PORT});
        console.log(`Server listening on ${PORT}${admin.options.rootPath}`);
    } catch (err) {
        console.error("Error starting server:", err);
        process.exit(1); 
    }
};

start();
