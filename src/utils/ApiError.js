class ApiError extends Error{
    constructor(
        statusCode,
        message =  "Something went wrong",
        errors = [],
        stack= ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors

        if(stack) {
            this.stack = stack
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}

/*
ApiError is a custom error class that extends JavaScript's built-in Error class, allowing us to include additional API-specific information such as the HTTP status code, success flag, error list, and stack trace for consistent error handling across the application.
*/