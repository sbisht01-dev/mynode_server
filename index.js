import express from "express";
import mongoose from "mongoose";
import { user } from "./model/user.js"; // Assuming you have a user model defined in models/user.js

const app = express();
const mongooseURL = "mongodb+srv://saurabhb7678:test01@cluster0.x5dmgek.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

app.listen(8080, () => {
    console.log("Server is running on port 3000");
});

mongoose.connect(mongooseURL).then(
    () => {
        console.log("Connected to MongoDB");
    }
)
app.use(express.json())

let data = [
    {
        "name": "Test01"
    },
    {
        "name": "Test02"
    }
]


app.get("/get", async (req, res) => {
    const Users = await user.find()
    res.json(Users)
})


app.post('/add', async (req, res) => {
    const payload = req.body;
    await user.create(payload);
    res.json('success')
})

app.put("/update/:index", async (req, res) => {
    const payload = req.body
    const api_index = req.params.index
    await user.findByIdAndUpdate(api_index, payload);
    res.json('success')
})
app.delete("/delete/:index",async(req,res)=>{
        const api_index=req.params.index
        try {
            await User.findByIdAndDelete(api_index)
        } catch (error) {
            return res.json({status:"error",message:"Invalid ID"})
        }
        res.json({message:'success',api_index})
})