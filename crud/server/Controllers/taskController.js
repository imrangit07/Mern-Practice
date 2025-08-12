const taskModel = require("../Models/ModelSchema")
const addTask = async (req, res) => {
    console.log(req.body);
    const { task } = req.body
    console.log(task)
    try {
        await taskModel.create({
            task: task,
        })

        res.json({ message: "task Added successfuly" });
    } catch (error) {
        res.json({ message: 'error', error });

    }

}

const deleteTask = async(req,res)=>{
    const {id}=req.query;
    try {
       const task = await taskModel.findByIdAndDelete({_id:id});
       
       if(!task)
       {
        res.json({message:"Task not Found"});
       }
        res.json({message:"deleted successfuly"});
    } catch (error) {
        res.json(error)
    }
}

const changeStatus =async (req,res)=>{
    const {id}=req.query;
try {
    const updated = await taskModel.findByIdAndUpdate(id,{
        status:'true'
    })
    res.json({message:"Status change successfuly"})
} catch (error) {
    res.json({error:error})
}
}

module.exports = {
    addTask,
    deleteTask,
    changeStatus
}