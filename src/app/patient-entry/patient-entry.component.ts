import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-entry',
  templateUrl: './patient-entry.component.html',
  styleUrls: ['./patient-entry.component.css']
})
export class PatientEntryComponent {

  name=""
  id=""
  address=""
  mobile=""
  date=""
  image=""
  doctor=""

  readValue=()=>
  {
    let data:any=
    {
      "name":this.name,
      "id":this.id,
      "address":this.address,
      "mobile":this.mobile,
      "date":this.date,
      "image":this.image,
      "doctor":this.doctor

    }
    console.log(data)
  }


}
