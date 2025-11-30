import express from 'express';
import {PORT} from './config/env.js'

// Importing Routes
import authRouter from './routes/auth.routes.js'
import userRouter from './routes/user.routes.js'
import subscriptionRouter from './routes/subscription.routes.js'

// DB function
import connectToDatabse from './database/mongodb.js';

//Error Middleware function
import errorMiddleware from './middlewares/error.middleware.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Defining routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/auth/subscriptions', subscriptionRouter);

app.use(errorMiddleware);

app.get('/', (req, res) => {
    res.send("Hello, crack that interview!");
})
app.listen(PORT, async ()=>{
    console.log(`Running on http://localhost:${PORT}`);

    await connectToDatabse();
})

export default app;