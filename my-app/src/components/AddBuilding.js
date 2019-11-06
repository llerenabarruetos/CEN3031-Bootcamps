import React from 'react';
import addedLocation from './addedLocation';

class AddBuilding extends React.Component {
    updateNewOne = (e) => {
		//Here you will need to update the value of the filter with the value from the textbox
		const val = this.myValue.value
		this.props.updateNewOne(val)
		//this.props.onChange(e.target.value)
	} 

    render() {
    //var val = ''
        return (
            

            <form>
                <input 
                    type="text"
                    ref = { (value) => {this.myValue = value}}
                    placeholder="Type a new location"

                    onChange = {
                        this.updateNewOne.bind(this)
                    }
                />
            </form>
        )
                }
}

export default AddBuilding;