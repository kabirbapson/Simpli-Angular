import { Component } from '@angular/core';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-emp-comp',
  templateUrl: './emp-comp.component.html',
  styleUrls: ['./emp-comp.component.css'],
  providers:[RecordsService]
})
export class EmpCompComponent {

  infoReceived1: string[]=[]
  infoReceived2: string[]=[]
  infoReceived3: string[]=[]

  
  getInfoFromSC1() {
    this.infoReceived1 = this.rService.getInfo1()
    console.log(this.infoReceived1)
  }

  getInfoFromSC2() {
    this.infoReceived2 = this.rService.getInfo2()
  }

  getInfoFromSC3() {
    this.infoReceived3 = this.rService.getInfo3()
  }

  constructor(private rService:RecordsService) {
    
  }

}
