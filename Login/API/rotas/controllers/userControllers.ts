import { db } from '../../db';
import { Request, Response, Router } from 'express';


const router = Router();


router.get('./usuarios', (req, res) => {
  res.send('Aqui estão todos os usuários');
});

export default router;



export const getUsers = (req: Request, res: Response) => {
  const q = "SELECT * FROM usuarios";

  db.query(q, (err, data ) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  })
};

/* Eu ia colocar um if(userterms) collect (user.info) mas não consegui incrementar */
export const registerUser = (req: Request, res: Response) => {
  
  res.send('Usuário registrado');
};
