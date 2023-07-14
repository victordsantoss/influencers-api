import express from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser';
import cors from 'cors';
import sequelizeConfig from './src/config/sequelize.js';
import applicationRoutes from './src/routes/_index.js';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
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
