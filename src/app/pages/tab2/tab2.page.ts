import { Component } from '@angular/core';
import {
  BarcodeScannerOptions,
  BarcodeScanner
} from "@ionic-native/barcode-scanner/ngx";



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  encodeData: any;
  barcodeScannerOptions: BarcodeScannerOptions;

  constructor(private barcodeScanner: BarcodeScanner) {
    //this.encodeData = "https://www.FreakyJolly.com";
  }

  encodedText(){
    this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE,this.encodeData).then((encodeData) => {
        console.log(encodeData);
        this.encodeData = encodeData;
    }, (err) => {
        console.log("Error occured : " + err);
    });                 
}

}
