class UserController{ 

  async store(req,res){
    const users = ['fabio','diogo','pereira']
    const { name } = req.body;
    users.push(name);
    console.log(name);
    return res.json(name);  
  }

  async update (req,res) {
    const users = ['fabio','diogo','pereira']
    const { index } = req.params;
    const { name } = req.body;
    
    users[index] = name;
    console.log(name);
    return res.json(users);  
  }

  async index (req,res){
    const users = ['fabio','diogo','pereira']
    return res.json(users);
  }

  async delete (req,res) {
    const users = ['fabio','diogo','pereira']
    const { index } = req.params;  
    users.slice(index);
    console.log(index);
    return res.json(users);
  
  }
}

export default new UserController();