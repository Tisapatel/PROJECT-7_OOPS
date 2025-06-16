
class Avenger {
  constructor(name) {
    this.name = name;
  }

  action() {
    return `${this.name} is ready for action! `;
  }
}


class IronMan extends Avenger {
  action() {
    return `${this.name} is flying in the suit and firing repulsors! `;
  }
}


class SpiderMan extends Avenger {
  action() {
    return `${this.name} is swinging through the city! `;
  }
}


class Thor extends Avenger {
  action() {
    return `${this.name} is summoning lightning with Mjolnir! `;
  }
}


class CaptainAmerica extends Avenger {
  action() {
    return `${this.name} is leading the team and throwing his shield! 🇺🇸`;
  }
}


class Hulk extends Avenger {
  action() {
    return `${this.name} is smashing everything in sight! `;
  }
}


const team = [
  new IronMan("Tony Stark"),
  new SpiderMan("Peter Parker"),
  new Thor("Thor Odinson"),
  new CaptainAmerica("Steve Rogers"),
  new Hulk("Bruce Banner")
];

team.forEach((hero, i) => {
  console.log(` Avenger ${i + 1}: ${hero.action()}`);
});
