class ApiResponse {
    constructor(statusCode, data,message = "Success"){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
}

export { ApiResponse }

/*
ApiResponse is a custom class used to standardize successful API responses. It wraps the HTTP status code, response data, message, and a success flag into a consistent format, making backend responses uniform and easier for frontend applications to handle.
*/