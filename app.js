var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'pages/login.html',
    controller  : 'LoginCntlr'
  })
  .when('/account', {
    templateUrl : 'pages/account.html',
    controller  : 'AccountCntlr'
  })
  .when('/receivable', {
    templateUrl : 'pages/receivable.html',
    controller  : 'ReceivableCntlr'
  })
  .when('/payable', {
    templateUrl : 'pages/payable.html',
    controller  : 'PayableCntlr'
  })
  .when('/companyheads', {
    templateUrl : 'pages/company_heads.html',
    controller  : 'CompanyHeadsCntlr'
  })
  .when('/costcenter', {
    templateUrl : 'pages/cost_center.html',
    controller  : 'CostCenterCntlr'
  })
  .when('/trucktractor', {
    templateUrl : 'pages/truck_tractor.html',
    controller  : 'TruckTractorCntlr'
  })
  .when('/employees', {
    templateUrl : 'pages/employees.html',
    controller  : 'EmployeesCntlr'
  })
  .when('/bank', {
    templateUrl : 'pages/bank.html',
    controller  : 'BankCntlr'
  })
  .when('/contractors', {
    templateUrl : 'pages/contractors.html',
    controller  : 'ContractorsCntlr'
  })
  .when('/rice', {
    templateUrl : 'pages/rice.html',
    controller  : 'RiceCntlr'
  })
  .otherwise({redirectTo: '/'});
});
app.controller('LoginCntlr', function($scope){
    $scope.message = "Login Cntl";
});
app.controller('PayableCntlr', function($scope){
  $scope.comPayables = lsExGJInit('comPayables', []);
});
app.controller('CompanyHeadsCntlr', function($scope){
  $scope.comCh = lsExGJInit('comCh', []);
});
app.controller('CostCenterCntlr', function($scope){
  $scope.comCostCenters = lsExGJInit('comCostCenters', []);
});
app.controller('TruckTractorCntlr', function($scope){
  $scope.comTrs = lsExGJInit('comTrs', []);
});
app.controller('EmployeesCntlr', function($scope){
  $scope.message = "Employees Cntl";
});
app.controller('BankCntlr', function($scope){
  $scope.message = "Bank Cntl";
});
app.controller('ContractorsCntlr', function($scope){
  $scope.message = "Contractors Cntl";
});
app.controller('RiceCntlr', function($scope){
  $scope.message = "Rice Cntl";
});