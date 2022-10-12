import React from "react";
import './app.css';

function App() {
  const [flights, setFlights] = React.useState([]);
  const [spinner, setSpinner] = React.useState(false);    
    
    const onFetchFlights = () => {
      setSpinner(true);
      fetch('https://611c2084a18e850017dec9da.mockapi.io/swa/flights')
      .then(res => res.json())
      .then(data => {setFlights(data)
      setSpinner(false);
    });
    }
    
    // console.log(flights);
    // const val = flights.sort((a, b) => (a.flightNumber > b.flightNumber) ? 1 : -1)
    const asc = () =>{
      const val = [...flights].sort((a, b) => (a.flightNumber > b.flightNumber) ? 1 : -1);
      setFlights(val);
    } 

    const desc = () =>{
      const val = [...flights].sort((a, b) => (b.flightNumber > a.flightNumber) ? 1 : -1);
      setFlights(val);
    } 

    console.log(flights)
    return (
      <div className="app">
        <h1>Flight Search</h1>
        {/* Buttom group for fetching and sorting */}
        <div className="btnGroup">
          <div className="fetchBtn">
            <button onClick={onFetchFlights} disabled={spinner}>Find flights</button>
          </div>
          <div className="sortBtn">
            <button onClick={asc}>Sort Ascending</button>
            <button onClick={desc}>Sort Descending</button>
          </div>
        </div>
      
      {/* Main Table for data view */}
        <div id="table-container">
          <table>
          <tbody>
          <tr>
            <th>Flight Number</th>
            <th>Arrival City</th>
            <th>Depature City</th>
            <th>Arrival Time</th>
            <th>Depature Time</th>
            <th>Price</th>
          </tr>
          {spinner && (<p>Loading Flights....</p>)}
          {flights && flights.map(flight => {
            return (
              <tr>
                <td>{flight.flightNumber}</td>
                <td>{flight.departureCity}</td>
                <td>{flight.arrivalCity}</td>
                <td>{flight.arrivalTime}</td>
                <td>{flight.departureTime}</td>
                <td>{flight.price}</td>
              </tr>
              )
            })}
      
          </tbody>
          </table>
        </div>
        
      </div>
    );
}

export default App;