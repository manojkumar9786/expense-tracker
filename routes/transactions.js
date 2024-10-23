const express = require('express');
const Transaction = require('../models/Transaction');

const router = express.Router();

// Create a new transaction
router.post('/', async (req, res) => {
    try {
        const transaction = new Transaction(req.body);
        await transaction.save();
        res.status(201).json(transaction);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get all transactions
router.get('/', async (req, res) => {
    try {
        const transactions = await Transaction.find();
        res.json(transactions);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get transaction by ID
router.get('/:id', async (req, res) => {
    try {
        const transaction = await Transaction.findById(req.params.id);
        if (!transaction) return res.status(404).json({ error: 'Transaction not found' });
        res.json(transaction);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update transaction by ID
router.put('/:id', async (req, res) => {
    try {
        const transaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!transaction) return res.status(404).json({ error: 'Transaction not found' });
        res.json(transaction);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete transaction by ID
router.delete('/:id', async (req, res) => {
    try {
        const transaction = await Transaction.findByIdAndDelete(req.params.id);
        if (!transaction) return res.status(404).json({ error: 'Transaction not found' });
        res.json({ message: 'Transaction deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get summary of transactions
router.get('/summary', async (req, res) => {
    try {
        const transactions = await Transaction.find();
        const summary = {
            totalIncome: transactions
                .filter(t => t.type === 'income')
                .reduce((acc, curr) => acc + curr.amount, 0),
            totalExpenses: transactions
                .filter(t => t.type === 'expense')
                .reduce((acc, curr) => acc + curr.amount, 0),
            balance: transactions
                .filter(t => t.type === 'income')
                .reduce((acc, curr) => acc + curr.amount, 0) -
                transactions
                .filter(t => t.type === 'expense')
                .reduce((acc, curr) => acc + curr.amount, 0),
        };
        res.json(summary);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
