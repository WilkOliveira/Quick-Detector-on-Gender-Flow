angular.module('tutor').controller("PretestCtrl", function($scope, $window, $location, configService, User) {

    var themes = ["default", "stFemale", "stMale"]; // define os layouts possíveis de serem carregados

    var random = Math.floor((Math.random() * 10000)) % 3; // randomiza a escolha do layout a ser usado

    $scope.questions = ["Questão 1", "Questão 2", "Questão 3", "Questão 4", "Questão 5", "Questão 6", "Questão 7", "Questão 8", "Questão 9", "Questão 10", "Questão 11", "Questão 12", "Questão 13", "Questão 14", "Questão 15", "Questão 16", "Questão 17", "Questão 18", "Questão 19", "Questão 20", "Questão 21", "Questão 22", "Questão 23", "Questão 24", "Questão 25", "Questão 26", "Questão 27", "Questão 28", "Questão 29", "Questão 30", "Questão 31", "Questão 32", "Questão 33", "Questão 34", "Questão 35", "Questão 36"]; // define as questões
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
            ans[0] = 5 - ans[0];
            ans[1] = 5 - ans[1];
            ans[4] = 5 - ans[4];
            ans[7] = 5 - ans[7];
            ans[9] = 5 - ans[9];
            ans[10] = 5 - ans[10];
            ans[14] = 5 - ans[14];
            ans[15] = 5 - ans[15];
            ans[18] = 5 - ans[18];
            ans[19] = 5 - ans[19];

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
