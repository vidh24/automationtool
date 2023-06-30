import { Injectable } from '@angular/core';
import { ActiontypeService } from './actiontype.service'
import { IdentifierService } from './identifier.service';

@Injectable()
export class SelectserviceService {

  
  getActiontype() {
    return [
     new ActiontypeService(1, 'USA' ),
     new ActiontypeService(2, 'Brazil' ),
    ];
  }
  
  getIdentifier() {
   return [
     new IdentifierService(1, 1, 'Arizona' ),
     new IdentifierService(2, 1, 'Alaska' ),
     new IdentifierService(3, 1, 'Florida'),
     new IdentifierService(4, 1, 'Hawaii'),
     new IdentifierService(5, 2, 'Sao Paulo' ),
     new IdentifierService(6, 2, 'Rio de Janeiro'),
     new IdentifierService(7, 2, 'Minas Gerais' )
    ];
  }
}
