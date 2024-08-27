import express from "express";
import bodyParser from 'body-parser';
import cookieParser from "cookie-parser";
import connect from "./db/mongodb/connect";
import userRouter from "./routes/user.routes";
import notFoundMiddleware from "./middlewares/notFound.middleware";
import errorHandlerMiddleware from "./middlewares/errorHandler.middleware";
import authRouter from "./routes/auth.routes";
import categoryRouter from "./routes/category.routes";
import expenseRouter from "./routes/expense.routes";


const app = express();
const PORT = process.env.PORT || 4000

app.use(cookieParser());
app.use(bodyParser.json());
app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/category', categoryRouter);
app.use('/expense', expenseRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware); //? Crash response sent from here.


connect().then(() => {
    console.log('Database connection successful. 🛢️')
    app.listen(PORT, () => {
        console.log(`Server is listening to the port ${PORT}. 🚀`)
    })
})
