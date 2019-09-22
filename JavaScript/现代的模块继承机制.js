var MyModules = (function Manager() {
    var modules = {}

    function define(name, deps, impl) {
        for(var i = 0; i < deps.length; i++){
            console.log(deps[i])
            deps[i] = modules[deps[i]]
        }
        modules[name] = impl.apply(impl, deps)

        // modules[name] = impl(...deps)
        console.log(modules)
    }

    function get(name) {
        return modules[name]
    }

    return {
        define,
        get
    }

})();

MyModules.define("bar", [], function() {
    function hello(who) {
        return "Let me introduce: " + who
    }

    return {
        hello
    }
})

MyModules.define("foo", ["bar"], function(bar) {
    console.log(bar)
    var hungry = "hippo"

    function awesome() {
        console.log(bar.hello(hungry).toUpperCase())
    }

    return {
        awesome
    }
})

var bar = MyModules.get('bar')
var foo = MyModules.get('foo')

console.log(bar.hello("hippo")) // Let me introduce: hippo

foo.awesome() // LET ME INTRODUCE: HIPPO