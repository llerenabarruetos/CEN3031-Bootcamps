import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import addedLocation from './components/addedLocation';
import RemoveBuilding from './components/RemoveBuilding';
import AddBuilding from './components/AddBuilding';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: [], //id of the building selected, to be put into data[id] to get its info
      
      addedLocations: [{name: 'Gator Corner Dining', code: 'GCDC', address: 'Gale Lem'}],

      newestLoc: ''
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value
    });
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    const list = [id]
    this.setState({
      selectedBuilding: list
    }) 
  }

  deleteLocation = (index, e) => { //index ? or CODE of location?
    const locList = Object.assign([], this.state.addedLocations); //creates a duplicate of the arrays (by putting it into a new array [])
    locList.splice(index, 1); //remove one element depending on the index (or CODE) passed in
    this.setState({
      addedLocations: locList
    })
  }

  addNewLocation = () => {
    const newList = this.state.addedLocations.concat([{name: this.state.newestLoc}]) //not an index!
    this.setState({
      addedLocations: newList
    })
  }

  updateNewOne(value) {
    this.setState({
      newestLoc: value
    })
    console.log(this.state.newestLoc)
  }

  render() {
    
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search filterText={this.state.filterText}
            filterUpdate={this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                    
                  </tr>
                  <ul>
                  {this.state.addedLocations.map((loc, index)=>{
                    return(
                    <addedLocation 
                      code={loc.code}
                      deleteEvent = {this.deleteLocation.bind(this, index)}
                      > {loc.code} {loc.name} {
                        <button onClick={this.deleteLocation}>Delete</button>
                      }
                       </addedLocation>)  //you could add {loc.code} before {loc.name}
                  }) }
                  </ul>

                  <BuildingList
                    data={this.props.data}
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                  />
                </table>
                
              </div>
            </div>
            
            <div className="column2">
              <ViewBuilding 
                data={this.props.data}
                selectedBuilding={this.state.selectedBuilding} //***** 
              />

              <AddBuilding updateNewOne={this.updateNewOne.bind(this)}></AddBuilding>
              <button onClick={this.addNewLocation}>Add</button>
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
