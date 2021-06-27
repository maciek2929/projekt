import { Component } from '@angular/core';
import {NG_VALIDATORS} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  myData: any = {
    ax: '',
    bx: '',
    cx: '',
    dx: '',
  }

  hexPattern = new RegExp(/[abc] +/g);


  onMove(moveFrom: string, moveTo: string) {
    this.myData[moveTo] = moveFrom
  }

  onXchg(xchg1: any, xchg2: any) {
    const firstVal = xchg1.value;
    const secondVal = xchg2.value;
    this.myData[xchg1.options[xchg1.selectedIndex].text] = secondVal;
    this.myData[xchg2.options[xchg2.selectedIndex].text] = firstVal;
  }

  onClear() {
    this.myData = {
      ax: '',
      bx: '',
      cx: '',
      dx: '',
    }
  }

}
