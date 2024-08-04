const IncomeModel = require("../models/incomeModel")

exports.addIncome=async(req,res)=>{ //adding by reference to export
    const {title,amount,category,description,date}=req.body 
    
    const income=IncomeModel(
        {title,amount,category,description,date}
    )

    try{
        //validations
        if(!title || !category || !description || !date )
            return res.status(400).json({msg:'All fields are required!'})
        if(amount<=0 || typeof amount!=='number')//javascript number type
            return res.status(400).json({msg:'Amount should be positive number'})

        await income.save()
        res.status(200).json({msg:'Income Added'})
    }
    catch(err){
        res.status(500).json({msg:"Not able to add income coz of ", err})
    }
}

exports.getIncomes=async (req,res)=>{
    try{
        const incomes=await IncomeModel.find().sort({createdAt:-1})
        res.status(200).json(incomes)
    }
    catch(err){
       res.status(500).json({msg:'Server Error'+err})
    }
}

exports.deleteIncome = async(req,res)=>{
    const {id} = req.params;//how is it sent in params
    IncomeModel.findByIdAndDelete(id)
    .then((income)=>{ //what is this parameter passed ?
        res.status(200).json({msg:"Income Deleted"})
    })
    .catch((err)=>{
        res.status(500).json({msg:"Income not Deleted coz of ", err})
    })
}


