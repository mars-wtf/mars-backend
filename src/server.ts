import express, { Express } from "express";
import cors from "cors";

import routerNft from "./routes/api/nft";

import connectDB from "./lib/dbConnect";
import dotenv from "dotenv";

dotenv.config();
const app: Express = express();
const port: Number = process.env.PORT ? Number(process.env.PORT) : 5050;

connectDB();
app.set("trust proxy", true);

app.use(cors("*"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json("running...");
})

// app.use("/static", express.static(__dirname + "/public"));

app.use("/api/nft", routerNft);



app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});




