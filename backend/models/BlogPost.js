import mongoose from "mongoose";
const { Schema } = mongoose;

const BlogPostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
})

const BlogPost = mongoose.model("BlogPost", BlogPostSchema);
export default BlogPost
