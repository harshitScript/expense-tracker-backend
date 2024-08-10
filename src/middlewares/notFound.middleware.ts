import express from 'express';

const notFoundMiddleware: express.RequestHandler = (_, res, __) => {
    throw new Error('error handler')
    return res.status(404).json({ message: 'Not Found' })
}
export default notFoundMiddleware;

