import Purchase from "../models/Purchase"

class PurchaseController{
  async store(req,res){
    const {_id} = req.params;
    const {_id_buyer,_id_product} = req.body 
    console.log(_id_buyer,_id_product)
    try{
      const purchase = await Purchase.create({_id_buyer,_id_product}) 
      return res.json({purchase})
    }catch (err){
      return res.status(404).json({ message: 'Erro' });
    } 

  }
}

export default new PurchaseController();