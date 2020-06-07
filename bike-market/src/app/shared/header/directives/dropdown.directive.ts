import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  private _isShow = false;
  menu: HTMLElement;

  @HostListener('click', ['$event']) changeIsShow(): void {
    this._isShow ? this._hideMenu() : this._showMenu();
  }

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {
  }

  ngOnInit(): void {
    this.menu = this.renderer2.nextSibling(this.elementRef.nativeElement);
  }

  private _showMenu() {
    this.menu.classList.add('show');
    this._isShow = true;
  }

  private _hideMenu() {
    this.menu.classList.remove('show');
    this._isShow = false;
  }

}
