"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const NftSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    minted: {
        type: Boolean,
        default: false
    }
});
const Nft = (0, mongoose_1.model)("Distribution", NftSchema);
exports.default = Nft;
//# sourceMappingURL=nft.js.map