angular.module('tutor').controller("FinishCtrl", function($scope, User) {

    $scope.populationAnxiety = 40.1 * 100 / 80;
    $scope.userAnxiety = User.getAnxiety() * 100 / 80;

    /* Comentando para ocultar antiga configuraçção de compartilhamento com o Facebook

    $scope.share = function() {
        FB.ui({
            method: 'share',
            display: 'popup',
            href: 'http://experimentosocial.virtualizegames.com/',
            title: 'Você consegue se contrar em suas atividades?',
            description: 'Descubra agora seu nível de concentração!',
            picture: 'https://pixabay.com/static/uploads/photo/2016/02/07/14/51/hatena-1184896_960_720.png',
            layout: 'button'
        }, function(response) {});
    };
    */
});
