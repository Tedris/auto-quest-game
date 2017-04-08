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

    loadMonsterData();

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

function loadMonsterData() {
    var monsterData = 
}

function populateMonsters(zone, tier) {
    
}

function populateQuestsByMonsterTier(arrayOfMonsters, tier) {
    var quests = [];
    //for each monster, create a quest to get 5 of their dropse
    populateQuestsFromDrops(arrayOfMonsters, 
        quests, 
        tier,
        "This should be easy, just get me five ",
        250);

    populateQuestsFromDrops(arrayOfMonsters,
        quests,
        tier,
        "Want to prove yourself?  Get me ten ",
        300);

    populateQuestsFromDrops(arrayOfMonsters,
        quests,
        tier,
        "I can't get enough!  Get me twenty ",
        500);
    return quests; 
}

function populateQuestsFromDrops(arrayOfMonsters, arrayOfQuests, tier, description, rate) {
    for (var i = 0; i<arrayOfMonsters.length-1; i++) {
        var monster = arrayOfMonsters[i];
        //get monster drops
        for (var j = 0; j < monster.drops.length - 1; j++) {
            var drop = monster.drops[j];
            //get unused quest id 
            var questId = arrayOfQuests.length;
            var description = description + items[drop.id];
            //var exp = Math.floor(getCharacter().requiredExpToNextLevel / 4);
            var exp = rate * (tier + 1);
            var quest = {
                id: questId,
                description: description,
                exp: exp
            };
            arrayOfQuests.push(quest);
        }

    }
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

