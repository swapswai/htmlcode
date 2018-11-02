import {Pipe, PipeTransform } from '@angular/core';
  @Pipe({
      name: 'filterSearch'
  })
  export class FilterSearchPipe implements PipeTransform {
      transform(items: Array<any>, idSearch: string, nameSearch: string, classSearch: string, allSearch: string) {
          if (items && items.length) {
             return items.filter(item => {
                 if (idSearch && item.id.toLowerCase().indexOf(idSearch.toLowerCase()) === -1) {
                      return false;
                  }
                  if (nameSearch && item.name.toLowerCase().indexOf(nameSearch.toLowerCase()) === -1) {
                      return false;
                  }
if (classSearch && item.genre.toLowerCase().indexOf(classSearch.toLowerCase()) === -1 && item.genre.toLowerCase() !== 'all') {
                      return false;
                  }
                  if (allSearch && item.name.toLowerCase().indexOf(allSearch.toLowerCase()) === -1) {
                      return false;
                  }
                  if (classSearch && item.genre.toLowerCase() === 'all') {
                  // alert(item.genre.toLowerCase());
                      return false;
                  }
                  return true;
             });
         } else {
              return items;
          }
      }
    }
