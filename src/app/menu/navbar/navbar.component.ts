import { Component, OnInit, ElementRef } from '@angular/core';
import '../../helpers/cssHelper.extensions'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private active: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  onClickOutside(event: MouseEvent) {
    var ss = event.target as HTMLElement;
    var isElementIfPartOfNav = this.isElementIfPartOfNavbar(ss)
    if (event && event['value'] === true && !isElementIfPartOfNav) {
      this.active = false;
      this.inActiveMenu();
    }
  
  }

  onMenuSelection(event: MouseEvent) {
    var element = event.target as HTMLElement;
    //find buttonElement, in case of span, it's offsetParent
    if (element.localName == "span") {
      element = element.offsetParent as HTMLElement;
    }
    if (element.hasClass("nav-active")) {
      this.active = false; //behave like toggle;
    }
    else {
      this.active = true;
    }

    if (this.active)
      this.activeMenu((event.target as HTMLElement));
    else
      this.inActiveMenu();
  }

  isElementIfPartOfNavbar(element: HTMLElement): boolean {
    return document.getElementById("navMenu").contains(element);
  }

  activeMenu(element: HTMLElement) {
    this.inActiveMenu();
    //find buttonElement, in case of span, it's offsetParent
    if (element.localName == "span") {
      element = element.offsetParent as HTMLElement;
    }
    element.addClass("nav-active");
  }

  inActiveMenu() {
    //remove .nav-active class from other menus    
    Array.from(document.querySelectorAll("#navMenu button")).forEach(function (button) {
      (button as HTMLElement).removeClass("nav-active")
    });
  }

}
