import mongoose from "mongoose";

export const signUp = async (req, res, next) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try{


        await session.commitTransaction();
    } catch(error){
        await session.abortTransaction();
        session.endSession();
        next(error);
    }
};

// Have to implement custom authentication using JWT.
// Have to implement custom authentication using JWT.
// Have to implement custom authentication using JWT.

export const signIn = async (req, res, next) => {};

export const signOut = async (req, res, next) => {};