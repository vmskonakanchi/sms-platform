import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  hamburger() {
    console.log('hamburger');
    let sidebar = document.querySelector('.sidebar') as HTMLElement;
    sidebar.classList.toggle('close');
    let parent = document.querySelector('.parent') as HTMLElement;
    parent.classList.toggle('min');
  }

  logout() {}
}
