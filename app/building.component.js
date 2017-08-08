System.register(['angular2/core', './building.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, building_service_1;
    var BuildingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (building_service_1_1) {
                building_service_1 = building_service_1_1;
            }],
        execute: function() {
            BuildingComponent = (function () {
                function BuildingComponent(buildingSerice) {
                    var building = buildingSerice.getBuildingInfo();
                    this.schoolName = building.schoolname;
                    this.address = building.address;
                }
                BuildingComponent = __decorate([
                    core_1.Component({
                        selector: 'buildings',
                        template: " <h3>School Name: {{schoolName}}</h3>\n                <h3>Address:</h3>\n                {{address.street}}, {{address.city}}, {{address.zip}}\n    ",
                        providers: [building_service_1.BuildingService]
                    }), 
                    __metadata('design:paramtypes', [building_service_1.BuildingService])
                ], BuildingComponent);
                return BuildingComponent;
            }());
            exports_1("BuildingComponent", BuildingComponent);
        }
    }
});
//# sourceMappingURL=building.component.js.map