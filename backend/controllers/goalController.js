const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalsModel')


//Get goals
// GET /api/goals
// Private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()
    res.status(200).json(goals)
})
//set goal
// POST /api/goals
// Private
const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add text')
    }

    const goal = await Goal.create({
        text: req.body.text
    })
    res.status(200).json(goal)
})
//update goal
// put /api/goals/:id
// Private
const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json(updatedGoal)
})
//delete goal
// delete /api/goals/:id
// Private
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if (!goal) {
        res.status(400)
        throw new Error('Character not found')
    }

    await goal.remove()

    res.status(200).json({ id: req.params.id })

})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}