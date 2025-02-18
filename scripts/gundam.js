class Gundam {
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
        this.weapon = weapon;
        this.gn_drive = gn_drive;
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
}

export default Gundam;