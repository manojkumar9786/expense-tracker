const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['income', 'expense'],
        required: true,
    },
    category: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    description: String,
});

module.exports = mongoose.model('Transaction', transactionSchema);
