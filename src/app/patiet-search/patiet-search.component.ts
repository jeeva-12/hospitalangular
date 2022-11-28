import { Component } from '@angular/core';

@Component({
  selector: 'app-patiet-search',
  templateUrl: './patiet-search.component.html',
  styleUrls: ['./patiet-search.component.css']
})
export class PatietSearchComponent {

  id=""

  search=()=>
  {
    let data:any={
      "id":this.id
    }
    console.log(data)
  }

}
