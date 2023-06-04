import { getCheckpoints, getTrackings } from './convertCsvToJson';

export default class CsvRepository{

    /* TO DO: Receive the data for trackings and checkpoints from convertCsvToJson */
    getApiTrackings = async () => {
      const trackings  =  await getTrackings();
      console.log('receivied trackings from CsvToJson', trackings)
      return trackings;
    }

    getApiCheckpoints  = async () => {
      const checkpoints  =  await getCheckpoints();
      console.log('receivied checkpoints from CsvToJson', checkpoints)
      return checkpoints;
    }
}