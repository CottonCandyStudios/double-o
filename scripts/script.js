import GundamBuilder from "./gundam.js";

const gundamExia = new GundamBuilder("GN-001", "Gundam Exia", "Setsuna F. Seiei").setWeapon("GN Sword").build();

const gundamDynames = new GundamBuilder("GN-002", "Gundam Dynames", "Lockon Stratos").setWeapon("GN Sniper Rifle").build();

const gundamKyrios = new GundamBuilder("GN-003", "Gundam Kyrios", "Allelujah Haptism").setWeapon("GN Beam Submachine Gun").build();

const gundamNadhlee = new GundamBuilder("GN-004", "Gundam Nadleeh", "Tieria Erde").setWeapon("GN Beam Saber").build();

const gundamVirtue = new GundamBuilder("GN-005", "Gundam Virtue", "Tieria Erde").setWeapon("GN Bazooka").build();

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
            <li class="gundamcard-pilot">Pilot: <span class="gundamcard-pilot_name">${printTarget.pilot}</span></li>
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
    button.addEventListener("click", function () {
        if (gundamsOnMission.includes(gundams[index]) === false) {
            this.classList.add("gundamSelected");
            gundamsOnMission.push(gundams[index]);
        } else if (gundamsOnMission.includes(gundams[index]) === true) {
            this.classList.remove("gundamSelected");
            gundamsOnMission.splice(gundamsOnMission.indexOf(gundams[index]), 1);
        };
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