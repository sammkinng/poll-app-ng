import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

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
  clickedG=false
  clickedC=false
  reqdFields=false

  form:FormGroup=this.fb.group({
    fName:[null,[Validators.required]],
    lName:[null,[Validators.required]],
    country:["",[Validators.required]],
    state:[null,[Validators.required]],
    gender:["",[Validators.required]],
    district:[null,[Validators.required]],
    religion:[null,[Validators.required]],
    dob:[null,[Validators.required]],
  })

  constructor(
    private countryService: CountryService,
    private auth:AuthService,
    private fb:FormBuilder
    ) {
    this.countries = countryService.getCountries();
  }

  register(){
    if(this.form.valid){
      this.auth.addDetails(localStorage.getItem('addUid') ||'',this.form.value)
    }
  else{
    this.reqdFields=true
    setTimeout(()=>this.reqdFields=false,1500)
  }}

}
