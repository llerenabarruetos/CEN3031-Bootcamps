import React from 'react';

class Search extends React.Component {
	filterUpdate = (e) => {
		//Here you will need to update the value of the filter with the value from the textbox
		const val = this.myValue.value
		this.props.filterUpdate(val)
		//this.props.onChange(e.target.value)
	} 
	render() {
		//You will need to save the value from the textbox and update it as it changes
		//You will need the onChange value for the input tag to capture the textbox value
		
		return (
			<form>
				<input
					type="text" 
					//ref = "myValue" 
					ref = { (value) => {this.myValue = value}}
					placeholder="Type to Filter" 
					 
					onChange =  {
						this.filterUpdate.bind(this)
					} //when change, call the filterUpdate function ^
				/>
			</form>
		);
	}
}
export default Search;
