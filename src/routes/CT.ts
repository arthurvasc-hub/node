import { Router, Request, Response } from 'express'

const router = Router();

router.get('/', (req: Request, res: Response) =>{
  res.send('Escolha entre Smoke ou FLASH')
})

router.get('/flash', (req: Request, res: Response)=>{
  res.send('FLASHS DISPONIVEIS NO MAPA ATUAL')
})

router.get('/smoke', (req: Request, res: Response)=>{
  res.send('SMOKES DISPONIVEIS NO MAPA ATUAL')
})

export default router;