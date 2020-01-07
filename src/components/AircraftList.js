import React, { Component } from 'react';
import '../styles/AircraftList.css';
import AircraftItem from './AircraftItem';
import axios from 'axios';
import PropTypes from 'prop-types';

const aircraftsURL = 'https://infinite-dawn-93085.herokuapp.com/aircrafts';

class AircraftList extends Component {
    state = {
      loading: null,
      aircrafts: []
    }

  
    componentDidMount() {
      this.setState({loading:true}, ()=> {
      //REST api call to aircrafts
      axios.get(aircraftsURL)
      .then((res) => { 
        this.setState({loading: false ,aircrafts: res.data })
      })
      .catch((error) => {
        console.log(error);
      });

    });
    
    }

    render() {
        console.log('loading:', this.state.loading);
        return (
            <div className='aircraftContainer'>
              { this.state.loading ? <div className="loader">Loading...</div> 
              : !this.state.loading && this.state && this.state.aircrafts.data && this.state.aircrafts.data.map((aircraft,i) => <div key={i}><AircraftItem aircraft={aircraft} efficency={this.props.efficency}/></div>)}
            </div>
        );
      }

}

//PropTypes
AircraftList.propTypes = {
  efficency: PropTypes.number.isRequired
}


export default AircraftList;