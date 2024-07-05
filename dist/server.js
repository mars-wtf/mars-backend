"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const nft_1 = __importDefault(require("./routes/api/nft"));
const dbConnect_1 = __importDefault(require("./lib/dbConnect"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT ? Number(process.env.PORT) : 5050;
(0, dbConnect_1.default)();
app.set("trust proxy", true);
app.use((0, cors_1.default)("*"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// app.use("/static", express.static(__dirname + "/public"));
app.use("/api/nft", nft_1.default);
app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});
//# sourceMappingURL=server.js.map