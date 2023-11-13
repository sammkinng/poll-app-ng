import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  clickedG=false
  clickedC=false
  countries:{
    code: string;
    name: string;
  }[]=[]

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
  public auth:AuthService,
  private fb:FormBuilder,
  private cs:CountryService
 ){
  this.countries=cs.getCountries()
 }

}
