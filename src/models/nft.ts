import mongoose, { Schema, Model, model, ObjectId } from "mongoose";
import { hashSync, genSaltSync, compareSync } from "bcryptjs";

export interface INft extends Document {
  name: string,
  description: string,
  image: string,
  minted: boolean
}
interface INftModel extends Model<INft> {}

const NftSchema: Schema = new Schema({
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

const Nft: INftModel = model<INft, INftModel>("Distribution", NftSchema);
export default Nft;
