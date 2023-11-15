export const taskBodyValidation = (req, res, next) => {
    if (
        req.body.title === undefined ||
        req.body.title === null ||
        req.body.title === "" ||
        req.body.status === undefined ||
        req.body.status === null ||
        req.body.status === ""
    ) {
        return res.status(400).send({msg: "Bad request"});
    }
    next()
}; 