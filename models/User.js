import mongoose from "mongoose";
import validator from "validator";
const schema = new mongoose.Schema({

    //Name type, required
    name: {
        type: String,
        required: [true, "Please enter your name"],
    },
    //Email type, required, unique, vadidate
    email: {
        type: String,
        required: [true, "Please enter your name"],
        unique: true,
        validate: validator.isEmail,
    },
    //Password type, required, minLength, select
    password: {
        type: String,
        required: [true, "Please enter your password"],
        minLength: [6, "Password must be at least 6 characters"],
        select: false,
    },
    //Role type, enum, default
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
    },
    //Subscription type, id, status
    subcription: {
        id: String,
        status: String,
    },
    //Avatar public_id, url
    avatar: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        }
    },
    //Playlist [courseId, poster]
    playlist: [{
        course: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course",
        },
        poster: String,
    },
    ],
    createAt: {
        type: Date,
        default: Date.now,
    },
    ResetPasswordToken: String,
    ResetPasswordExpire: String,
});

export const User = mongoose.model("User", schema)