import { Component } from '@angular/core';

import { CountryService } from 'src/app/services/country.service';

interface Country {
  code: string;
  name: string;
}

@Component({
  selector: 'app-add-info',
  templateUrl: './add-info.component.html',
  styleUrls: ['./add-info.component.scss']
})
export class AddInfoComponent {
  countries: Country[] = [];
  selectedCountry: string = ''; 

  constructor(private countryService: CountryService) {
    this.countries = countryService.getCountries();
  }
}
