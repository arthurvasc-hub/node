import {Request, Response} from 'express'
import { Product } from  '../models/Products'

export const home = (req: Request, res: Response) =>{
  let age: number = 15;
  let showOld: boolean = false;
  if(age >= 18) {
      showOld = true;
  }

  let list = Product.getAll();
  let expensiveList = Product.getPriceAfter(15)
  res.render('pages/home', {
    name: 'Arthur',
    lastName: 'Vasconcelos',
    showOld,
    products: list,
    expensive: expensiveList
  });
}