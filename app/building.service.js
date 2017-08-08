System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var BuildingService, Building;
    return {
        setters:[],
        execute: function() {
            BuildingService = (function () {
                function BuildingService() {
                }
                BuildingService.prototype.getBuildingInfo = function () {
                    var building = new Building();
                    building.schoolname = "PS. 167 - Manhattan";
                    building.address = { street: "50 broad st", city: 'New York', zip: "11101" };
                    return building;
                };
                return BuildingService;
            }());
            exports_1("BuildingService", BuildingService);
            Building = (function () {
                function Building() {
                }
                return Building;
            }());
        }
    }
});
//# sourceMappingURL=building.service.js.map