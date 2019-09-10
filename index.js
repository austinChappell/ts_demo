var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Simple Types
var message = 'Hello World';
var isLoading = true;
var amount = 245;
// Arrays
var userIds = [1, 2, 3, 4, 5, 6];
var ids = [1, 2, 3, 4, 5, 6];
// Functions
// Okay
var setSomeId = function (id) {
    // do something
};
var setId = function (id) {
    // do something
};
var stringValueSetter = function (someString) {
    // do something
};
var numValueSetter = function (someNum) {
    // do something
};
var boolValueSetter = function (someBool) {
    // do something
};
var defaultValueSetter = function (id) {
    // do something
};
var user2 = {
    age: 34,
    id: 2,
    name: 'Austin'
};
var fontColors = {
    error: '#ff0000',
    primary: '#231323',
    secondary: '#6b29a3'
};
var setUser = function (user) {
    // do something with the user object
};
// Enums
var Responses;
(function (Responses) {
    Responses[Responses["No"] = 0] = "No";
    Responses[Responses["Yes"] = 1] = "Yes";
    Responses[Responses["Maybe"] = 2] = "Maybe";
})(Responses || (Responses = {}));
console.log('Response[0] =', Responses[0]); // No
console.log('Response.No =', Responses.No); // 0
var KeyCodes;
(function (KeyCodes) {
    KeyCodes[KeyCodes["Enter"] = 13] = "Enter";
    KeyCodes[KeyCodes["Tab"] = 9] = "Tab";
    KeyCodes[KeyCodes["Space"] = 32] = "Space";
    KeyCodes[KeyCodes["Shift"] = 16] = "Shift";
    KeyCodes[KeyCodes["Escape"] = 27] = "Escape";
})(KeyCodes || (KeyCodes = {}));
console.log('KeyCodes[13] =', KeyCodes[13]); // Enter
console.log('KeyCodes.Enter =', KeyCodes.Enter); // 13
var actions = {
    GET_USER: function (state, action) { return (__assign({}, state)); },
    SET_USER: function (state, action) { return (__assign({}, state)); }
};
