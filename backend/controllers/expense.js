const ExpenseModel = require("../models/expenseModel")

exports.addExpense = async (req, res) => { //adding by reference to export
    const {title, amount, category, description, date} = req.body 
    
    const expense = ExpenseModel(
        {title, amount, category, description, date}
    )

    try {
        // validations
        if (!title || !category || !description || !date)
            return res.status(400).json({msg: 'All fields are required!'})
        if (amount <= 0 || typeof amount !== 'number') // JavaScript number type
            return res.status(400).json({msg: 'Amount should be a positive number'})

        await expense.save()
        res.status(200).json({msg: 'Expense Added'})
    } catch (err) {
        res.status(500).json({msg: "Not able to add expense because of ", err})
    }
}

exports.getExpenses = async (req, res) => {
    try {
        const expenses = await ExpenseModel.find().sort({createdAt: -1})
        res.status(200).json(expenses)
    } catch (err) {
        res.status(500).json({msg: 'Server Error' + err})
    }
}

exports.deleteExpense = async (req, res) => {
    const {id} = req.params; // how is it sent in params
    ExpenseModel.findByIdAndDelete(id)
    .then((expense) => { // what is this parameter passed?
        res.status(200).json({msg: "Expense Deleted"})
    })
    .catch((err) => {
        res.status(500).json({msg: "Expense not Deleted because of ", err})
    })
}
