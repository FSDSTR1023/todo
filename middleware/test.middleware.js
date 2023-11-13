const testMiddleware = {
    logginCallRoute: (req,res,next) => {
        console.log(`Calling ${req.method} --> ${req.baseURL + req.Url} `);
        next();
    }
}

export default testMiddleware;