import 'reflect-metadata';
import express, { Express } from 'express';
import { container } from 'tsyringe';
import CsvController from './controller/CsvController';

const app: Express = express();

const csvController =  container.resolve(CsvController);
const port = 5000;

app.use('/', csvController.routes())
app.use(function(req, res){

    res.sendStatus(404);
});
app.listen(port, () => console.log(`⚡️[server]: Server is running at PORT ${port}`))
