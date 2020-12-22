import { Injectable } from '@angular/core';
import { Person } from './models/person.model';
import { findLast } from '@angular/compiler/src/directive_resolver';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
persons: Person[] = [
  {
    id: 1,
    name: "One",
    address: "123 lane ave",
    city: "detroit",
    state: "Michigan"
  },
  {
    id: 2,
    name: "Two",
    address: "123 lowy",
    city: "Etore",
    state: "Florida"
  }
];
  constructor() { }

  onGet(){
    return this.persons;
  }
onGetPerson(id: Number){
  return this.persons.find(x=>x.id === id);
}
  onAdd(person: Person){
   return this.persons.push(person)

  }
  onDelete(id: Number){
    let person = this.persons.find(x => x.id === id);
   let index = this.persons.indexOf(person,0);
   this.persons.splice(index,1);
   }

   onUpdate(person: Person){
    let oldperson = this.persons.find(x => x.id === person.id);
  oldperson.name = person.name;
  oldperson.address = person.address;
  oldperson.city = person.city
  oldperson.state = person.state;


   }
}
