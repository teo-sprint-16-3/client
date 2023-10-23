import { useState } from "react";
import { COUNTRY_DATA } from "../../../assets/data/countryData";
import s from "./index.module.scss";

type CountryInfo = {
  id: string;
  properties: {
    name: string;
    korName: string;
  };
};

interface CountriesProps {
  // selectedCountr: CountryInfo;
  handleCountrySelect: (country: CountryInfo) => void;
}

export default function Countries({
  // selectedCountry,
  handleCountrySelect,
}: CountriesProps) {
  const [selectedCountry, setSelectedCountry] = useState({});
  return (
    <div className={s.countryContainer}>
      <ul>
        {COUNTRY_DATA.map((country) => (
          <li
            className={`${s.countryBox} ${
              selectedCountry === country ? s.selected : ""
            }`}
            key={country.id}
          >
            <div
              onClick={() => {
                handleCountrySelect(country);
                setSelectedCountry(country);
              }}
              className={s.countryName}
            >
              {country.properties.korName}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
