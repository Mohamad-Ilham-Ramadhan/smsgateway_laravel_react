import React from 'react';

const SelectPerPage = ({ className, recordsPerPageOptions }) => {

    return (
		<select id="perPage" name="perPage" className="custom-select custom-select-sm form-control form-control-sm is-small d-inline-block">
			{recordsPerPageOptions.map( perPage => 
				<option value={perPage}>{perPage}</option>	
			)}
		</select>
    );
};


export default SelectPerPage;
