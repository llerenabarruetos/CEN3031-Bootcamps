import React from 'react';

export default ({data, filterText, selectedUpdate}) =>
	{//<grab the properties data and filterText passed in to access them with a single variable name
		const buildingList = data //chained methods, we first filter based on the name (if == filterText) and then we map
		.filter(directory => {
			return directory.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
		})
		.map(directory => {
			return (
				<tr key={directory.id}
				onClick={selectedUpdate.bind(this, directory.id)}
				>
				<td>{directory.code} </td>
				<td> {directory.name} </td>
				</tr>						
			);
		});

		return <div>{buildingList}</div>; //output the list of buildings
	}

