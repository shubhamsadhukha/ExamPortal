import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: 'user-profile', title: 'My Profile',  icon:'person', class: '' },
    { path: 'questions', title: 'Questions',  icon:'question_answer', class: '' },
    { path: 'subjects', title: 'Subjects',  icon:'library_books', class: '' },
    { path: 'exams', title: 'Exams',  icon:'assignment', class: '' },
    { path: 'reports', title: 'See Reports',  icon:'assessment', class: '' },
    { path: 'allusers', title: 'Manage Users',  icon:'accessibility', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
