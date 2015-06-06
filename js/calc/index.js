/**
 * Created by Luiz on 06/06/2015.
 * javascript representando a página index.html
 */

var UIControllerIndex = {

    signin: function() {

        var userName = $('#userNameSignin').val();
        var inputEmailSignin = $('#inputEmailSignin').val();
        var inputPasswordSignin = $('#inputPasswordSignin').val();
        var inputPasswordRepeatSignin = $('#inputPasswordRepeatSignin').val();

        if(userName == "" || inputEmailSignin == "" || inputPasswordSignin == "" || inputPasswordRepeatSignin == "")
            return;

        if(inputPasswordSignin != inputPasswordRepeatSignin)
            return alert("Os campos de senha devem ser iguais.");

        var user = new Parse.User();
        user.set("username", userName);
        user.set("password", inputPasswordSignin);
        user.set("email", inputEmailSignin);

        user.signUp(null, {
            success: function(user) {
                alert("Success");
            },
            error: function(user, error) {
                alert("Error: " + error.code + " " + error.message);
            }
        });
    },

    login: function() {
        var userName = $("#username").val();
        var password = $("#password").val();

        if(userName == "" || password == "")
            return;

        Parse.User.logIn(userName, password, {
            success: function(user) {
                window.location = "pages/dashboard.html";
            },
            error: function(user, error) {
                alert("Erro ao logar" + error);
            }
        });
    }
};