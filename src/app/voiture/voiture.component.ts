import { Component } from '@angular/core';

@Component({
  selector: '.div-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent {
  nom : string = 'Twingo';
  marque = 'Renault';
  status : boolean = true;
}
