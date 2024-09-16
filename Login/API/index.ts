import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());
app.use("/", (req, res) => {
  res.send("Bem-Vindo a API!"); /* mensagem para confirmar que estava pegando normalmente */
})

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
