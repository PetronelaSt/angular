import { Component, OnInit } from '@angular/core';
import { Konzultant } from './Konzultant';
import { KonzultantiService } from './konzultanti.service';

@Component({
  selector: 'app-konzultanti',
  templateUrl: './konzultanti.component.html',
  styleUrls: ['./konzultanti.component.css']
})

export class KonzultantiComponent implements OnInit {

  konzultanti2: Konzultant[]; //nie som su uplne ista ako to funguje ale bez toho to nejde

  public konzultantiJson: string;
  public stavKomunikacie: string;
  vybratyKonzultant: Konzultant;
  vybratyKonzultantIndex: number;
  public akcia: string; //add, update, remove

  constructor(private KonzultantiService: KonzultantiService) { }

  ngOnInit() {
    this.updateKonzultanti(); 
  }

  updateKonzultanti() {
    this.KonzultantiService.getKonzultantiFromServer().subscribe(konzultanti => {
      this.konzultanti2 = konzultanti; //vytvorenie kopie
      this.konzultantiJson = JSON.stringify(this.konzultanti2);
      this.stavKomunikacie = 'ok';
      this.akcia = "update";
    },
      error => {
        console.log("Nastala chyba: " + JSON.stringify(error));
        this.stavKomunikacie = 'error';
      });
  }

  vyber(konzultant) {
    this.vybratyKonzultant = konzultant;
  }

  addKonzultantButton() {
    //treba spravit vybrateho zamestnanca - ten na ktoreho sa klika
    this.vybratyKonzultant = new Konzultant("", "", "", "", false, 0) //dala som false pre admina a 0 pre cisla aby nehadzalo chybu
    this.akcia = "add";
  }

  //!handler
  konzultantEditEventHandler(konzultant: Konzultant) { }
}
