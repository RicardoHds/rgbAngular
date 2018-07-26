import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  color: string;
  color1:number;
  color2:number;
  color3:number;
  RGB: string;
  miRGB(){

    this.color1 = this.ruletaColores();
    this.color2 = this.ruletaColores();
    this.color3 = this.ruletaColores();
 
    this.RGB = ('rgba('+this.color1 +','+this.color2 +','+this.color3 +')');
    return 'rgba('+this.color1 +','+ this.color2 +','+this.color3 +')';

  }
  ruletaColores() {
    return Math.floor(Math.random() * 255);
  }
}
