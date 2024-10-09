import React, {useEffect, useState} from 'react';
import axios from 'axios';

function usePokemons() {
        const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        const getPokemons = async () => {
            const response = await axios.get('https://tyradex.tech/api/v1/gen/2');
            setPokemons((x) => {
                return response.data;
            });

        };
        getPokemons();

    }, []);

    useEffect(() => {
        console.log(pokemons);
    }, [pokemons]);
    return {
        pokemons,
    }
}

export default usePokemons;