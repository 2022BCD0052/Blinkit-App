import mongoose from "mongoose";

const categories = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image :{
        type :String,
        required : true
    }
})

const Category = mongoose.model("Category", categories);
export default Category;  //export the model