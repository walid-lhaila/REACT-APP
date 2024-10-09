import React from 'react';
import Navbar from "../Components/Navbar.jsx";
import CountryCard from "../Components/CountriesCard.jsx";
import useCountries from "../Clients/useCountries.jsx";

function Countries() {
    const {countries} = useCountries();
    return (
        <div>
            <Navbar />
            <div className="py-10 w-[70%] mx-auto flex flex-wrap gap-3">
                {countries.map((country) => (
                    <CountryCard key={country.name.common} img={country.flags[0]} arabicName={country.translations.ara.official} currency="G" englishName={country.translations.bre.official}/>
                ))}

            </div>
        </div>
    );
}

export default Countries;