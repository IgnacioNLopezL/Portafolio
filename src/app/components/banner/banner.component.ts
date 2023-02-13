import { Component,HostListener  } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  x = true;
  public getScreenWith : any;

  ngOnInit() {
    this.getScreenWith = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWith = window.innerWidth;
    console.log(this.getScreenWith)
  }

}
