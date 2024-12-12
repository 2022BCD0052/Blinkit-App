import mongoose from "mongoose";

// base user schema like same for most model

const branchSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  liveLocation: {
    latitude: {
      type: Number,
    },
    longitude: {
      type: Number,
    },
  },
  address: {
    type: String,
    },
    deleveryPartner :[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'DeliveryPartner'
        },
    

    ]
});

const Branch= mongoose.model("Branch",branchSchema)
export default Branch;  // export the model