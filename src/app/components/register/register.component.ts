import { Component } from '@angular/core';
import { CountryService } from 'src/app/services/country.service';

interface Country {
  code: string;
  name: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  countries: Country[] = [];
  selectedCountry: string = 'IN'; 

  constructor(private countryService: CountryService) {
    this.countries = countryService.getCountries();
  }
}
