import moment from "moment/moment.js"
import { dateFormat } from "../utils/constants/date.js"
import tasks from "../data/tasks.data.js"

export const taskBodyValidation = (req, res, next) => { 
    if(
        req.body.title === undefined || req.body.title === null || req.body.title === "" ||
        req.body.status === undefined || req.body.status === null || req.body.status === ""
    ){
        res.status(400).send({msg: "Task data incomplete"})
    }
    next()
}

export const taskDateValidation = (req, res, next) => {
    if(
        !moment(req.body.datestart , dateFormat, true).isValid() ||
        !moment(req.body.dateend , dateFormat, true).isValid()
    ){
        res.status(400).send({msg: "Incorrect date format"})
    }else if(!moment(req.body.dateend).isAfter(req.body.datestart)){
        res.status(400).send({msg: "Date end must be after date start"})
    }
    next()
}

export const findIndex = (req, res, next) => {
    const { id } = req.params
    res.index = tasks.findIndex( task => task.id === id )
    
    if(res.index === -1){
        res.status(404).send({msg: 'Task not found'})
    }

    next()
}