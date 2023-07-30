class UserController{

  async store(req,res){

    const { name } = req.body;
    users.push(name);
    console.log(name);
    return res.json(name);
  
  }
}

export default new UserController();