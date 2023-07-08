import express from 'express';
import 'dotenv/config';
import sequelizeConfig from './config/sequelize.js';
import applicationRoutes from './routes/_index.js';

const app = express();
const port = process.env.API_PORT;

app.use(`/`, applicationRoutes);

sequelizeConfig.sync().then(() => {
  console.info(
    `Conexão com o banco de dados ${process.env.DB_NAME} em ${process.env.DB_HOST} na porta ${process.env.DB_PORT} realizada com sucesso!`,
  );
});

app.listen(port, () => {
  console.info(`Escutando na porta ${port}! \n`);
});
