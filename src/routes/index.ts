import { Router } from 'express'
import * as infoController from '../controllers/infoCotroller'
import * as homeController from '../controllers/homeController'
import * as userController from '../controllers/userController'
const router = Router();

router.get('/', homeController.home)
router.get('/contato', infoController.contato )
router.get('/sobre', infoController.sobre )

router.get('/idade', userController.idade );
router.post('/idade', userController.idadeAction);
export default router;