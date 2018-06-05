angular.module('tutor').controller("PosttestCtrl", function($scope, $location, User) {

    $scope.questions = ["Eu senti que era competente o suficiente para atender às altas exigências da situação", "Eu fiz as coisas de forma espontânea e automática sem ter que pensar.", "Eu tive um forte sentimento do que eu queria fazer.", "Durante a atividade eu tive noção de quão bem estava indo.", "Eu fiquei completamente focado nas tarefas que tiham.", "Eu tive sensação de controle total.", "Eu não fiquei preocupado com o que os outros podiam estar pensando de mim.", "A maneira como o tempo passou pareceu ser diferente do normal.", "A experiência foi extremamente recompensadora."];
    $scope.answers = [];

    $scope.processAnswers = function() {

        if ($scope.answers.length < 2) {
            $scope.msg = "Por favor, responda todas as perguntas!"
        } else {

            var time = new Date().getTime();

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

            function add(a, b) {
                return parseInt(a) + parseInt(b);
            }

            User.setPosttestPoints(sum);
            User.setPost(ans);
            User.setEndTime(time);
            console.log(User.getResponse());
            User.save();

            $location.path("/finish");

        };
    }

});
