import React, {useState} from 'react';
import './App.css';
import moment from 'moment';

function GetWeek(start){
  const week = [];
  let i = 0;
  while(week.length < 7) {
    week.push(moment(start).add(i,'day'));
    i++;
  }
  return(week);
}

function App() {
  const [startDate, setDate ] = useState(moment().startOf('week'));

  let currentWeek = GetWeek( startDate );

  return (
    <div>
      <h1>This Week</h1>
      <button onClick={ ()=>setDate(moment(startDate).add('week', -1)) }>Previous Week</button>
      <button onClick={ ()=>setDate(moment(startDate).add('week', 1)) }>Next Week</button>
      <ul>
        {
        currentWeek.map((day, idx) => {
        return(
          <li key = { idx }>{ day.format('ddd MM/DD/YYYY') }</li>
        )})
      }
    </ul>
    </div>
  );
}

export default App;
