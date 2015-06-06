var Calc = {

    init: function() {
        this.initParse();
    },

    initParse: function() {
        Parse.initialize("KhovLgG8vekbkb4aGXQuf1JyVCepfDib6Kd1VqbI", "HtmPtlvQ9GeFPvCJDy0bjnTaLMAkdtMckT3bP4OT");
    },

    manageSession: function() {
        var currentUser = Parse.User.current();
        if (!currentUser) {
            window.location = "../";
        }
    }
};

$(function() {
    Calc.init();
});



