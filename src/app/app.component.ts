import { Component } from "@angular/core";
import { FormBuilder, FormGroup, FormArray} from '@angular/forms';

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  form: FormGroup;

  cities2;

  constructor(
    private formBuilder: FormBuilder
  ) {

    this.form = this.formBuilder.group({
      cities: this.formBuilder.array([
        this.formBuilder.group({
          cityOne: [null],
          cityTwo: [null]
        })
      ]),

      citiesWithAppend: this.formBuilder.array([
        this.formBuilder.group({
          cityOne: [null],
          cityTwo: [null]
        })
      ])

    })

    this.cities2 = [
      { name: "New York", code: "NY" },
      { name: "Rome", code: "RM" },
      { name: "London", code: "LDN" },
      { name: "Istanbul", code: "IST" },
      { name: "Paris", code: "PRS" }
    ];
  }

  addNovo() {
    this.cityFormArray.push(this.formBuilder.group({
      cityOne: [null],
      cityTwo: [null]
    }))
  }

  remove(index) {
    this.cityFormArray.removeAt(index);
  }

  addNovo2() {
    this.cityWithAppendFormArray.push(this.formBuilder.group({
      cityOne: [null],
      cityTwo: [null]
    }))
  }

  remove2(index) {
    this.cityWithAppendFormArray.removeAt(index);
  }

  get cityFormArray(): FormArray {
    return this.form.get('cities') as FormArray;
  }

  get cityWithAppendFormArray(): FormArray {
    return this.form.get('citiesWithAppend') as FormArray;
  }

  
}
