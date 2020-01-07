import React, { Component } from 'react';
import '../styles/RotationItem.css';
import PropTypes from 'prop-types';

class RotationItem extends Component {
  
    render() {
        const { id, departuretime, arrivaltime, readable_departure, readable_arrival, origin, destination } = this.props.item
        return (
            <div className='rotationComponent'>
                  <div className='componentChild'><span className='tag'>Origin</span><br></br>{this.props.item.origin}<br/>{this.props.item.readable_departure}</div>
                  <div className='componentChild'>
                  <span className='tag'>Flight</span><br/>
                    {this.props.item.id}<br/>
                    <button type="button" onClick={this.props.addFlight.bind(this, id, departuretime, arrivaltime, readable_departure, readable_arrival, origin, destination)}>+ Flight Plan</button>
                  </div>
                  <div className='componentChild'><span className='tag'>Destination</span><br></br>{this.props.item.destination}<br/>{this.props.item.readable_arrival}</div>
                  
            </div>
        );
      }
    
}

//PropTypes 
RotationItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default RotationItem;