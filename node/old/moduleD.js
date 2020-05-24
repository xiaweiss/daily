var q = require("./moduleC");
me(); // xiawei

me = function() {
    console.log('other');
}
me(); // other
q.me(); // 报错