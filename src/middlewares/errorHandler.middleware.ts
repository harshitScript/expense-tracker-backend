import express from 'express';

interface ResBody {
    message: string, stack?: string
}
const errorHandlerMiddleware: express.ErrorRequestHandler<{}, ResBody, {}, {}> = (error, _, res, __) => {
    let resBody: ResBody = { message: 'Unknown Error Occurred.' }
    if (process.env.STATE === 'DEV') resBody['stack'] = error.stack;
    return res.status(500).json(resBody)
}

export default errorHandlerMiddleware