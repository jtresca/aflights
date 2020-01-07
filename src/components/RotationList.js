import React, { Component } from 'react';
import '../styles/RotationList.css';
import RotationItem from './RotationItem';
import PropTypes from 'prop-types';

class RotationList extends Component {
   

    render() {
        return (
            <div className='rotationContainer'>
              { this.props.loading ? <div className="loader">Loading...</div> 
              : !this.props.loading && this.props && this.props.flights && this.props.flights.map((item,i) => 
                <RotationItem item={item} key={i} addFlight={this.props.addFlight}/>
              )} 
            </div>
        );
      }

}

//PropTypes 
RotationList.propTypes = {
  flights: PropTypes.array,
  loading: PropTypes.bool.isRequired

}


export default RotationList;