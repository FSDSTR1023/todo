const testMiddleware = {
  logginCallRoute: (req, res, next) => {
    console.log(`Calling ${req.method} --> ${req.baseUrl + req.url} `);
    next();
  },
};

export default testMiddleware;
