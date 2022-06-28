import { Router } from "express";
import controller from "../Controller/Controller.js";
const router = new Router();


router.get('/users', controller.getAll);
router.get('/users/:id', controller.getOne);
router.post('/users', controller.createMany);
router.put('/users', controller.update);
router.delete('users/:id', controller.delete);

export default router;