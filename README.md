# Personal Expense Tracker API

## Overview
A RESTful API for managing personal financial records. Users can record their income and expenses, retrieve past transactions, and get summaries by category or time period.

## Setup

1. Clone the repository
   ```bash
   git clone https://github.com/manojkumar9786/expense-tracker.git

2. Install dependencies

   npm install

3. Create a .env file in the root directory and add your MongoDB URI:

   MONGODB_URI=mongodb://localhost:27017/personal_expense_tracker

4. Start the server

   npm start

API Endpoints
Transactions:
 - POST /transactions

     - Add a new transaction
     - Request Body: { "type": "income/expense", "category": "category_name", "amount": number, "date": "YYYY-MM-DD", "description":             "description" }

 - GET /transactions

     - Retrieve all transactions

 - GET /transactions/

     - Retrieve a transaction by ID

 - PUT /transactions/

     - Update a transaction by ID
     - Request Body: { "type": "income/expense", "category": "category_name", "amount": number, "date": "YYYY-MM-DD", "description":     "description" }

 - DELETE /transactions/

     - Delete a transaction by ID

 - GET /transactions/summary

     - Retrieve a summary of transactions (total income, total expenses, balance)


Categories :
 - POST /categories

     - Add a new category
     - Request Body: { "name": "category_name", "type": "income/expense" }

 - GET /categories

     - Retrieve all categories


Screenshots:

(./screenshots/)