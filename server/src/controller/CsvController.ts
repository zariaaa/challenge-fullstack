import { Router } from "express";
import CsvDataService from "../service/csvData.service";
import { autoInjectable } from 'tsyringe';
import csv from 'csv-parser'
import fs from 'fs';
import { TrackingFromCsv , CheckpointFromCsv } from "../interfaces/TrackingFromCsv.interface";

@autoInjectable()
export default class CsvController{
    csvService: CsvDataService;
    router: Router;
    constructor(csvService: CsvDataService){
        this.csvService = csvService;
        this.router = Router();
    }

    getApiTrackings(){
        return this.csvService.getApiTrackings();
    }

    getApiCheckpoints(){
        return this.csvService.getApiCheckpoints();
    }

    routes(){

        this.router.get('/trackings', async (req, res) =>  {
            const results: TrackingFromCsv[] = [];
            try {
                fs.createReadStream('../data/trackings.csv')
                .pipe(csv({ separator: ';' }))
                .on('data', (data) => results.push(data))
                .on('end', () => {
                    res.json(results)
                });
            } catch (error) {
                console.log(error)
            }
        })

        this.router.get('/checkpoints', async (req, res) =>  {
            const results: CheckpointFromCsv[] = [];
            try {
                fs.createReadStream('../data/checkpoints.csv')
                .pipe(csv({ separator: ';' }))
                .on('data', (data) => results.push(data))
                .on('end', () => {
                    res.json(results)
                });
            } catch (error) {
                console.log(error)
            }
 
        })

        /* TO DO: The API data should be received from CsvDataService. */

        /*  this.router.get('/trackings', async (req, res) =>  {
                try {
                    const tracks = await this.getApiTrackings();
                    console.log("trackings", tracks)
                    res.json(tracks)
                } catch (error) {
                    console.log(error)
                }
            })
        */

        /* this.router.get('/test', async (req, res) =>  {
            try {
                const checkpoint = await this.getApiCheckpoints();
                console.log("checkpoints", checkpoint)
                res.json(checkpoint)
            } catch (error) {
                console.log(error)
            }
        }) */

        return this.router;
    }
}