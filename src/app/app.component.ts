import { Component } from '@angular/core';
import { PassenjerService } from './services/passenjer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'services';

  constructor(private _passengerService:PassenjerService){
    
  }
  ngOnInit(): void{
    console.log(this._passengerService.passengerArray)
  }

}
