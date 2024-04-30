const express = require('express');
const app = express();
const cors = require('cors');

const PORT = 3001; // Choose any available port

// Dummy user data
const users = [
    { id: 1, firstName: 'John', lastName: 'Doe', address: '123 Main St', phoneNumber: '123-456-7890', age: 30, gender: 'Male' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', address: '456 Oak St', phoneNumber: '987-654-3210', age: 25, gender: 'Female' },
    { id: 3, firstName: 'Alice', lastName: 'Johnson', address: '789 Elm St', phoneNumber: '456-789-0123', age: 35, gender: 'Female' },
    { id: 4, firstName: 'Bob', lastName: 'Williams', address: '567 Pine St', phoneNumber: '789-012-3456', age: 45, gender: 'Male' },
    { id: 5, firstName: 'Emily', lastName: 'Brown', address: '321 Cedar St', phoneNumber: '012-345-6789', age: 28, gender: 'Female' },
    { id: 6, firstName: 'Michael', lastName: 'Jones', address: '987 Maple St', phoneNumber: '234-567-8901', age: 40, gender: 'Male' },
    { id: 7, firstName: 'Sarah', lastName: 'Garcia', address: '654 Birch St', phoneNumber: '345-678-9012', age: 22, gender: 'Female' },
    { id: 8, firstName: 'David', lastName: 'Martinez', address: '234 Walnut St', phoneNumber: '567-890-1234', age: 38, gender: 'Male' },
    { id: 9, firstName: 'Jennifer', lastName: 'Hernandez', address: '876 Ash St', phoneNumber: '678-901-2345', age: 33, gender: 'Female' },
    { id: 10, firstName: 'James', lastName: 'Young', address: '543 Pine St', phoneNumber: '890-123-4567', age: 50, gender: 'Male' },
    { id: 11, firstName: 'Amanda', lastName: 'Lee', address: '765 Elm St', phoneNumber: '901-234-5678', age: 27, gender: 'Female' },
    { id: 12, firstName: 'Christopher', lastName: 'Scott', address: '123 Oak St', phoneNumber: '012-345-6789', age: 32, gender: 'Male' },
  ];
  

app.use(cors());


// Route to get all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
