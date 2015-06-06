var UIControllerDashboard = {

    init: function() {
        Calc.manageSession();
    },

    logout: function() {
        Parse.User.logOut();
        window.location = "../";
    }

};

$(function() {
    UIControllerDashboard.init();
})