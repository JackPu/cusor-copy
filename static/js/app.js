/**app.js**/
define(['angularAMD', 'angular-route'], function (angularAMD) {
    var app = angular.module("webapp", ['ngRoute']);
    
    var GL = 0;
    app.config(function ($routeProvider) {
        $routeProvider.when("/home", angularAMD.route({
            templateUrl: './doc-list.html'
        }))
        .when("/display-svg", angularAMD.route({
            templateUrl: './display-svg.html'
        }))
        .when("/svg-el-and-g", angularAMD.route({
            templateUrl: './svg-el-svg-and-g.html'
        }))
        .when("/svg-el-rect", angularAMD.route({
            templateUrl: './svg-el-rect.html'
        }))
        .when("/svg-el-circle-and-ellipse", angularAMD.route({
            templateUrl: './svg-el-circle-and-ellipse.html'
        }))
        .when("/svg-el-line-and-polyline", angularAMD.route({
            templateUrl: './svg-el-line-and-polyline.html'
        }))
        .when("/svg-el-polygon", angularAMD.route({
            templateUrl: './svg-el-polygon.html'
        }))
        .when("/svg-el-path", angularAMD.route({
            templateUrl: './svg-el-path.html'
        }))
        .when("/svg-el-marker", angularAMD.route({
            templateUrl: './svg-el-marker.html'
        }))
        .when("/svg-el-text", angularAMD.route({
            templateUrl: './svg-el-text.html'
        }))
        .when("/svg-attr-viewport-and-viewbox", angularAMD.route({
            templateUrl: './svg-attr-viewport-and-viewbox.html'
        }))
        .when("/svg-el-symbol-and-use", angularAMD.route({
            templateUrl: './svg-el-symbol-and-use.html'
        }))
        .when("/svg-animation", angularAMD.route({
            templateUrl: './svg-animation.html'
        }))
        .when("/svg-sprite", angularAMD.route({
            templateUrl: './svg-sprite.html'
        }))
         .when("/svg-icon-animation", angularAMD.route({
            templateUrl: './svg-icon-animation.html'
        }))
        .when("/svg-script", angularAMD.route({
            templateUrl: './svg-script.html'
        }))
        .otherwise({redirectTo: "/home"});
    });
    
    app.controller('HomeCtrl', function ($scope) {
        // 文章目录
        
        
        $scope.index = 0;
        $scope.title = '开始学习SVG';
        $scope.items = [
            {
                'title': '开始学习SVG',
                'hash': 'home'
            },
            {
                'title': 'svg与g标签',
                'hash': 'svg-el-and-g'
            }
            
        ];
        
        
       
        $scope.MAX = $scope.items.length;
        
        $('.bt-menu-trigger').toggle(function(){
            $(this).parent().addClass('bt-menu-open');
            $('.over-layout').addClass('active');
            $('header').addClass('transprent');
            $('#page').addClass('blur');
        },function(){
            $(this).parent().removeClass('bt-menu-open');
            $('.over-layout').removeClass('active');
            $('header').removeClass('transprent');
            $('#page').removeClass('blur');
        });
        
        $scope.select = function(e,item){
            $scope.title = $(e.target).text();   
            $('.bt-menu-trigger').parent().removeClass('bt-menu-open');
            $('.over-layout').removeClass('active');
            $('header').removeClass('transprent');
            $('#page').removeClass('blur');
        }
       
    
    });
    return angularAMD.bootstrap(app);
});