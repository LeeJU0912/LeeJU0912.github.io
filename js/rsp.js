var greeting = {
    'mytext': {1 : 'Hi!', 2 : 'My name is', 3 : 'LeeJU'},
    'show' : function () {
        for (var name in this.mytext) {
            alert(this.mytext[name]);
        }
    }
}

function making(text) {
    return function () {
        alert(text);
    }
}