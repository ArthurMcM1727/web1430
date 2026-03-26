function initializeDashboard() {
    const header = document.createElement("h1");
    header.textContent = "Secret Agent Dashboard";
    document.getElementById("mission-container").appendChild(header);

    globalThis.staticMissions = ["Decode encrypted messages",
        "Gather Intel",
        "Disable security systems",
    ]
    const ul = document.createElement("ol");
    
    staticMissions.forEach(mission => {
        const li = document.createElement("li")
        li.textContent = mission
        ul.appendChild(li);
    })
    document.getElementById("mission-container").appendChild(ul);
}

initializeDashboard();

function addMission() {
    const missionInput = document.getElementById("mission-input");
    
    missions = globalThis.staticMissions
    if (missionInput.value.trim() !== "" && !missions.includes(missionInput.value.trim())) {
        missions.push(missionInput.value.trim());
        missionInput.value = "";
        const ul = document.querySelector("#mission-container ol")
        const li = document.createElement("li");
        li.textContent = missions[missions.length - 1];
        ul.appendChild(li);
    }
}

function updateMission(index, newText){
    let missionID = Number(index) - 1
    const ul = document.querySelector("#mission-container ol");
    missions = globalThis.staticMissions

    if (missionID >= 0 && missionID < missions.length && newText.trim() !== "") {
        missions[missionID] = newText;
        ul.children[missionID].textContent = newText;
    }
}

function deleteMission(index){
    let missionID = Number(index) - 1
    const ul = document.querySelector("#mission-container ol");
    missions = globalThis.staticMissions
    if(missionID in missions){
        missions.splice(missionID, 1);
        ul.removeChild(ul.children[missionID]);
    }
}

function insertAfter(newText, referenceIndex) {
    let missionID = Number(referenceIndex) - 1
    const ul = document.querySelector("#mission-container ol");
    missions = globalThis.staticMissions

    if (missionID >= 0 && missionID < missions.length && newText.trim() !== "") {
        missions.splice(missionID + 1, 0, newText);
        const li = document.createElement("li");
        li.textContent = newText;   
        if (ul.children[missionID + 1]) {
            ul.insertBefore(li, ul.children[missionID + 1]);
        }
    }
}

