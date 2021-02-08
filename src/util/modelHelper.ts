const { model } = require('mongoose')

// returns model for use
const modelHelper = (type, schema, ) => {
    return model(type, schema)
    
}

module.exports = {modelHelper}