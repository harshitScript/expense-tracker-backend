import express from 'express';

const notFoundMiddleware: express.RequestHandler = (_, res, __) => {
    return res.status(404).json({ message: 'Not Found' })
}
export default notFoundMiddleware;

