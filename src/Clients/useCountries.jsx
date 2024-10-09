import React from 'react';
import {useState, useEffect} from "react";
import axios from "axios";

function useCountries() {


    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const getCountries = async () => {
            const response = await axios.get("https://restcountries.com/v3/all");
            setCountries(response.data);
        }
        getCountries();
    }, [])
    return {
        countries
    }
}

export default useCountries;