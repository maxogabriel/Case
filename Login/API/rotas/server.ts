import express from 'express';
import registerUser from './cadastro-usuarios';
import usuariosRoutes from './usuarios';

const app = express();

app.use(express.json()); 


app.use('./rotas/cadastro-usuarios', registerUser);
app.use('./rotas/usuarios', usuariosRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
