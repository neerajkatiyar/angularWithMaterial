import { Component, OnInit, ElementRef } from '@angular/core';
import '../../helpers/cssHelper.extensions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private active = false;
  private selectedMenuId : number;
  constructor() { }

  ngOnInit() {
  }
  onClickOutside(event: MouseEvent) {
    const ss = event.target as HTMLElement;
    const isElementIfPartOfNav = this.isElementIfPartOfNavbar(ss);
    if (event && event['value'] === true && !isElementIfPartOfNav) {
      this.active = false;
      this.inActiveMenu();
    }
  }

  openMenu(event:MouseEvent,selectedMenu:number)
  {
    let element = event.target as HTMLElement;
    // find buttonElement, in case of span, it's offsetParent
    // if (element.localName === 'span') {
    //   element = element.offsetParent as HTMLElement;
    // }
    // if (element.hasClass('nav-active')) {
    //   this.active = false; // behave like toggle;
    // }
    // else {
      this.active = true;
      this.activeMenu(element);
      this.selectedMenuId = selectedMenu;
    //}
  }

  // onMenuSelection(event: MouseEvent) {
  //   // let element = event.target as HTMLElement;
  //   // // find buttonElement, in case of span, it's offsetParent
  //   // if (element.localName === 'span') {
  //   //   element = element.offsetParent as HTMLElement;
  //   // }
  //   // if (element.hasClass('nav-active')) {
  //   //   this.active = false; // behave like toggle;
  //   // }
  //   // else {
  //   //   this.active = true;
  //   // }

    
  //     this.inActiveMenu();
    
  // }

  isElementIfPartOfNavbar(element: HTMLElement): boolean {
    return document.getElementById('navMenu').contains(element);
  }

  activeMenu(element: HTMLElement) {
    this.inActiveMenu();
    // find buttonElement, in case of span, it's offsetParent
    if (element.localName === 'span') {
      element = element.offsetParent as HTMLElement;
    }
    element.addClass('nav-active');
  }

  inActiveMenu() {
    // remove .nav-active class from other menus
    Array.from(document.querySelectorAll('#navMenu button')).forEach(function (button) {
      (button as HTMLElement).removeClass('nav-active');
    });
  }
  onCloseNavBody(event) {
    this.active = false;
    this.inActiveMenu();
  }
  resetMenuSelection(){
    this.inActiveMenu();
  }
}
