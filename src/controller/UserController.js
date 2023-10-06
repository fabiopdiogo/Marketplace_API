import User from '../models/User'
import Yup from 'yup'

  class UserController{ 

    async store(req,res){
      const { 
        name ,
        lastName,
        email,
        date_of_birth,
        sex,
        cpf,
        number,
        password,} = await User.create(req.body);
      return res.json({        
        name ,
        lastName,
        email,
        date_of_birth,
        sex,
        cpf,
        number,
        password,
      });
    }

    async update (req,res) {
      
      const {id} = req.params;
      const {
        name ,
        lastName,
        email,
        date_of_birth,
        sex,
        cpf,
        number,
        password, 
        } = req.body;
       
      await User.findByIdAndUpdate(id, {
        name ,
        lastName,
        email,
        date_of_birth,
        sex,
        cpf,
        number,
        password, })
      .then(() => res.send("Updated successfully"))
      .catch((err) => {
        console.log(err);
        return res.send({ error: err, msg: "Something went wrong!" })
      });

    }

    async delete (req,res) {
      const { id } = req.params;  

      await User.findByIdAndDelete(id)
      .then(() => res.send("Deleted successfully"))
      .catch((err) => {
        console.log(err);
        res.send({ error: err, msg: "Something went wrong!" })
      });    
    }
  }

export default new UserController();