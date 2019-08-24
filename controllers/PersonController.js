var PersonModel = require('../modules/PersonModel')
module.exports = {
    all : function(req,res) {
        PersonModel.find({}).lean().exec(function(err, people){
            if(err){
                return res.json([])
            }else{
                return  res.json(people);
            }
        })
    },

    search : function(req, res) {

        let text = req.params.text;
        var query = { $or: [
            {name: {$regex: text, $options: 'i'}},
            {country: {$regex: text, $options: 'i'}},
            {company: {$regex: text, $options: 'i'}},
            {email: {$regex: text, $options: 'i'}}
        ]}
        PersonModel.find(query).lean().exec((err, people) => {
            if (err) {
                return res.res.status(500).json({
                    error: err,
                    message: 'Internal error'
                })
            }
            return res.status(200).json(people);
        })
    }
 
}