import csv from 'csv-parser'
import fs from 'fs';
import { TrackingFromCsv , CheckpointFromCsv} from "../interfaces/TrackingFromCsv.interface";

export const getTrackings = async () => {

    const results: TrackingFromCsv[] = [];
    
    fs.createReadStream('../data/trackings.csv')
    .pipe(csv({ separator: ';' }))
    .on('data', (data) => results.push(data))
    .on('end', () => {
        return results;
    });

    return results;
}

export const getCheckpoints = async () => {

    const results: CheckpointFromCsv[] = [];

    fs.createReadStream('../data/checkpoints.csv')
    .pipe(csv({ separator: ';' }))
    .on('data', (data) => results.push(data))
    .on('end', () => {
        return results;
    });

    return results;
    
}

           