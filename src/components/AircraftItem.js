import React, { Component } from 'react';
import '../styles/AircraftItem.css';
import plane from '../images/plane.svg'
import SVG from 'react-inlinesvg';
import PropTypes from 'prop-types';

class AircraftItem extends Component {
  
    render() {
        let utilPercent = this.props.efficency ? this.props.efficency : 0;
        console.log('AIRCRAFT_ITEM PROPS: ', this.props.aircraft)
        return (
            <div>
                <div className="componentEdge">
                    <div className="planeAdjustment"><SVG src={plane} width="80%" /></div>
                <div className="componentText">{this.props.aircraft.ident} ({0 || utilPercent + "%" }) <br/>IN AIR SCHEDULED</div>
                </div>
            </div>
        );
      }
    
}

//PropTypes
AircraftItem.propTypes = {
    aircraft: PropTypes.object.isRequired
}



export default AircraftItem;