new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gamingIsRunning: false
  },
  methods: {
    startGame: function() {
      this.gamingIsRunning = true;
      this.monsterHealth = this.playerHealth = 100;
    },
    attack: function() {

      var max = 10;
      var min = 3;

      var damage = Math.max(Math.floor(Math.random() * max) + 1, min);
      
      this.monsterHealth -= damage;

      if (this.monsterHealth <= 0) {
        alert('You won!');
        this.gamingIsRunning = false;
        return;
      }

      max = 12;
      min = 5;

      var damage = Math.max(Math.floor(Math.random() * max) + 1, min);
      
      this.playerHealth -= damage;

      if (this.playerHealth <= 0) {
        alert('You lost!');
        this.gamingIsRunning = false;
      }
    },
    specialAttack: function() {
      
      this.monsterHealth -= 15;
    },
    heal: function() {

      this.playerHealth += 10;
    },
    giveUp: function() {

      this.gamingIsRunning = false;
    }
  }
});