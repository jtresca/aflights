import React, { Component } from 'react'
import '../styles/PlannedItem.css';
import SVG from 'react-inlinesvg';
import flightpath from '../images/flightpath.svg'
import PropTypes from 'prop-types';

export class PlannedItem extends Component {
    render() {
        const {id, origin, readable_departure, readable_arrival, destination} = this.props.item;
        return (
            <div className="componentBody">
                <div className="topChildBody">
                    <div className="topChild">{id}</div>
                    
                </div>
                <div className="bottomChildBody">
                    <div className="bottomChild">{origin}<br/>{readable_departure}</div>
                    <div className="bottomChild"><SVG id="flightpath" src={flightpath} width="80%" /></div>
                    <div className="bottomChild">{destination}<br/>{readable_arrival}</div>
                </div>
            </div>
        )
    }
}

//PropTypes
PlannedItem.propTypes = {
    item: PropTypes.object.isRequired
}


export default PlannedItem
