import express, {Request, Response} from 'express';
import path from 'path';
import mustache from 'mustache-express'
import mainRoutes  from './routes/index';
import CtRouts from './routes/CT';
import TrRouts from './routes/TR';
const server = express();

server.set('view engine', 'mustache');
server.set('views',path.join(__dirname, 'views'));
server.engine('mustache', mustache());


server.use(express.static(path.join(__dirname, '../public')));



server.use(mainRoutes);
server.use('/CT', CtRouts);
server.use('/TR', TrRouts);
server.use((req: Request, res: Response)=>{
  res.status(404).send(`Pagina não encontrada ERROR 404`);

})




server.listen(80);