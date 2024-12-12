import mongoose from "mongoose";

// base user schema like same for most model

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["Admin", "Customer", "DeliveryPartner"],
    require: true,
    default: "user",
  },
  isActivited: {
    type: Boolean,
    default: false,
  },
});

const CustomerSchema = new mongoose.Schema({
    ...userSchema.obj,
    email :{
        type :String,
        required :true,
        unique :true
    },
    password :{
        type :String,
        required :true
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ["Customer"],
      require: true,
      default: "Customer",
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
      required: true,
    },
  
  });


//Delivery Schema
const DeleveryPartnerSchema = new mongoose.Schema({
    ...userSchema.obj,
    email :{
        type :String,
        required :true,
        unique :true
    },
    password :{
        type :String,
        required :true
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ["Customer"],
      require: true,
      default: "Customer",
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
      required: true,
    },
    branch :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Branch",
    }
  });

//   admin Scema
  const adminSchema = new mongoose.Schema({
    ...userSchema.obj,
    email :{
        type :String,
        required :true,
        unique :true
    },
    password :{
        type :String,
        required :true
    },

    role: {
      type: String,
      enum: ["Customer"],
      require: true,
      default: "Customer",
    }
  });
  export const DeleveryPartner = mongoose.model("DeleveryPartner",DeleveryPartnerSchema)  // export the model
  export const Customer = mongoose.model("Customer",CustomerSchema)
  export const Admin = mongoose.model("Admin",adminSchema)  // export the model
