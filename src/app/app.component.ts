import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstProject';
  isDisabled: boolean = true;
  addText : string = "Pas de voitures ajoutées";
  nomVoiture : string = "";

  constructor(){
    setTimeout(()=>{this.isDisabled = false;},2000)

  }
  afficherAlert(){
    this.addText = "Une voiture a été ajoutée"
  }
}
