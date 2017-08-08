import {Component} from 'angular2/core'
import {BuildingService} from './building.service'

@Component({
    selector: 'buildings',
    template: ` <h3>School Name: {{schoolName}}</h3>
                <h3>Address:</h3>
                {{address.street}}, {{address.city}}, {{address.zip}}
    `,
    providers: [BuildingService]   
})
export class BuildingComponent {
    schoolName: string;
    address: {
        street: string,
        city: string,
        zip: string
    }
     constructor(buildingSerice:BuildingService){
        var building = buildingSerice.getBuildingInfo();
        this.schoolName = building.schoolname;
        this.address = building.address;
     }
}