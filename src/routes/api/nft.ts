import express, { Router, Request, Response } from "express";

import {
    check,
    validationResult,
    ValidationError,
    Result,
} from "express-validator";
import NFT from "../../models/nft";
import Nft from "../../models/nft";
// import Refund from "../../models/refund";


const router: Router = express.Router();

// route: /api/ico/invest/distribution
// description: distribution register
// method: POST and it's public

router.get("/nfts", async (req: Request, res: Response) => {
    try {
        const _nfts = await Nft.find ({ minted: false });
        res.status(200).json(_nfts);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.post("/add", [
        check("name", "name is required").notEmpty(),
        check("description", "description is required").notEmpty(),
        check("image", "image is required").notEmpty(),
    ],
    async (req: Request, res: Response) => {
        const errors: Result<ValidationError> = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            await new Nft ({
                name: req.body.name,
                description: req.body.description,
                image: req.body.image
            }).save ();
            res.status(200).json("success");
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
);
// update minted as true
router.put("/mint/:id", async (req: Request, res: Response) => {
    try {
        await Nft.findByIdAndUpdate (req.params.id, { minted: true });
        res.status(200).json("success");
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

export default router;
