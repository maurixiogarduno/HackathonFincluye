import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {qrData = "0"; //Para integrar al createdCode
createdCode = "0"; //Crea el QR

//Variables JSON QR
jsonQRcuenta = "5583266381";
jsonQRconcepto = "Concepto";
jsonQRreferencia = "0001"
//Fin de Variable JSON QR

//JSON QR
obj = {
  "cuenta": this.jsonQRcuenta,
  "trx":[
    {"amount": this.qrData},
    {"concepto": this.jsonQRconcepto},
    {"jsonQRreferencia": this.jsonQRreferencia}
  ]
};
qrDataJson = JSON.stringify(this.obj);
//Fin de JSON QR

qrURL = this.qrDataJson;


qrCode = this.qrURL

constructor(
  public loadingCtrl: LoadingController,
  private authService: AuthService,
  private router: Router,
  private route: ActivatedRoute,
  public alertController: AlertController,
  public actionSheetController: ActionSheetController
) { }

ngOnInit() {
}

createCode() {
  this.createdCode = this.qrData;
}

async presentLoading(loading) {
  return await loading.present();
}

logout(){
  this.authService.doLogout()
  .then(res => {
    this.router.navigate(["/login"]);
  }, err => {
    console.log(err);
  })
}

//Alert
async alertNFC(){
  const alert = await this.alertController.create({
    header: 'Alert',
    subHeader: 'Activación',
    message: 'Deseas Activar NFC.',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Okay',
        handler: () => {
          console.log('Confirm Okay');
          this.presentActionSheet();
        }
      }
    ]
  });

  await alert.present();
}


//Back
async presentActionSheet() {
  const actionSheet = await this.actionSheetController.create({
    header: 'Listo para Escanear NFC',
    buttons: [{
      text: 'Delete',
      role: 'destructive',
      icon: 'trash',
      handler: () => {
        console.log('Delete clicked');
      }
    }, {
      text: 'Share',
      icon: 'share',
      handler: () => {
        console.log('Share clicked');
      }
    }, {
      text: 'Play (open modal)',
      icon: 'arrow-dropright-circle',
      handler: () => {
        console.log('Play clicked');
      }
    }, {
      text: 'Favorite',
      icon: 'heart',
      handler: () => {
        console.log('Favorite clicked');
      }
    }, {
      text: 'Cancel',
      icon: 'close',
      role: 'cancel',
      handler: () => {
        console.log('Cancel clicked');
      }
    }]
  });
  await actionSheet.present();
}



//
doRefresh(event) {
  console.log('Begin async operation');

  setTimeout(() => {
    console.log('Async operation has ended');
    event.target.complete();
  }, 2000);
}











  //Control de Págo
  oneButton(){
    if (this.qrData.length > 3){
      this.createdCode = this.qrData.slice(0,4);
      this.qrCode = this.qrURL.concat(this.createdCode)//Crea un QR Completo
    }
    else{
      if (this.qrData == "0"){
        this.qrData = "1"
        this.createdCode = this.qrData;
        this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
      }
      else{
        this.qrData = this.qrData + "1"
        this.createdCode = this.qrData;
        this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
      }
    }
    }
  
    twoButton(){
    if (this.qrData.length > 3){
      this.createdCode = this.qrData.slice(0,4);
      this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
    }
    else{
      if (this.qrData == "0"){
        this.qrData = "2"
        this.createdCode = this.qrData;
        this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
      }
      else{
        this.qrData = this.qrData + "2"
        this.createdCode = this.qrData;
        this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
      }
    }
    }
  
    threeButton(){
    if (this.qrData.length > 3){
      this.createdCode = this.qrData.slice(0,4);
      this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
    }
    else{
      if (this.qrData == "0"){
        this.qrData = "3"
        this.createdCode = this.qrData;
        this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
      }
      else{
        this.qrData = this.qrData + "3"
        this.createdCode = this.qrData;
        this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
      }
    }
    }
  
    fourButton(){
    if (this.qrData.length > 3){
      this.createdCode = this.qrData.slice(0,4);
      this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
    }
    else{
      if (this.qrData == "0"){
        this.qrData = "4"
        this.createdCode = this.qrData;
        this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
      }
      else{
        this.qrData = this.qrData + "4"
        this.createdCode = this.qrData;
        this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
      }
    }
    }
  
    fiveButton(){
    if (this.qrData.length > 3){
      this.createdCode = this.qrData.slice(0,4);
      this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
    }
    else{
      if (this.qrData == "0"){
        this.qrData = "5"
        this.createdCode = this.qrData;
        this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
      }
      else{
        this.qrData = this.qrData + "5"
        this.createdCode = this.qrData;
        this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
      }
    }
    }
  
    sixButton(){
    if (this.qrData.length > 3){
      this.createdCode = this.qrData.slice(0,4);
      this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
    }
    else{
      if (this.qrData == "0"){
        this.qrData = "6"
        this.createdCode = this.qrData;
        this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
      }
      else{
        this.qrData = this.qrData + "6"
        this.createdCode = this.qrData;
        this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
      }
    }
    }
  
    sevenButton(){
    if (this.qrData.length > 3){
      this.createdCode = this.qrData.slice(0,4);
      this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
    }
    else{
      if (this.qrData == "0"){
        this.qrData = "7"
        this.createdCode = this.qrData;
        this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
      }
      else{
        this.qrData = this.qrData + "7"
        this.createdCode = this.qrData;
        this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
      }
    }
    }
  
    eightButton(){
    if (this.qrData.length > 3){
      this.createdCode = this.qrData.slice(0,4);
      this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
    }
    else{
      if (this.qrData == "0"){
        this.qrData = "8"
        this.createdCode = this.qrData;
        this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
      }
      else{
        this.qrData = this.qrData + "8"
        this.createdCode = this.qrData;
        this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
      }
    }
    }
  
    nineButton(){
    if (this.qrData.length > 3){
      this.createdCode = this.qrData.slice(0,4);
      this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
    }
    else{
      if (this.qrData == "0"){
        this.qrData = "9"
        this.createdCode = this.qrData;
        this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
      }
      else{
        this.qrData = this.qrData + "9"
        this.createdCode = this.qrData;
        this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
      }
    }
    }
  
    zeroButton(){
    if (this.qrData.length > 3){
      this.createdCode = this.qrData.slice(0,4);
      this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
    }
    else{
      if (this.qrData == "0"){
        this.qrData = "0"
        this.createdCode = this.qrData;
        this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
      }
      else{
        this.qrData = this.qrData + "0"
        this.createdCode = this.qrData;
        this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
      }
    }
    }
  
    cleanButton(){
      this.qrData = "0"
      this.createdCode = this.qrData;
      this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
    }

}