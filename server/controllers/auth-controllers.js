//-----------------------------------------------------home logic------------------------------------>>>

const home = async (req, res) => {
  try {
    res.status(200).send("welcome to the mern website from router");
  } catch (e) {
    console.log(e);
  }
};

const regester=async(req,res)=>{

    try{
        res.status(200).json({message:req.body})

    }catch(e){
        console.log(e);
      return  res.status(400).send(e)
    }

    
}









module.exports={home,regester}
