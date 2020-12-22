import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import { Person } from '../../models/person.model';
import { AddressService } from '../../address.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
id: number;
header: string;
person: Person = {
  id: 0,
  name: '',
  address: '',
  city: '',
  state: ''
};
  constructor(private router: Router, private route: ActivatedRoute, private addressService: AddressService) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.header = this.id === 0? 'Add Employee': 'Edit Employee';

    if(this.id!=0){
      this.person = this.addressService.onGetPerson(this.id)
    }
  }
onSubmit(form: NgForm){
   let person: Person = {
    id: form.value.id,
   name: form.value.name,
     address: form.value.address,
    city: form.value.city,
    state: form.value.state
  // console.log(form.value)
  }
   if(this.id === 0){
     this.addressService.onAdd(person);
   }
   else{
    this.addressService.onUpdate(person);
  }
     this.addressService.onAdd(person)
   this.router.navigateByUrl('');

 }
}
