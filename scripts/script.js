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

const printHTML = (currentGundam) => {
    const newArticle = document.createElement("article");
    newArticle.innerHTML = `
    <h1>${currentGundam.model}</h1>
        <img src="${currentGundam.image}" alt="${currentGundam.name}">
        <h1>${currentGundam.name}</h1>
        <ul>
            <li>Pilot: ${currentGundam.pilot}</li>
            <li>Main Weapon: ${currentGundam.weapon}</li>
            <li>GN Drive State: ${currentGundam.gn_drive}</li>
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
            weapon: gundam.weapon,
            gn_drive: gundam.gn_drive,
            image: gundam.image,
        };
        gundam.gnDrive(true);
        callback(currentGundam)
    });
};

let gundams = [gundamExia, gundamDynames, gundamKyrios, gundamVirtue];

dropGundams(gundams, printHTML);
