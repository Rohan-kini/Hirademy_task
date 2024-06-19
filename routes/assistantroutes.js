const express=require('express');
const router=express.Router();
const assistant=require('./../models/assistant')

//post details ....
router.post('/',async (req,res)=>{
    try{
        const data=req.body //isme hi aayega front end se data body parser req mei laake rakhega data apne liye
    
        //create a new assistant now sab data le lega 
        const newassistant=new assistant(data);
    
        //now save karle db mei
        const response= await newassistant.save();
        console.log('data saved');
        res.status(200).json(response);
    }
    catch(err){
       console.log(err);
       res.status(500).json({error:'Internal Server Error'})
    }

})


//get details ...of all assistant ..
router.get('/details',async(req,res)=>{
    try{
        const data=await assistant.find();
        console.log('Data Fetched');
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'})
    }
})


//find by id .....
router.get('/:assistandID',async(req,res)=>{

    id=req.params.assistandID  //extract id of the assistant

    try{
        const data = await assistant.findById(id);
        console.log('Data Fetched');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'})
    }
})


//update any field ....
router.put('/:assistantID', async (req, res)=>{
    
    try{
        
        const  id= req.params.assistantID; // Extract the id from the URL parameter
        const updatedassistantData = req.body; // Updated data for the person

        const data = await assistant.findByIdAndUpdate(id, updatedassistantData, {
            new: true, // Return the updated document
            runValidators: true, // Run Mongoose validation
        })

        if (!data) {
            return res.status(404).json({ error: 'Assistant not found' });
        }

        console.log(' data updated');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})



//delete details by id ....
router.delete('/:assistantID', async (req, res)=>{

    id = req.params.assistantID; // Extract the id from the URL parameter

    try{
        const data = await assistant.findByIdAndDelete(id);

        if (!data) {
            return res.status(404).json({ error: 'Assistant details not found' });
        }

        console.log('Assistant Details deleted');
        res.status(200).json('Data deleted successfully');
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

module.exports=router;


