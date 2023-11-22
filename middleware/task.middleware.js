import moment from "moment/moment.js"
import { dateFormat } from "../utils/constants/date.js"

export const taskBodyValidation = (req, res, next) => { 
    if(
        req.body.title === undefined || req.body.title === null || req.body.title === "" ||
        req.body.status === undefined || req.body.status === null || req.body.status === ""
    ){
        res.status(400).send({msg: "Task data incomplete"})
        return
    }
    next()
}

export const taskDateValidation = (req, res, next) => {
    console.log('start', moment(req.body.datestart , dateFormat, true).isValid())
    console.log('end', moment(req.body.dateend , dateFormat, true).isValid())
    console.log('is after', moment(req.body.dateend , dateFormat, true).isValid())
    if(
        !moment(req.body.datestart , dateFormat, true).isValid() ||
        !moment(req.body.dateend , dateFormat, true).isValid()
    ){
        res.status(400).send({msg: "Incorrect date format"})
        return
    }else if(!moment(req.body.dateend).isAfter(req.body.datestart)){
        res.status(400).send({msg: "Date end must be after date start"})
        return
    }
    next()
}