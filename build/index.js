"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var PORT = 8000;
app.get('/', function (req, res) {
    res.send('Hello world');
});
app.listen(PORT, function (err) {
    if (err)
        console.error(err);
    console.log("Server is listening at http://localhost:" + PORT);
});
