function getCharacter() {
    return JSON.parse(sessionStorage.getItem("character"));
}

function setCharacter(jsonString) {
    sessionStorage.setItem("character", jsonString);
}

function loadCharacter() {
    var characterFile = document.getElementById("characterFile").files[0];
    console.log(characterFile);
    readFile(characterFile, function(fileText) {
        saveToCharacterObject(fileText.target.result);
        window.location = 'game.html';
    });
}

function readFile(file, onLoadCallback) {
    var reader = new FileReader();
    reader.onload = onLoadCallback;
    reader.readAsText(file);
}

function saveToCharacterObject(jsonData) {
    setCharacter(jsonData);
}

function loadCharacterAttributes() {
    var character = getCharacter();

    updateAttribute('name', character.name);
    updateAttribute('sex', character.sex);
    updateAttribute('class', character.class);
    updateAttribute('level', character.level);
    updateAttribute('exp', character.exp);
    updateAttribute('quest', character.activeQuest);
}

function updateAttribute(type, attribute) {
    var className = ".char-" + type;
    var typeObject = document.querySelector(className);
    typeObject.innerHTML = attribute; 
}
