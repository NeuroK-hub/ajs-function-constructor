export default class Character {
  constructor(data) {
    if (typeof data.name !== 'string' || data.name.length < 2 || data.name.length > 10) {
      throw new Error('Неверное имя персонажа');
    }

    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (types.indexOf(data.type) === -1) {
      throw new Error('Неверный тип персонажа');
    }

    this.name = data.name;
    this.type = data.type;
    this.health = 100;
    this.level = 1;
    this.attack = data.attack;
    this.defence = data.defence;
  }
}
