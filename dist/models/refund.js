"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const RefundSchema = new mongoose_1.Schema({
    refunder: {
        type: String,
        required: true,
    },
    ico: {
        type: String,
        required: true,
    },
    txHash: {
        type: String,
        required: true,
    },
    chainId: {
        type: Number,
        required: true,
    },
    created: {
        type: Date,
        default: Date.now
    }
});
const Refund = (0, mongoose_1.model)("Refund", RefundSchema);
exports.default = Refund;
//# sourceMappingURL=refund.js.map