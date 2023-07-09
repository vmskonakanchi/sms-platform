import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  ngOnInit(): void {
    let arrow = document.querySelectorAll('.arrow');

    for (let i = 0; i < arrow.length; i++) {
      arrow[i].addEventListener('click', (e: Event) => {
        let arrowParent = (<HTMLElement>e.target).parentElement!.parentElement!; //selecting main parent of arrow
        arrowParent.classList.toggle('showMenu');
      });
    }
  }
}
