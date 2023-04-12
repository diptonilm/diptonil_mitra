import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  { id: 3, name: 'Product 3', price: 30 }
];

function Billing() {
  const [customerName, setCustomerName] = useState('');
  const [billItems, setBillItems] = useState([{ productId: 1, quantity: 1 }]);

  const handleCustomerNameChange = (event) => {
    setCustomerName(event.target.value);
  };

  const handleBillItemProductChange = (index, event) => {
    const newBillItems = [...billItems];
    newBillItems[index].productId = Number(event.target.value);
    setBillItems(newBillItems);
  };

  const handleBillItemQuantityChange = (index, event) => {
    const newBillItems = [...billItems];
    newBillItems[index].quantity = Number(event.target.value);
    setBillItems(newBillItems);
  };

  const handleAddBillItem = () => {
    const newBillItems = [...billItems, { productId: 1, quantity: 1 }];
    setBillItems(newBillItems);
  };

  const handleCreateBill = () => {
    const billData = {
      customerName,
      billItems
    };
    console.log(billData); // Replace with your code to save the data to state or send it to the server
  };

  return (
    <form>
      <label>
        Customer Name:
        <input type="text" value={customerName} onChange={handleCustomerNameChange} />
      </label>
      {billItems.map((billItem, index) => (
        <div key={index}>
          <label>
            Product:
            <select value={billItem.productId} onChange={(event) => handleBillItemProductChange(index, event)}>
              {products.map((product) => (
                <option key={product.id} value={product.id}>{product.name}</option>
              ))}
            </select>
          </label>
          <label>
            Quantity:
            <input type="number" value={billItem.quantity} onChange={(event) => handleBillItemQuantityChange(index, event)} />
          </label>
        </div>
      ))}
      <button type="button" onClick={handleAddBillItem}>Add More Item</button>
      <button type="button" onClick={handleCreateBill}>Create Bill</button>
    </form>
  );
}

export default Billing;