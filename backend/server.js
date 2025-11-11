import express from "express";
import dotenv from "dotenv";
import './db/db.js'
import authRoutes from './routes/auth.routes.js'
import taskRoutes from './routes/task.routes.js'
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
dotenv.config();

const PORT = process.env.PORT || 6000


const app = express();
const __dirname = path.resolve();
app.use(
	cors({
		origin: "http://localhost:5173", // frontend
		credentials: true,
	})
);
app.use(express.json({ limit: "10mb" }));  
app.use(cookieParser());

app.use('/api/auth',authRoutes)

app.use('/api/task',taskRoutes)


// Production static files setup
if (process.env.NODE_ENV === "production") {
	console.log("📁 Setting up production static files...");
	
	try {
		app.use(express.static(path.join(__dirname, "/frontend/dist")));
		console.log("✅ Static files middleware added");
		
		app.get(/.*/, (req, res) => {
			res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
		});
		console.log("✅ Catch-all route added with regex");
		
	} catch (err) {
		console.error("❌ Error setting up production files:", err.message);
		console.error("Stack:", err.stack);
		
		
		try {
			console.log("🔄 Trying alternative catch-all approach...");
			app.get("/:path(*)", (req, res) => {
				res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
			});
			console.log("✅ Catch-all route added with parameter approach");
		} catch (err2) {
			console.error("❌ Alternative approach also failed:", err2.message);
			process.exit(1);
		}
	}
}

console.log("🚀 Starting server...");

app.listen(PORT,()=> {
  console.log(`server is running on port ${PORT}`)
})






