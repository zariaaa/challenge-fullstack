import CsvRepository from '../repository/CsvRepository';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
export default class CsvDataService {
    csvRepository: CsvRepository;

    constructor(csvRepository: CsvRepository) {
        this.csvRepository =  csvRepository;
    }

    getApiTrackings(){
        return this.csvRepository.getApiTrackings();
    }

    getApiCheckpoints(){
        return this.csvRepository.getApiCheckpoints();
    }

}