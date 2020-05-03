import { Request, Response } from 'express';

export default {
  ['POST /api/count/post'](req: Request, res: Response) {
    const count = req.body.count;
    res.json({ count: count + 1 });
  },
};
