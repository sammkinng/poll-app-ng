import { Injectable } from '@angular/core';
import { countries} from 'countries-list';

// Create a custom type for the countries object
interface TCountries {
  [key: string]: {
    name: string;
    // Add other properties as needed
  };
}

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  getCountries() {
    // Type assertion to tell TypeScript that countries is of type TCountries
    const countriesList = countries as TCountries;

    return Object.keys(countriesList).map((code) => ({
      code,
      name: countriesList[code].name,
    }));
  }
}
