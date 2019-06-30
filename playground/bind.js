function bind(context) {
    var self = this;
    return function() {
        self.apply(context, arguments)
    }
}

function bind2(context) {
    var self = this
    context = Array.prototype.shift.call(arguments)
    args = Array.prototype.slice.call(arguments)
    return function() {
        self.apply(context, Array.prototype.concat.call(args, Array.prototype.slice.call(arguments)))
    }
}