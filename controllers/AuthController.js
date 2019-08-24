const UserModel = require('../modules/UserModels')
const bcrypt = require('bcryptjs')
const consts = require('../consts')

module.exports ={
    register: async function(req, res){
        try {
            let user = await UserModel.findOne({email: req.body.email});
            if (!user) {
                const use = new UserModel(req.body)
                use.password = bcrypt.hashSync(req.body.password, consts.bycrptSalts)
                await use.save()
                delete use.password
                res.status(200).json(use)
            }else{
                res.status(403).json({message: 'Email already registered', error: {}});
            }
        } catch (e) {
            res.status(500).json({message: 'Error while saving the user', error: e});
        }
    },

    login: function(req,res){
        
    }
}