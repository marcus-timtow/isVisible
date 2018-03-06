;
(function (name, definition) {
    if (typeof define === "function" && typeof define.amd === "object") {
        define(definition);
    } else if (typeof module !== "undefined") {
        module.exports = definition();
    } else {
        this[name] = definition();
    }
}("isVisible", function () {
    var isVisible = function (e) {
        var wa = window.scrollY;
        var wb = wa + window.innerHeight;
        
        var ret = (e && e.getBoundingClientRect()) || {};
        var ea = window.scrollY + ret.top;
        var eb = ea + ret.height;
        
        return !(eb <= wa || ea >= wb);
    };
    
    return isVisible;
}));

