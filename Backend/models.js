const mongoose= require("mongoose")
//Connection
mongoose.connect("mongodb+srv://nandhanabiju456:Nandhanabijuamma@cluster0.ofnx90t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Database Connected")
})
.catch(err=>console.log(err))



let mongoSchema=mongoose.Schema


const EmployeeSchema = new mongoSchema({
    CustomerName:String,
    PhoneNo:Number,
    City:String,
    Location:String
})
var employeeModel=mongoose.model("Employee",EmployeeSchema)
module.exports=employeeModel