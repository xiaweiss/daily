"use strict"
function showThis() {
    console.log(this)
}
showThis()
var myobj = {c: undefined}
delete myobj.a
delete myobj.b // not error