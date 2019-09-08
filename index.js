// Simple Types
var message = 'Hello World';
var isLoading = true;
var amount = 245;
// Arrays
var userIds = [1, 2, 3, 4, 5, 6];
var ids = [1, 2, 3, 4, 5, 6];
// Functions
var handleClick = function () {
    // do something
};
var otherHandleClick = function () {
    // do something
};
var user = {
    age: 34,
    id: 2,
    name: 'Austin'
};
var fontColors = {
    error: '#ff0000',
    primary: '#231323',
    secondary: '#6b29a3'
};
// Enums
var Responses;
(function (Responses) {
    Responses[Responses["No"] = 0] = "No";
    Responses[Responses["Yes"] = 1] = "Yes";
    Responses[Responses["Maybe"] = 2] = "Maybe";
})(Responses || (Responses = {}));
console.log('Response[0] =', Responses[0]);
console.log('Response.No =', Responses.No);
var KeyCodes;
(function (KeyCodes) {
    KeyCodes[KeyCodes["Enter"] = 13] = "Enter";
    KeyCodes[KeyCodes["Tab"] = 9] = "Tab";
    KeyCodes[KeyCodes["Space"] = 32] = "Space";
    KeyCodes[KeyCodes["Shift"] = 16] = "Shift";
    KeyCodes[KeyCodes["Escape"] = 27] = "Escape";
})(KeyCodes || (KeyCodes = {}));
console.log('KeyCodes[13] =', KeyCodes[13]);
console.log('KeyCodes.Enter =', KeyCodes.Enter);
