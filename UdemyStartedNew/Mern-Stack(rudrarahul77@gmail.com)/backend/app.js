import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config({ path: "./config/config.env" });

const app = express();
const router = express.Router();
const getProducts = async (req, res) => {
	res.status(200).json({ message: "All-Products" });
};
router.route("/products").get(getProducts);
const productRouter = router;

const connectDatabase = () => {
	mongoose
		.connect("mongodb://localhost:27017/")

		.then(console.log("Database Connected"))

		.catch((err) => {
			console.log(err);
		});
};

app.use("/api/v1", productRouter);
connectDatabase();
app.listen(process.env.PORT, () => {
	console.log(`Server Listening at Port ${process.env.PORT}`);
});
