'use strict';

describe ('EdgesCtrl', function(){

  var  scope;

  beforeEach(module('swFrontApp'));

  beforeEach(inject(function($controller, $rootScope){
    
    scope = $rootScope.$new();
    $controller('EdgesCtrl', {$scope: scope});

  }));

  describe('displayRequirements', function(){
    var reqs;
    it('it cancatenates name and value of the requirement', function(){
      reqs = [{name: 'Agility', value: 'd6'}];
      expect (scope.displayRequirements(reqs)).toEqual('Agility d6');
    } );


    it('ignore name if it is null', function(){
      reqs = [{name: null, value: 'Novice'}];
      expect (scope.displayRequirements(reqs)).toEqual('Novice');
    } );

    it('requirements should be delimited by comma', function(){
      reqs = [{name: 'Agility', value: 'd6'},{name: null, value: 'Novice'}];
      expect (scope.displayRequirements(reqs)).toEqual('Agility d6 , Novice');
    } );


  });


});
