import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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

  tabMap: { [key: string]: string } = {
    'sidebar-1-1': 'kk0',
    'sidebar-1-4': 'kk3',
    'sidebar-1-x': 'kk1',
    'sidebar-1-3': 'kk2',

  }

  curr = 'sidebar-1-1'

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
    public globalState: StateService,
    private route: ActivatedRoute
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
      if (v.times > 1) {
        this.form.disable()
      }
      if (v.times1 > 1) {
        this.form1.disable()
      }
    })


    this.route.fragment.subscribe(fragment => {
      if (!fragment) {
        fragment = 'sidebar-1-1'
      }
      document.getElementById(this.tabMap[this.curr])?.classList.remove('active')
      document.getElementById(this.tabMap[fragment || ''])?.classList.add('active')
      document.getElementById(this.curr)?.classList.remove('show')
      document.getElementById(this.curr)?.classList.remove('active')
      document.getElementById(fragment || '')?.classList.add('show')
      document.getElementById(fragment || '')?.classList.add('active')
      this.curr = fragment
    });

  }

  save(name: string, type: number) {
    let form = eval(name)
    if (form.value) {
      this.fs.updataData(this.auth.getUID(), form.value, this.orignalValue, type)
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
