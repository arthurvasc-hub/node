import { Router, Request, Response } from 'express'

const router = Router();

router.get('/', (req: Request, res: Response) =>{
  let age: number = 15;
  let showOld: boolean = false;
  if(age >= 18) {
      showOld = true;
  }

  res.render('pages/home', {
    name: 'Arthur',
    lastName: 'Vasconcelos',
    showOld,
    products: [
      {title: 'Produto A', price: 10},
      {title: 'Produto B', price: 15},
      {title: 'Produto C', price: 20},
    ]
  });
})

router.get('/contato', (req: Request, res: Response)=>{
  res.render('pages/contato')
})

router.get('/sobre', (req: Request, res: Response)=>{
  res.render('pages/sobre')
})

router.get('/idade', (req: Request, res: Response) =>{
  let mostrarIdade: boolean = false;
  let idade: number = 0;
    if(req.query.ano){
      let anoNascimento: number = parseInt(req.query.ano as string);
      let anoAtual: number = new Date().getFullYear();
      idade = anoAtual - anoNascimento;
      mostrarIdade = true;
    }
  
  
  res.render('pages/idade', {
    idade,
    mostrarIdade
  })
  
})

export default router;