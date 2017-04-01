function createWorld(level) {
    //Max level should equal level
    var world = {};
    
    //placeholder stuff, each should be random
    world.gameName = "Sample Game";
    world.towns = [];
    world.zones = [];

    var numberOfTowns = level/10;
    var numberOfZones = level/10;
    var numberOfMonsters = level/5;

    for (var i = 0; i < numberOfTowns; i++) {
        var town = {};
        //get random Town name from list of towns
        town.name = getUnusedTownName(world.towns);
        //populate town with npcs here
        town.npcs = [];
        populateNpcs(town, i);
        //push to towns array
        world.towns.push(town);
    }

    for (var i = 0; i < numberOfZones; i++) {
        var zone = {};
        //get random Zone name from list of zones
        zone.name = "Zone" + i;
        //populate zone with monsters here
        zone.monsters = [];
        populateMonsters(zone, i);
        //push to zones array
        zones.push(zone);
    }
}

function getUnusedTownName(towns) {
    //get random index from townName array
    var randomIndex = Math.floor(Math.random() * townNames.length);
    //get townName at randomIndex
    var randomTownName = townNames[randomIndex];
    //remove townName at randomIndex
    townNames.splice(randomIndex, 1);
    return randomTownName;
}

function populateNpcs(town, tier) {
    
}

function populateMonsters(zone, tier) {
    
}

//initial random town names
var townNames = [
    "Johnsonton",
    "Long Johnsonton",
    "Townton",
    "Towntown",
    "Townname",
    "Downton",
    "Get Downton",
    "Hamlet",
    "Tinyton",
    "Midgard",
    "Kansas City",
    "Longton",
    "Rivendell",
    "Delldell",
    "Elvendell",
    "Farmerinthedell"
];

var firstNames = [
    "Frank",
    "Bill",
    "Bob",
    "Richard",
    "Sally",
    "Trip",
    "Trepe",
    "Mildred",
    "Milly",
    "Melisandre",
    "Jimbo",
    "Jimmison",
    "Sonic",
    "Lorde"
];

var lastNames = [
    "Furter",
    "Franklin",
    "Hedge",
    "Sonson",
    "Underhill",
    "Overhill",
    "Longbottom",
    "Shortbottom",
    "Bigbottom",
    "Bottombottom"
]

