import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { OrderPipe } from '../order-pipe/ngx-order.pipe';
import * as $ from 'jquery';

@Component({
  selector: 'app-selectmenuitem',
  templateUrl: './selectmenuitem.component.html',
  styleUrls: ['./selectmenuitem.component.css']
})
export class SelectmenuitemComponent implements OnInit {

  title = 'app';
  name: string;
  classSearch:string = 'All';
  selectedAll: any;
  public filterKey = '';
  public filteredItems = [];

  order: string = 'id';
  reverse: boolean = false;

  private _values1 = [
    { id: 1, val: 'BreakFast Drink' },
    { id: 2, val: 'Regular Entree' },
    { id: 3, val: 'Breakfast Entree' },
    { id: 4, val: 'Breakfast Entree' }
  ];
  private _values2 = [];

  games: any[] = [
    {
      'id': '31',
      'name': 'Hamburger',
      'genre': 'Regular Entree',
      'image': '../assets/images/Burger6-Hamburger.jpg',
      selected: false
    },
    {
      'id': '22',
      'name': 'Cheese Burger',
      'genre': 'Regular Entree',
      'image': '../assets/images/Burger6-Hamburger.jpg',
      selected: false
    },
    {
      'id': '23',
      'name': 'Double Cheese Burger',
      'genre': 'Regular Entree',
      selected: false
    },
    {
      'id': '24',
      'name': 'Big Mac',
      'genre': 'Regular Entree',
      selected: false
    },
    {
      'id': '25',
      'name': 'Quarter Pounder with Cheese',
      'genre': 'Regular Entree',
      selected: false
    },
    {
      'id': '26',
      'name': 'McRib',
      'genre': 'Regular Entree',
      selected: false
    },
    {
      'id': '27',
      'name': 'S Coffee',
      'genre': 'BreakFast Drink',
      selected: false
    },
    {
      'id': '28',
      'name': 'Scrambled Eggs',
      'genre': 'Breakfast Entree',
      selected: false
    },
    {
      'id': '29',
      'name': 'Hot Cakes',
      'genre': 'Breakfast Entree',
      selected: false
    },
    {
      'id': '10',
      'name': 'Hot Cakes and Sausages',
      'genre': 'Breakfast Entree',
      selected: false
    },
    {
      'id': '11',
      'name': 'Sausage Biscuit',
      'genre': 'Breakfast Entree',
      selected: false
    },
    {
      'id': '12',
      'name': 'Chocolate brownie',
      'genre': 'Breakfast Entree',
      selected: false
    },
    {
      'id': '13',
      'name': 'English Muffin',
      'genre': 'Breakfast Entree',
      selected: false
    },
    {
      'id': '14',
      'name': 'Hashbrown',
      'genre': 'Breakfast Entree',
      selected: false
    },
    {
      'id': '15',
      'name': 'Bacon Cheese Burger',
      'genre': 'Regular Entree',
      selected: false
    },
    {
      'id': '16',
      'name': 'Double Bacon Cheese Burger',
      'genre': 'Regular Entree',
      selected: false
    },
    {
      'id': '17',
      'name': 'Mc Flurry',
      'genre': 'BreakFast Drink',
      selected: false
    },
    {
      'id': '18',
      'name': 'Coke',
      'genre': 'BreakFast Drink',
      selected: false
    },
    {
      'id': '19',
      'name': 'Peri Peri',
      'genre': 'Regular Entree',
      selected: false
    }
  ];


  

  constructor(private orderPipe: OrderPipe) {
    console.log(this.orderPipe.transform(this.games, this.order));
   }

  ngOnInit() {
    $('.selectall').click(function() {
      $('.individual').prop('checked', $(this).prop('checked'));
      });
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

  selectAll() {
    for (let i = 0; i < this.games.length; i++) {
      this.games[i].selected = this.selectedAll;
    }
  }
  checkIfAllSelected() {
    this.selectedAll = this.games.every(function(item: any) {
        return item.selected === true;
      });
  }

  searchbtn() {
    document.getElementById('tablediv').style.visibility = 'visible';
    document.getElementById('nextdiv').style.visibility = 'visible';
  }

 addbtn() {
    document.getElementById('selectDiv').style.visibility = 'visible';
  }



  contains_toggle() {

    document.getElementById('contains').classList.remove('btn-default');
    document.getElementById('contains').classList.add('btn-success');
    document.getElementById('exact').classList.remove('btn-success');
    document.getElementById('exact').classList.add('btn-default');
    }

    exact_toggle() {

    document.getElementById('exact').classList.remove('btn-default');
    document.getElementById('exact').classList.add('btn-success');
    document.getElementById('contains').classList.remove('btn-success');
    document.getElementById('contains').classList.add('btn-default');
    }

    filterdata (){
      if (this.filterKey !== ''){
          this.filteredItems = this.games.filter(function(e){
              return (e.name.toLowerCase().substr(0, this.filterKey.length) ==
  this.filterKey.toLowerCase()) == true;
          }.bind(this));
      }
      else{
          this.filteredItems = [];
      }
  }
  
  //SELCTION ITEM METHOD.
   select (item){
      this.filterKey = item;
      this.filteredItems = [];
  }
}
