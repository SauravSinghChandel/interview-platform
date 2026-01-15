import express from "express";
import path from "path";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";
import { inngest, functions } from "./lib/inngest.js";
import { serve } from "inngest/express";
import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import { protectRoute } from "./middleware/protectRoute.js";

import chatRoutes from "./routes/chatRoutes.js";
import sessionRoutes from "./routes/sessionRoutes.js";

const __dirname = path.resolve();

const app = express();

//middleware
app.use(express.json());
// credential:true meaning?? => server allows cookies on request
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));

app.use(clerkMiddleware()); // Attaches auth field to request object: req.auth()

app.use("/api/inngest", serve({ client: inngest, functions }));

app.use("/api/chat", chatRoutes);
app.use("/api/session", sessionRoutes);

app.get("/health", (req, res) => {
    res.status(200).json({ msg: "success from api" });
})

// When you pass an array of middleware to Express, it automatically flattens executes them sequentially, one by one

// make our app prod ready

if (ENV.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("/{*any}", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });
}

app.listen(ENV.PORT, () => {
    console.log("Server is running on port:", ENV.PORT)
    connectDB();
})
