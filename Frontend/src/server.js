import express from "express";
import { config } from "dotenv";
import ejs from "ejs";
import ruta from "./routes";
import cookieParser from 'cookie-parser';

config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.set('view engine' , 'ejs');
app.set('views', __dirname+'/views');
app.set("port" , process.env.PORT || 11000);
app.use(express.static(__dirname + '/public'));
app.use("/", ruta);

export default app;
