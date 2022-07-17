import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { GEO_API_URL, geoAPIKeys } from '../../api';
import './Search.css';


function Search({ onSearchChange }) {
    const [search, setSearch] = useState(null),
        handleOnChange = (searchData) => {
            setSearch(searchData);
            onSearchChange(searchData);
        },
        handleLoadOption = (inputValue) => {
            return fetch(`${GEO_API_URL}?minPopulation=1000000&namePrefix=${inputValue}`, geoAPIKeys)
                .then(response => response.json())
                .then(response => {
                    return {
                        options: response.data.map((city) => {
                            return {
                                "value": `${city.latitude} ${city.longitude}`,
                                "label": `${city.name}, ${city.countryCode}`
                            };
                        })
                    }
                })
                .catch(err => console.error(err));
        };
    return (
        <AsyncPaginate
            placeholder="Search for City"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={handleLoadOption} />
    )
}

export default Search