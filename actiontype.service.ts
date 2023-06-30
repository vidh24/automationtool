import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


  export class ActiontypeService {
    constructor(@Inject('mytoken')public id: number, @Inject('mytoken') public name: string) { }
  }