import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdentifierService {

  constructor(@Inject('mytoken')public id: number, @Inject('mytoken') public actionid: any, @Inject('mytoken')public name: string) { }
}
