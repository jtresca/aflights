import React, { Component } from 'react';
import '../styles/PlannedList.css';
import PlannedItem from './PlannedItem';
import PropTypes from 'prop-types';



class PlannedList extends Component {

    render() {
       

        return (
            <div className='plannedContainer'>
               { this.props && this.props.planned && this.props.planned.map((item,i) => 
                <PlannedItem item={item} key={i} />
              )} 
              
            </div>
        );
      }

}

//PropTypes
PlannedList.propTypes = {
  planned: PropTypes.array.isRequired
}


export default PlannedList;