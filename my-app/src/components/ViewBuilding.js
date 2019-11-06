import React from 'react';

export default( {data, selectedBuilding}) => {
	const buildingSelected = selectedBuilding.map(id =>{
		const { name, address, code, coordinates} = data[id - 1]
		
		return (
			<div>Code: {code}, Name: {name}, Address: {address}, Coordinates: 
		{coordinates ? coordinates.latitude : null},
		{coordinates ? coordinates.longitude : null}
			</div>
			//<div>{address}</div>
		)
	})
	/*.filter(curr => {
		return curr.id = selectedBuilding
	})
	.map(curr => {
		const {name, code, address} = curr //remember to add the coordinates later
		return (
			<div>
				<li key={curr}>{name}</li>
				<li key={curr}>{code}</li>
				<li key={curr}>{address}</li>
			</div>
		)
	})*/	

	/*
	const buildingSelected = selectedBuilding
	.map(curr => {
		const {name, code, address} = data[curr] //remember to add the coordinates later
		return (
			<div>
				<li key={curr}>{name}</li>
				<li key={curr}>{code}</li>
				<li key={curr}>{address}</li>
			</div>
		)
	})	*/

	
		return (
			<div>
				<p>
					{' '}
					<i>Click on a name to view more information</i>
					{buildingSelected}
				</p>
			</div>
		);
	
}
