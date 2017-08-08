import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'
import {BuildingComponent} from './building.component'

@Component({
    selector: 'my-app',
    template: `<h1>Hello World</h1>
                <courses></courses>      
                <authors></authors>          
                <buildings></buildings>
                `,
    directives: [CoursesComponent,AuthorsComponent,BuildingComponent]
})
export class AppComponent { }