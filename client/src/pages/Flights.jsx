import React, { useEffect, useState } from 'react';
import api from '../utils/api';              // ← Axios instance

export default function Flights() {
  const [flights, setFlights] = useState([]);

  // fetch flights once the component mounts
  useEffect(() => {
    api.get('/flights')                     // calls http://localhost:5000/api/flights
       .then(res => setFlights(res.data))
       .catch(console.error);
  }, []);

  return (
    <div style={{ padding: '40px' }}>
      <h2>Available Flights</h2>
      {flights.length === 0 ? (
        <p>No flights yet – add some in the DB!</p>
      ) : (
        <ul>
          {flights.map(f => (
            <li key={f._id}>
              {f.airline} &nbsp; {f.from} ➔ {f.to} &nbsp; 
              {new Date(f.departure).toLocaleString()} &nbsp; ${f.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
