import React from 'react';

export default ({code, name, address, addedLocations}) => {
    //this.state. v
    addedLocations.map((loc, index)=>{
        return(<newLocation 
          code={loc.code}
          deleteEvent = {this.deleteLocation.bind(this), index}
          >{loc.name}</newLocation>)
      })
}