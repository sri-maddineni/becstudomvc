import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js"
import QpaperRoutes from "./routes/QpaperRoutes.js"
import AdminRoutes from "./routes/AdminRoutes.js"
import cors from "cors";
import PagesRoutes from "./routes/PagesRoutes.js"


import UserRoutes from "./routes/UserRoutes.js"



//configure environment
dotenv.config();

//database config
connectDB();

//rest object
const app = express();

//middlewares
app.use(cors());

// app.use(cors({
//   origin:"",
//   methods:["POST",'GET'],
//   credentials:true
// }))

app.use(morgan("dev"));
app.use(express.json());


//routes all
app.use("/api/v1/auth", authRoutes);

//routes all
app.use("/api/v1/subjects", QpaperRoutes);


//to get userdata
app.use("/api/v1/users", UserRoutes)


//admin routes for all admin relateed tasks
app.use("/api/v1/admin",AdminRoutes)


//admin routes for all user pages relateed tasks
app.use("/api/v1/pages",PagesRoutes)


//rest api
app.get("/", (req, res) => {
  res.send("<h1>world</h1>");
});



// app.use(express.static(path.join(__dirname,"./client/build")))
//for cyclic.sh hosting all these needed
// app.get("*",(req,res)=>{
//   res.sendFile(path.join(__dirname,"./client/build/index.html"))
// })

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server running on ${PORT} `.bgCyan.white);
});



