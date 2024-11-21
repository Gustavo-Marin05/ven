import express from "express";
import morgan  from "morgan";
import authRoutes from './routes/auth.routes.js';
import cookieParser from "cookie-parser";
import productRoutes from './routes/product.routes.js';
import categoryRoutes from './routes/category.routes.js'

const app =express();


app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use('/api',authRoutes);
app.use('/api',productRoutes);
app.use('/api',categoryRoutes);





export default app;