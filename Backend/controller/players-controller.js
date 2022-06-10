const Player = require('../model/Player');

const getAllPlayers = async(req,res)=>{
    let players;
    try{
        players =  await Player.find();
    }catch(err){
        console.log(err);
    }
    if(!players){
        return res.status(404).json({message:"No Players Found"});
    }
    return res.status(200).json({players});
}
const getById = async(req,res)=>{
    const id = req.params.id;
    let player;
    try {
        player = await Player.findById(id);

    } catch (error) {
        console.log(error)
    }
    if(!player){
        return res.status(404).json({message:"No Player Found"});
    }
    return res.status(200).json({player});
}
const addPlayer = async(req,res)=>{
    const {name,ratings,description,image} = req.body;
    let player;
    try {
        player = new Player({
            name,
            ratings,
            description,
            image
        })
        await player.save();
        
    } catch (error) {
        console.log(error);
    }
    if(!player){
        return res.status(500).json({message:'Unable to Add'})
    }
    return res.status(201).json({player})
};
const updatePlayer = async (req,res)=>{
    const id = req.params.id;
    const {name,ratings,description,image} = req.body;
    let player;
    try {
        player = await Player.findByIdAndUpdate(id,{
            name,
            ratings,
            description,
            image
        })
        player = await player.save()

    } catch (error) {
        console.log(error)
    }
    if(!player){
        return res.status(404).json({message:'Unable to Update by this Id'})
    }
    return res.status(200).json({player})

};
const deletePlayer = async(req,res)=>{
    const id = req.params.id;
    let player;
    try {
        player = await Player.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
    }
    if(!player){
        return res.status(404).json({message:'Unable to Delete by this Id'})
    }
    return res.status(200).json({message:"Player Successfully deleted"})
}
 
exports.getAllPlayers = getAllPlayers
exports.addPlayer = addPlayer;
exports.getById = getById;
exports.updatePlayer=updatePlayer;
exports.deletePlayer = deletePlayer;