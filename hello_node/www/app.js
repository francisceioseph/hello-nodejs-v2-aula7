angular.module('eventosApp', []);

angular.module('eventosApp')
.controller('mainCtrl', mainCtrl);

mainCtrl.$inject = []
function mainCtrl() {
  this.name = 'Francis Souza';

  this.revert = () => {
    this.name = this.name.split("").reverse().join("");
  }
};
