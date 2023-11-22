const testMiddleWare = {
    logginCallRoute: (req,res,next) => {
        console.log(`Calling ${req.method} --> ${req.url}`)
        next()
    }
}

export default testMiddleWare