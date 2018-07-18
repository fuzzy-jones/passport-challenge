const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema
const BranchSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    leaves: {
        type: [Number], 
        required: true
    }
});

module.exports = Branch = mongoose.model('branch', BranchSchema);