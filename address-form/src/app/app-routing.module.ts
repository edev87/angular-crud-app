import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { EditComponent } from './people/edit/edit.component';
import { PeopleComponent } from './people/people.component';

const routes: Routes = [
    {
        path: "",
        component: PeopleComponent
    },
    {
        path:"people/edit/:id",
        component:EditComponent
    },
    {
        path:"people/add/:id",
        component:EditComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}