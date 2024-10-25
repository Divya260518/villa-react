
const express=require('express')
const app=express()
const cors=require('cors')
const port=process.env.PORT||7789
const bodyParser=require('body-parser')

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const uri = "mongodb+srv://divyaaitech:diyadivi@cluster0.hcdoi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
  const homecollect=client.db("shop").collection("ship")


  app.post("/upload",async(req,res)=>{
    const data=req.body;
    const result=await homecollect.insertOne(data);
    res.send(result);
})
app.get("/foods",async(req,res)=>{
    const foods=homecollect.find();
    const result=await foods.toArray();
    res.send(result);
})
app.get("/fooding/:id",async(req,res)=>{
  const id=req.params.id;
  const filter={_id:new ObjectId(id)};
  const result=await homecollect.findOne(filter);
  res.send(result);
})
app.patch("/allproducts/:id",async(req,res)=>{
  
    const id=req.params.id;
    const updateFooddata=req.body;
    const filter={_id:new ObjectId(id)};

    const updateDoc={
        $set:{
            ...updateFooddata
        },
    }
    const options ={upsert:true};
    const result=await homecollect.updateOne(filter,updateDoc,options);
    res.send(result);
})

app.delete('/food/:id',async(req,res)=>{
    const id=req.params.id;
    const filter={_id:new ObjectId(id)};
    const result=await homecollect.deleteOne(filter);
    res.status(200).json({success:true , message:"data deleted successfully", result});
})
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);
app.listen(port,()=>{
    console.log(`connected to ${port}`)
})
