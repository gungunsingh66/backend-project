const asyncHandler = (requestHandler) => {
    (req,res,next) => {
        Promise.resolve(requestHandler(req,res,next)).
        catch((err) => next(err))
    }
}

export {asyncHandler};


// const asyncHandler = (fn) => async (req , res, next) => {
//     try {
//         await fn(req, res, next)
//     }catch(error){
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }


/*
asyncHandler is a higher-order function that wraps asynchronous Express controllers and automatically catches errors, reducing repetitive try-catch blocks and simplifying error handling.
*/