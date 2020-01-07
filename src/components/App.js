import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/Loader.css';
import logo from '../images/logo.svg'
import SVG from 'react-inlinesvg';
import axios from 'axios';
import AircraftList from './AircraftList';
import PlannedList from './PlannedList';
import RotationList from './RotationList';
import TimelineList from './TimelineList';

const flightsURL = 'https://infinite-dawn-93085.herokuapp.com/flights';
let filteredArray = [];
let totalFlightTime = 0;
const totalPossibleFlightTime = [];
let maxFlightTime;
let nextOrigin;
let lastDestination;
let firstFlightScheduled = false;
let lastArrivalTime;
let nextDepartureTime;




class App extends Component {

  state = { 
    rotationTotal: null,
    flights: [],
    selectedAircraft: null,
    loading: true,
    planned: [],
    inAirPercentageTotal: 0,
  }

 

  componentDidMount() {
    this.setState({loading:true}, ()=> {
      //REST api call to flights
      axios.get(flightsURL)
      .then((res) => { 
        console.log('RESPONSE DATA: ', res.data.data);
        this.setState({ loading:false, flights: res.data, rotationTotal: res.data.data.length });
      })
      .catch((error)=> {
        console.log(error);
      })

    });
    
  }

  //We need to know when the last flight of the day lands so we can use this to calculate 100% in-air efficiency. 
  calcMaxFlightTime = () => {
    this.state.flights.data.map((x)=> {
      totalPossibleFlightTime.push(x.arrivaltime);
      maxFlightTime = Math.max(...totalPossibleFlightTime);
    })
  }

  plannedFlightPercentage = () => {
    this.setState({inAirPercentageTotal: Math.round(totalFlightTime * 100 / maxFlightTime)});
  }

  //Let's track how much in-air time our planned flights use.
  addTotalFlightTime = () => {
    totalFlightTime = 0;
    filteredArray.map((x)=> {
      let flightTime = x.arrivaltime - x.departuretime;
      totalFlightTime += flightTime;
      this.calcMaxFlightTime();
      this.plannedFlightPercentage();
    })
  }

  //Did we add this flight to the plan already?
  uniqueFlights = (filteredArray,flightItem) => {
    nextOrigin = flightItem.origin;
    nextDepartureTime = flightItem.departuretime;
    
    if (filteredArray.findIndex(x => x.id === flightItem.id) < 0) {
      //Let's check if we've scheduled our first flight.
      if (!firstFlightScheduled) {
        firstFlightScheduled = true;
        filteredArray.push(flightItem);
        lastDestination = filteredArray[filteredArray.length - 1].destination;
        lastArrivalTime = filteredArray[filteredArray.length - 1].arrivaltime + 1200;
        this.addTotalFlightTime();
      }
      //Let's make sure the last destination matches the next proposed origin.
      else if (firstFlightScheduled && lastDestination === nextOrigin) {
        if (lastArrivalTime < nextDepartureTime) {
          filteredArray.push(flightItem);
          lastDestination = filteredArray[filteredArray.length - 1].destination;
          lastArrivalTime = filteredArray[filteredArray.length - 1].arrivaltime + 1200;
          this.addTotalFlightTime();
        }
        else {
          alert("The aircraft's scheduled departure time occurs before it would arrive to the airport.");
        }
      }
      else {
        alert("Last destination does not match the proposed origin. Aircraft is not available from that location!")
      }
      
    }
    else {
      alert("You've already added this flight to your plan!");
    }
    this.setState({planned: filteredArray})
  }

  //Let's prepare the flight object here.
  addFlight = (id, departuretime, arrivaltime, readable_departure, readable_arrival, origin, destination) => {
    const flightInput = {
      id,
      departuretime,
      arrivaltime,
      readable_departure,
      readable_arrival,
      origin,
      destination
    }
    
    this.uniqueFlights(filteredArray,flightInput);
  
  }
  
  render() {
    return (
        <div className='appContainer'>
          <header><div className='logo-holder'><SVG src={logo} width="65%" /></div></header>
          <span><h1>Tomorrow's Flight Plan </h1></span>
          <main>
            <section className="aircraft-holder">
              <div className="heading">Aircrafts</div>
              <AircraftList efficency={this.state.inAirPercentageTotal}/>
            </section>
            <section className="rotation-holder">
    <div className="heading center-heading">{this.state.rotationTotal} Available Flight Rotations</div>
              <RotationList flights={this.state.flights.data} loading={this.state.loading} rotationParentCB = {this.rotationCallBack} addFlight={this.addFlight}/>
            </section>
            <section className="planned-holder">
              <div className="heading">Scheduled</div>
              <PlannedList planned={this.state.planned}/>
            </section>
              
          </main>
          <footer>
            <section className="util-time-holder">
            <div className="heading">Utilization Timeline</div>
              <TimelineList/>
              <div className="copyright">2019 - Joe Tresca - Sr. Developer - calactyte@gmail.com - 1 (631)-807-7358</div>
            </section>
          </footer>
        </div>
    );
  }

}

export default App;