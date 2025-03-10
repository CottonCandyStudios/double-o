import Gundam from "./gundam.js";

const gundamExia = new Gundam(
    "GN-001",
    "Gundam Exia",
    "Setsuna F. Seiei",
    false,
    "GN Sword",
    "img/GN-001.png",
    " ...Eliminating the target!"
);

const gundamDynames = new Gundam(
    "GN-002",
    "Gundam Dynames",
    "Lockon Stratos",
    false,
    "GN Sniper Rifle",
    "img/GN-002.png"
);

const gundamKyrios = new Gundam(
    "GN-003",
    "Gundam Kyrios",
    "Allelujah Haptism",
    false,
    "GN Beam Submachine Gun",
    "img/GN-003.png"
);

const gundamNadhlee = new Gundam(
    "GN-004",
    "Gundam Nadleeh",
    "Tieria Erde",
    false,
    "GN Beam Saber",
    "img/GN-004.png"
);

const gundamVirtue = new Gundam(
    "GN-005",
    "Gundam Virtue",
    "Tieria Erde",
    false,
    "GN Bazooka",
    "img/GN-005.png"
);

const main = document.querySelector("main");
const newMissionButton = document.querySelector(".newMission");
const closeMission = document.querySelector(".closeMission");

let gundams = [gundamExia, gundamDynames, gundamKyrios, gundamVirtue, gundamNadhlee];
let gundamsOnMission = [];

function printHTML(printTarget) {
    const newArticle = document.createElement("article");
    newArticle.innerHTML = `
    <h1>${printTarget.model}</h1>
        <img src="${printTarget.image}" alt="${printTarget.name}">
        <h1>${printTarget.name}</h1>
        <ul>
            <li>Pilot: ${printTarget.pilot}</li>
            <li>Main Weapon: ${printTarget.weapon}</li>
            <li>GN Drive State: ${printTarget.gn_drive}</li>
        </ul>
    `;
    main.append(newArticle);
};

const dropGundams = (gundam, callback) => {
    gundam.forEach(gundam => {
        const currentGundam = {
            model: gundam.model,
            name: gundam.name,
            pilot: gundam.pilot,
            gn_drive: gundam.gn_drive,
            weapon: gundam.weapon,
            image: gundam.image,
        };
        gundam.gnDrive(true);
        callback(currentGundam);
    });
};

document.querySelectorAll(".gundamSelector button").forEach((button, index) => {
    console.log(gundams.indexOf(gundams[index]));
    button.addEventListener("click", function () {
        if (gundamsOnMission.includes(gundams[index]) === false) {
            this.classList.add("gundamSelected");
            gundamsOnMission.push(gundams[index]);
        } else {
            console.log(Object(gundams[index]));
            
            gundamsOnMission.splice(Object(gundams[index]), 1);
        }
        ;
    });
});

newMissionButton.addEventListener("click", () => {
    main.innerHTML = "";
    document.querySelector(".gundamSelector").classList.add("hidden");
    newMissionButton.classList.add("hidden");
    closeMission.classList.remove("hidden");
    dropGundams(gundamsOnMission, printHTML);
    gundamsOnMission = [];
});

closeMission.addEventListener("click", () => {
    main.innerHTML = "";
    document.querySelectorAll(".gundamSelector button").forEach((button) => {
        button.classList.remove("gundamSelected");
    });
    document.querySelector(".gundamSelector").classList.remove("hidden");
    closeMission.classList.add("hidden");
    newMissionButton.classList.remove("hidden");
});