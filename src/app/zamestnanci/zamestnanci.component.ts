import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'; //budeme potrebovať neskôr
import { Zamestnanec } from '../zamestnanci/Zamestnanec';
import { ZamestnanciService } from './zamestnanci.service';

@Component({
  selector: 'app-zamestnanci',
  templateUrl: './zamestnanci.component.html',
  styleUrls: ['./zamestnanci.component.css']
})
export class ZamestnanciComponent implements OnInit {

  zamestnanci2: Zamestnanec[]; //nie som su uplne ista ako to funguje ale bez toho to nejde

  public zamestnanciJson: string;
  public stavKomunikacie: string;
  vybratyZamestnanec: Zamestnanec;
  vybratyZamestnanecIndex: number;
  public akcia: string; //add, update, remove

  constructor(private ZamestnanciService: ZamestnanciService) { }

  ngOnInit() {
    this.updateZamestnanci(); //aby sa vždy updatovalo pri načítaní stránky z najnovšieho zoznamu
  }

  updateZamestnanci() {
    this.ZamestnanciService.getZamestnanciFromServer().subscribe(zamestnanci => {
      this.zamestnanci2 = zamestnanci; //vytvorenie kopie
      this.zamestnanciJson = JSON.stringify(this.zamestnanci2);
      this.stavKomunikacie = 'ok';
      this.akcia = "update";
    },
      error => {
        console.log("Nastala chyba: " + JSON.stringify(error));
        this.stavKomunikacie = 'error';
      });
  }

  vyber(zamestnanec) {
    this.vybratyZamestnanec = zamestnanec;
  }

  addZamestnanecButton() {
    //treba spravit vybrateho zamestnanca - ten na ktoreho sa klika
    this.vybratyZamestnanec = new Zamestnanec("", null, "", 0, 0, ""); //dala som null pre date a 0 pre cisla aby nehadzalo chybu
    this.akcia = "add";
  }

  //!handler
  zamestnanecEditEventHandler(zamestnanec: Zamestnanec) {
    if (this.akcia == "add") {
      this.stavKomunikacie = null;
      this.ZamestnanciService.addZamestnanec(zamestnanec).subscribe(_ => {
        this.stavKomunikacie = 'ok';
      },
        error => {
          console.log("Nastala chyba: " + JSON.stringify(error));
          this.stavKomunikacie = 'error';
        });
    }
    else {
      this.zamestnanci2.splice(this.vybratyZamestnanecIndex, 1, zamestnanec);
    }
  }
}
