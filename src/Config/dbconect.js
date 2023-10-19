import mongoose from "mongoose";

async function connectDatabase(){
    mongoose.connect("mongodb+srv://useradmin:useradmin123@cluster0.xcfkok6.mongodb.net/empreguevaga2?retryWrites=true&w=majority")
    return mongoose.connection;

}

export default connectDatabase;