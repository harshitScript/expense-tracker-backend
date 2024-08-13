import express from "express";
import bodyParser from 'body-parser';
import userRouter from "./routes/user.routes";
import notFoundMiddleware from "./middlewares/notFound.middleware";
import errorHandlerMiddleware from "./middlewares/errorHandler.middleware";
import connect from "./db/mongodb/connect";


const app = express();
const PORT = process.env.PORT || 4000

app.use(bodyParser.json());
app.use('/user', userRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware); //? Crash response sent from here.


connect().then(() => {
    console.log('Database connection successful. 🛢️')
    app.listen(PORT, () => {
        console.log(`Server is listening to the port ${PORT}. 🚀`)
    })
})
