import jwt from 'jsonwebtoken';
import User from '../models/User';
import { promisify } from 'util';
import authConfig from '../config/auth';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;
    // Verificando se esse email existe
    const user = await User;

    if (!user) {
      return res.status(401).json({ error: 'Usuario não existe.' });
    }

    // Verificar se a senha nao bate.
    if ((await user.password != password)) {
      //console.log(user.password)
      //console.log(password)
      return res.status(401).json({ error: 'Senha incorreta.' });
    }

    const { id, name } = user; 

    return res.status(200).json({
      user:{
        id,
        name,
        email
      },
      token: jwt.sign({ email }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      })
    });
  }

  async validate(req, res, next){
    const authHeader = req.headers.authorization;
    //console.log(authHeader)
    if (!authHeader) {
      return res.status(401).json({ error: 'Token não existe.' });
    }
  
    const [, token] = authHeader.split(' ');
    //console.log(token)
    try {
      const decoded = await promisify(jwt.verify)(authHeader, authConfig.secret);
      const email = decoded.email
      const user = await User.findOne({email});
      //console.log(user)
      if (user) 
      return res.status(200).json({user})
      else console.log("erro")

    } catch (err) {
      return res.status(404).json({ message: 'Token invalido.' });
    }
  };
}

export default new SessionController();
