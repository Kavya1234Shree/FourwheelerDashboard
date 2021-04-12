import { Component, OnInit } from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {FlatTreeControl} from '@angular/cdk/tree';


declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    // children: any;
    
}
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [
      {name: 'Apple'},
      {name: 'Banana'},
      {name: 'Fruit loops'},
    ]
  }, {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [
          {name: 'Broccoli'},
          {name: 'Brussel sprouts'},
        ]
      }, {
        name: 'Orange',
        children: [
          {name: 'Pumpkins'},
          {name: 'Carrots'},
        ]
      },
    ]
  },
];

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: ''},
    // { path: '/booking', title: 'Booking',  icon:'event_note', class: ''}, 
       { path: '/driver', title: 'Driver Registration',  icon:'person', class: '' },
       { path: '/vender', title: 'Vendor Registration',  icon:'person', class: '' },
      //  { path: '/vehicleregistration', title: 'Vehicle Registration',  icon:'person', class: '' },
      //  { path: '/twowheelerregistration', title: 'Twowheeler Registration',  icon:'person', class: '' },
       { path: '/reg-online', title: '4Wheeler DrivercumOwner',  icon:'person', class: '' },
       {path: '/activefour', title:'Active Drivers 4Wheeler',icon:'person',class:''},
       { path: '/fourwheeleroutstation', title: 'Reference Registration', icon: 'person', class: ''},
       { path: '/fourwheelerdriver', title: '4wheeler DriverOnly', icon: 'person', class: ''},
       { path: '/map', title: 'Map Display', icon: 'map', class: ''},
       { path: '/cancel-order', title: 'Cancelled Orders', icon: 'event_note', class: ''},
       { path: '/trans-sort', title: 'Transactions', icon: 'event_note', class: ''},
       { path: '/deactivate', title: 'Deactivated Drivers', icon: 'event_note', class: ''},
       { path: '/vendor-list', title: 'Vendors List', icon: 'event_note', class: ''},
       { path: '/interstate', title: 'Inter State', icon: 'event_note', class: ''},
       { path: '/transactionhistory', title: 'Transaction History', icon: 'event_note', class: ''},
       { path: '/moverspackers1', title: 'Movers Packers', icon: 'event_note', class: ''},
       { path: '/nodriver', title: 'No Driver Available', icon: 'event_note', class: ''},
       { path: '/otp-get', title: 'OTP', icon: 'event_note', class: ''},
       { path: '/cus-list', title: 'Customers List', icon: 'event_note', class: ''},






       
  

     

    
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];


  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }
  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  constructor() { this.dataSource.data = TREE_DATA;}
  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
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
