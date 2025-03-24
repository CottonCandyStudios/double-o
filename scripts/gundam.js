/* class Gundam {
    constructor (
        model,
        name,
        pilot,
        gn_drive,
        weapon,
        image
    ) {
        this.model = model;
        this.name = name;
        this.pilot = pilot;
        this.gn_drive = gn_drive;
        this.weapon = weapon;
        this.image = image;
    }
    gnDrive(GNDriveState) {
        this.gn_drive = GNDriveState;
        if (GNDriveState) {
            console.log(this.name + " ...Eliminating the target!");
        };
    }
    changeWeapon(weapon) {
        this.equipWeapon = weapon;
    }
} */

class Gundam {
    constructor(
        model,
        name,
        pilot,
        gn_drive,
        weapon,
        image
    ) {
        this.model = model;
        this.name = name;
        this.pilot = pilot;
        this.gn_drive = gn_drive;
        this.weapon = weapon;
        this.image = image;
    }

    gnDrive(GNDriveState) {
        this.gn_drive = GNDriveState;
        if (GNDriveState) {
            console.log(this.name + " ...Eliminating the target!");
        };
    }

    changeWeapon(weapon) {
        this.equipWeapon = weapon;
    }
};

function GundamBuilder(model, name, pilot) {
    this.model = model;
    this.name = name;
    this.pilot = pilot;

    this.gn_drive = false;
    this.image = 'img/' + this.model + '.png';

    this.setWeapon = function (weapon) {
        this.weapon = weapon;
        return this;
    }

    this.build = function () {
        return new Gundam(
            this.model,
            this.name,
            this.pilot,
            this.gn_drive,
            this.weapon,
            this.image
        )
    }
};

export default GundamBuilder;