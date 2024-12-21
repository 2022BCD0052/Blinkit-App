import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image :{
        type :String,
        required : true
    },
    price: {
        type: Number,
        required: true,
        },
        discountPrice:{
            type:Number,
        },
        quantity :{
            type:String,
            require:true
        },
        category:{
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Category',
            required : true
        }

})

const Product = mongoose.model("Product", ProductSchema);
export default Product;  //export the model