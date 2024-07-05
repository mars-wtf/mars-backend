"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const nft_1 = __importDefault(require("../../models/nft"));
// import Refund from "../../models/refund";
const router = express_1.default.Router();
// route: /api/ico/invest/distribution
// description: distribution register
// method: POST and it's public
router.get("/nfts", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _nfts = yield nft_1.default.find({ minted: false });
        res.status(200).json(_nfts);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}));
router.post("/add", [
    (0, express_validator_1.check)("name", "name is required").notEmpty(),
    (0, express_validator_1.check)("description", "description is required").notEmpty(),
    (0, express_validator_1.check)("image", "image is required").notEmpty(),
], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        yield new nft_1.default({
            name: req.body.name,
            description: req.body.description,
            image: req.body.image
        }).save();
        res.status(200).json("success");
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}));
// update minted as true
router.put("/mint/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield nft_1.default.findByIdAndUpdate(req.params.id, { minted: true });
        res.status(200).json("success");
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}));
exports.default = router;
//# sourceMappingURL=nft.js.map