import { Request, Response, Router } from "express";

const router = Router();

router.get('/', (req: Request, res: Response) => res.send('habemus server'))

export default router;