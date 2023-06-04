import React , { useEffect , useState }from 'react';
import './App.css';
import {Trackings, TrackingsInitial, CheckpointsInitial} from './interfaces/InitialData.interface'
import { BrowserRouter} from "react-router-dom"
import RoutesMode from './components/routes';
import { v4 } from 'uuid';

function App() {

  /**
      * Store the JSON data from endpoints into variables.
      * @param {TrackingsInitial[]} trackings
      * @param {CheckpointsInitial[]} checkpoints
  */
  const [trackings, setTrackings] = useState<TrackingsInitial[]>()
  const [checkpoints, setCheckpoints] = useState<CheckpointsInitial[]>()

  /**
      * Fetch data from API Calls and set data.
      * @param {TrackingsInitial[]} trackings
      * @param {CheckpointsInitial[]} checkpoints
  */
  useEffect(() => {
      Promise.all([
        fetch('/trackings'),
        fetch('/checkpoints'),
      ])
        .then(([trackings, checkpoints]) => 
          Promise.all([trackings.json(), checkpoints.json()])
        )
        .then(([trackings, checkpoints]) => {
          setTrackings(trackings);
          setCheckpoints(checkpoints);
        })
        .catch(err =>
          console.log(err)
        );

  }, []);

  /**
      * SUMMARY: Merge trackings and checkpoints arrays into new one. 
      * Grouping the trackings based on their orderNo using a Map, 
      * performing some filtering and mapping operations on checkpoints and articles, 
      * and returning a new array of transformed objects in the desired format.
      * @param {TrackingsInitial[]} trackings
      * @param {CheckpointsInitial[]} checkpoints
  */
  const groupedTrackings = new Map();

  // eslint-disable-next-line array-callback-return
  trackings?.map(track => {
    const orderNo = track.orderNo;
    if (!groupedTrackings.has(orderNo)) {
        groupedTrackings.set(orderNo, []);
      }
      groupedTrackings.get(orderNo).push(track);
  })
  
  const newTrackings: Trackings[] = Array.from(groupedTrackings, ([orderNo, group]: [string, TrackingsInitial[]]) => {
    
  const getCheckpoints =  checkpoints!.filter(check => check.tracking_number === group[0].tracking_number);

    return {
      id: v4(),
      tracking_number: group[0].tracking_number,
      orderNo: orderNo,
      courier: group[0].courier,
      street: group[0].street,
      zip_code: group[0].zip_code,
      city: group[0].city,
      destination_country_iso3: group[0].destination_country_iso3,
      email: group[0].email,
      checkpoints: getCheckpoints
      .filter((checkpoint) =>
      checkpoint.tracking_number
      )
      .map((checkpoint) => ({
        id: v4(),
        tracking_number: checkpoint.tracking_number,
        location: checkpoint.location,
        timestamp: checkpoint.timestamp,
        status: checkpoint.status,
        status_text: checkpoint.status_text,
        status_details: checkpoint.status_details,
      })),
      articles: group
        .map((article) => ({
          articleNo: article.articleNo,
          articleImageUrl: article.articleImageUrl,
          product_name: article.product_name,
          quantity: article.quantity
        }))
    };
  });

  return (
    <div id="app">
      <div className='container'>
        <BrowserRouter>
            <RoutesMode data={newTrackings}/>
        </BrowserRouter>
      </div>
     </div>
  );
}

export default App;
