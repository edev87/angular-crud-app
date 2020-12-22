import { Component, OnInit } from '@angular/core';
import { AddressService } from '../address.service';
import { Person } from '../models/person.model';
import  { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  persons: Person[]
  constructor(private addressService: AddressService) { }

  ngOnInit(): void {
   this.persons= this.addressService.onGet();
  }
  onDelete(id: Number){
    this.addressService.onDelete(id);
   }
}
