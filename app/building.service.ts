
export class BuildingService{
    getBuildingInfo(): Building  {
        var building = new Building();
        building.schoolname = "PS. 167 - Manhattan";
        building.address = {street: "50 broad st", city: 'New York', zip:"11101"};
        return building;
    }
}

class Building {
    schoolname: string;
    address: {
        street: string,
        city:string,
        zip:string
    }
}