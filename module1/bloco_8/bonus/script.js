const getDamage = (min, max) => {
  return Math.round(Math.random() * (max-min) + min);
};

const combat = (atacker, defender) => {
  defender.healthPoints -= atacker.attack();
};

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: function() {
    return getDamage(this.intelligence, this.intelligence * 2);
  },
  attack: function() {
    this.mana -= 15;
    return (this.mana >= 15) ? this.damage() : 0;
  },
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: function() {
    return getDamage(this.strength, this.strength * this.weaponDmg);
  },
  attack: function() {
    return this.damage();
  },
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: function() {
    return getDamage(15, this.strength);
  },
  attack: function() {
    return this.damage();
  },
};

const gameActions = () => {
  combat(warrior, dragon);
  combat(mage, dragon);
  combat(dragon, warrior);
  combat(dragon, mage);
};

gameActions();
const battleMembers = {mage, warrior, dragon};
console.table(battleMembers, ['healthPoints', 'mana']);
