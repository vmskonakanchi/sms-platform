import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
})
export default class UserDashboardComponent implements OnInit {
  ngOnInit(): void {}

  toogleClass() {
    let sidebar = <HTMLElement>document.querySelector('.sidebar');
    let closeBtn = <HTMLElement>document.querySelector('#btn');
    let logo = <HTMLElement>document.querySelector('#logo');
    sidebar?.classList.toggle('open');
    if (sidebar?.classList.contains('open')) {
      closeBtn?.classList.add('bx-menu');
      logo?.classList.replace('bx-menu', 'bxs-message-dots'); //replacing the iocns class
    } else {
      closeBtn?.classList.remove('bx-menu');
      logo?.classList.replace('bxs-message-dots', 'bx-menu'); //replacing the iocns class
    }
  }
}
