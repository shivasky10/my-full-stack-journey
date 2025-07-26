class ExpressError extends Error{
    // #error is default error handler in express
    constructor(status,message){
        super();
            this.status=status;
            this.message=message;
    }
}

module.exports=ExpressError;
