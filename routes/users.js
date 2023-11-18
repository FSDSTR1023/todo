import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
    res.json([
        {
            name: 'John',
            lastName: 'Doe',
            email: 'johndoe@doecompany.com',
        },
    ]);
});

export default router;