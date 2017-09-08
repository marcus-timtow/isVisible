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
    let isVisible = function (e) {
        let wa = window.scrollY;
        let wb = wa + window.innerHeight;
        
        let {top = 0, height = 0} = (e && e.getBoundingClientRect()) || {};
        let ea = window.scrollY + top;
        let eb = ea + height;
        
        return !(eb < wa || ea > wb);
    };
    
    return isVisible;
}));

