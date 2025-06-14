import express from "express";

const app = express();

app.listen(8080, () => {
    console.log("Server is running on port 3000");
});

app.use(express.json())

let data = [
    {
        "name": "Test01"
    },
    {
        "name": "Test02"
    }
]


app.get("/get", (req, res) => {
    res.json(data);
});


app.post('/add', (req, res) => {
    console.log(req.body);
    data.push(
        {
            "name2": "test04"
        }
    )
    req.json('success')
})

app.put("/update/:index", (req, res) => {
    const payload = req.body
    let api_index = req.params.index
    data[api_index] = req.body
    res.json('success')

})