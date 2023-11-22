import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { CountryService } from 'src/app/services/country.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  userDetails = {
    fName: '',
    lName: ''
  }

  orignalValue: { [key: string]: any } = {}
  clickedG = false
  clickedC = false
  countries: {
    code: string;
    name: string;
  }[] = []
  reqdFields = false

  form: FormGroup = this.fb.group({
    fName: [null, [Validators.required]],
    lName: [null, [Validators.required]],
    gender: ["", [Validators.required]],
    religion: [null, [Validators.required]],
    dob: [null, [Validators.required]],
  })

  form1: FormGroup = this.fb.group({
    country: ["", [Validators.required]],
    state: [null, [Validators.required]],
    district: [null, [Validators.required]]
  })

  constructor(
    public auth: AuthService,
    private fb: FormBuilder,
    private cs: CountryService,
    public fs: FirestoreService,
    public globalState: StateService
  ) {
    this.countries = cs.getCountries()
    if (globalState.initialRendering) {
      this.logout()
      globalState.initialRendering = false
    }
  }

  ngOnInit() {
    this.auth.userDetails$.subscribe(v => {
      this.userDetails = v
      this.orignalValue = v
      this.form.patchValue(v)
      this.form1.patchValue(v)
      if(v.times>1){
        this.form.disable()
      }
      if(v.times1>1){
        this.form1.disable()
      }
    })
  }

  save(name: string,type:number) {
    let form = eval(name)
    if (form.value) {
      this.fs.updataData(this.auth.getUID(), form.value, this.orignalValue,type)
    }
    else {
      this.reqdFields = true
      setTimeout(() => this.reqdFields = false, 1500)
    }
  }

  compareValues(name: string) {
    let form = eval(name)
    let ans = true
    Object.keys(form.value).forEach(k => {
      if (ans) {
        ans = this.orignalValue[k] === form.value[k]
      }
    })
    return ans
  }

  logout() {
    document.getElementById('lgbtn')?.click()
  }

}
