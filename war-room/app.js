new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    powerBar: 0,
    gamingIsRunning: false
  },
  methods: {
    startGame: function() {
      this.gamingIsRunning = true;
      this.monsterHealth = this.playerHealth = 100;
      this.powerBar = 0;
    },
    attack: function() {

      var damage = this.calculateDamage(3, 10);
      this.monsterHealth -= damage;
      this.powerBar += damage;

      if (this.checkWin())  return;

      this.monsterAttacks();
    },
    specialAttack: function() {
      
      this.monsterHealth -= this.calculateDamage(10, 20);
      this.powerBar = 0;

      if (this.checkWin())  return;

      this.monsterAttacks();
    },
    heal: function() {

      if (this.playerHealth <= 90) {
        this.playerHealth += 10;
      } else {
        this.playerHealth = 100;
      }

      this.monsterAttacks();
    },
    giveUp: function() {
      this.gamingIsRunning = false;
    },
    monsterAttacks: function() {
      this.playerHealth -= this.calculateDamage(5, 15);
      this.checkWin()
    },
    calculateDamage: function(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    checkWin: function() {

      var vm = this;

      var restart = function(word) {
        if (confirm('You ' + word + '! Restart game?')) {
          vm.startGame()
        } else {
          vm.gamingIsRunning = false;
        }
      }

      if (this.monsterHealth <= 0) {
        restart('won');
        return true;
      } else if (this.playerHealth <= 0) {
        restart('lost');
        return true;
      }

      return false;
    }
  }
});