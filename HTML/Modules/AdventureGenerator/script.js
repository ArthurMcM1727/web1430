let adventure = {
    locations: ["ancient ruins", "the forbidden forest",
        "a sunken ship", "a mountain peak", "a hidden valley",],
    actions: ["explore", "escape", "discover treasure in",
        "climb", "navigate",],
    characters: ["an intrepid explorer", "a cunning pirate",
        "a mysterious stranger", " a daring adventurer",
        "a curious wizard",]
}
            
function generateAdventure(){
    let location = adventure.locations[Math.floor(Math.random() * adventure.locations.length)];
    let action = adventure.actions[Math.floor(Math.random() * adventure.actions.length)];
    let character = adventure.characters[Math.floor(Math.random() * adventure.characters.length)];

    let story = `You will ${action} ${location} with ${character}`;
    document.getElementById('story').textContent = story;
}

function addAdventureOption(lac, option){
    //lac == 1 => location
    //lac == 2 => actions
    //lac == 3 => characters
    if(!option) { alert("Please enter something!"); return; }
    
    if(lac === 1){
        adventure.locations.push(option);
        console.log(`added ${option} to locations`);
        document.getElementById('locationInput').value = '';
        alert("Location added!");
    }
    else if(lac === 2){
        adventure.actions.push(option);
        console.log(`added ${option} to actions`);
        document.getElementById('actionInput').value = '';
        alert("Action added!");
    }
    else if(lac === 3){
        adventure.characters.push(option);
        console.log(`added ${option} to characters`);
        document.getElementById('characterInput').value = '';
        alert("Character added!");
    }
    else{
        console.log("invalid input");
    }
}