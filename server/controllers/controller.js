const Question = require("../models/questionSchema.js");
const result = require("../models/resultSchema.js");
const {answers } = require('../database/data.js');
const questions = require('../database/data.js')

/** get all questions */
async function getQuestions(req, res){
    try {
        const q = await Question.find();
        res.json(q)
    } catch (error) {
        throw new Error(error)
    }
}

/** insert all questinos */
async function insertQuestions(req, res){
    try {
        Question.insertMany({ questions, answers }, function(err, data){
            res.json({ msg: "Data Saved Successfully...!"})
        })
    } catch (error) {
        throw new Error(error)
    }
}

/** Delete all Questions */
async function dropQuestions(req, res){
    try {
            await Question.deleteMany();
            res.json({ msg: "Questions Deleted Successfully...!"});
    } catch (error) {
            throw new Error(error)
    }
}

/** get all result */
async function getResult(req, res){
    try {
        const r = await result.find();
        res.json(r)
    } catch (error) {
        throw new Error(error)
    }
}

/** post all result */
async function storeResult(req, res){
    try {
            const { username, result, attempts, points, achived } = req.body;
            if(!username && !result) throw new Error('Data Not Provided...!');

            result.create({ username, result, attempts, points, achived }, function(err, data){
                res.json({ msg : "Result Saved Successfully...!"})
            })

    } catch (error) {
            throw new Error(error)
    }
}

/** delete all result */
async function dropResult(req, res){
    try {
        await result.deleteMany();
        res.json({ msg : "Result Deleted Successfully...!"})
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    getQuestions,
    insertQuestions,
    dropQuestions,
    getResult,
    storeResult,
    dropResult,
};
                    