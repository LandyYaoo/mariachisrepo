import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  productstorage: any [] = [];
  text: string [] = [];
  ngOnInit(): void {
      this.productstorage = JSON.parse(this.localstorage.getData('PRODUCTO') || '[]');


  // this.productstorage = JSON.parse(this.localstorage.getData('PRODUCTO') || '{}');
  // console.log(this.productstorage)
  }
  constructor(private localstorage: LocalService){
    this.mostrarTexto();
  }

  getStorage(){
      this.productstorage = JSON.parse(this.localstorage.getData('PRODUCTO') || '[]');

  }
  mostrarTexto(){

    // console.log(localStorage.getItem(('PRODUCTO'));
    // localStorage.getItem(('PRODUCTO') || '{}');
    // console.log(this.localstorage.getData('PRODUCTO'));
  }

  DeleteFromCart(index:number)  {
    // this.localstorage.removeData("i");
    this.localstorage.removeItemData('PRODUCTO', index)
    this.getStorage()



  }
  clearData()  {
    this.localstorage.clearData();
    this.getStorage()
  }

}
