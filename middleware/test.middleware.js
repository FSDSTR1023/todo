const testMiddleWare = {
   logginCallRoute: (req, res, next) => {
   console.log(`calling, ${req.method}! --> ${req.baseUrl + req.url}`)
   next();
   }
}

export default testMiddleWare;