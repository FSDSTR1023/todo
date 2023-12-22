const testMiddleware = {
    loginCallRoute: (req, res, next) => {
        console.log(`Calling ${req.method} --> ${req.url}`);
        next();
    }
};

module.exports = testMiddleware;