const testMiddleWare = {
    logginCallRoute: (req,res,next) => {
        console.log(`Calling ${req.method} --> ${req.url}`)
        console.log(req.body)
        next()
    }
}

export default testMiddleWare