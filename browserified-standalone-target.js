(function(f) {
    if (typeof exports === "object" && typeof module !== "undefined") {
        module.exports = f()
    } else if (typeof define === "function" && define.amd) {
        define([], f)
    } else {
        var g;
        if (typeof window !== "undefined") {
            g = window
        } else if (typeof global !== "undefined") {
            g = global
        } else if (typeof self !== "undefined") {
            g = self
        } else {
            g = this
        }
        g.greeting = f()
    }
})(function() {
    var define, module, exports;
    return (function() {
        function r(e, n, t) {
            function o(i, f) {
                if (!n[i]) {
                    if (!e[i]) {
                        var c = "function" == typeof require && require;
                        if (!f && c) return c(i, !0);
                        if (u) return u(i, !0);
                        var a = new Error("Cannot find module '" + i + "'");
                        throw a.code = "MODULE_NOT_FOUND", a
                    }
                    var p = n[i] = {
                        exports: {}
                    };
                    e[i][0].call(p.exports, function(r) {
                        var n = e[i][1][r];
                        return o(n || r)
                    }, p, p.exports, r, e, n, t)
                }
                return n[i].exports
            }
            for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
            return o
        }
        return r
    })()({
        1: [
            function(require, module, exports) {

            }, {}
        ],
        "goodbye": [
            function(require, module, exports) {
                if (typeof Logger === "undefined") Logger = console;
                Logger.log("goodbye.js starts.");
                Logger.log("typeof require = " + typeof require);
                Logger.log("typeof module = " + typeof module);
                Logger.log("Object.keys(module) = " + Object.keys(module));
                Logger.log("typeof exports = " + typeof exports);
                Logger.log("Object.keys(exports) = " + Object.keys(exports));

                function goodbye() {
                    Logger.log("goodbye");
                }
                if (typeof exports === "undefined") exports = {};
                exports.goodbye = goodbye;
                //goodbye();
                Logger.log("goodbye.js ends.");

            }, {}
        ],
        "hello": [
            function(require, module, exports) {
                if (typeof Logger === "undefined") Logger = console;
                Logger.log("hello.js starts.");
                Logger.log("typeof require = " + typeof require);
                Logger.log("typeof module = " + typeof module);
                Logger.log("Object.keys(module) = " + Object.keys(module));
                Logger.log("typeof exports = " + typeof exports);
                Logger.log("Object.keys(exports) = " + Object.keys(exports));

                function hello() {
                    Logger.log("hello");
                }
                if (typeof exports === "undefined") exports = {};
                exports.hello = hello;
                //hello();
                Logger.log("hello.js ends");


            }, {}
        ]
    }, {}, [1])("hello")
});
