angular.module('tutor').controller("PretestCtrl", function($scope, $window, $location, configService, User) {

    var themes = ["default", "stFemale", "stMale"]; // define os layouts possíveis de serem carregados

    var random = Math.floor((Math.random() * 10000)) % 3; // randomiza a escolha do layout a ser usado

    $scope.questions = ["Eu sinto que sou competente o suficiente para atender às altas exigências das situações", "Eu faço as coisas de forma espontânea e automática sem ter que pensar.", "Eu tenho um forte sentimento do que eu quero fazer.", "Durante uma atividade eu tenho noção de quão bem estou indo.", "Eu fico completamente focado nas tarefas que tenho.", "Eu tenho sensação de controle total.", "Eu não estou preocupado com o que os outros podem estar pensando de mim.", "A maneira como o tempo passa parece ser diferente do normal.", "A experiência é extremamente recompensadora."]; // define as questões
    $scope.answers = []; // recebe as respostas

    /*
    Função para guardar o tempo do usuário no sistema
    */
    $scope.setTime = function() {
        var time = new Date().getTime();
        User.setStartTime(time);
    };

    /*
    Função para processar as respostas dos usuários
    */
    $scope.processAnswers = function() {

        // console.log($scope.answers);
        // validation
        if ($scope.answers.length < 2) {
            $scope.msg = "Por favor, responda todas as perguntas!"
        } else {
            function add(a, b) {
                return parseInt(a) + parseInt(b);
            };

            var ans = $scope.answers;
            console.log(ans);

            //invert positive answers
            //ans[0] = 5 - ans[0];
            //ans[1] = 5 - ans[1];
            //ans[4] = 5 - ans[4];
            //ans[7] = 5 - ans[7];
            //ans[9] = 5 - ans[9];
            //ans[10] = 5 - ans[10];
            //ans[14] = 5 - ans[14];
            //ans[15] = 5 - ans[15];
            //ans[18] = 5 - ans[18];
            //ans[19] = 5 - ans[19];

            var sum = ans.reduce(add, 0);

            console.log(ans);
            console.log("PRETEST: " + sum);

            configService.setTheme(themes[random]);
            User.setGender($scope.gender);
            User.setAge($scope.age);
            User.setTestType(themes[random]);
            User.setPretestPoints(sum);
            User.setPre(ans);

            console.log(User.getResponse());
            // User.save();
            $location.path("/home");

        };

    };
});
