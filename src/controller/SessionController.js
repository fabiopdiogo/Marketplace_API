import jwt from 'jsonwebtoken';
import User from '../models/User';

//import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    // Verificando se esse email existe
    const user = await User.findOne({ email });
    //console.log(user);
    if (!user) {
      return res.status(401).json({ error: 'Usuario não existe.' });
    }

    // Verificar se a senha nao bate.
    if ((await user.password != password)) {
      console.log(user.password)
      console.log(password)
      return res.status(401).json({ error: 'Senha incorreta.' });
    }

    const { id, name } = user;
    
    return res.status(200).json({ user });
  }
}

export default new SessionController();
