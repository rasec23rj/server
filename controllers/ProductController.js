var ProductModel = require('../modules/ProductModel')
module.exports = {
    all : function(req,res) {
        ProductModel.find({}).lean().exec(function(err, products){
            if(err){
                return res.json([])
            }else{
                return  res.json(products);
            }
        })
    }
}