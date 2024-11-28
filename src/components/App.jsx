import { useState } from 'react';
import Header from './Header';
import Form from './Form';
import GroceryList from './GroceryList';
import Footer from './Footer';

const groceryItems = [
  {
    id: 1,
    name: "Kopi Liong",
    qty: 5,
    checked: true,
  },
  {
    id: 2,
    name: "Gula Pasir",
    qty: 10,
    checked: false,
  },
  {
    id: 3,
    name: "Mie Instan",
    qty: 20,
    checked: false,
  }
]

export default function App() {
  const [items, setItems] = useState(groceryItems);

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) => items.map((item) => item.id === id ? {...item, checked: !item.checked} : item))
  }

  function handleClearItem() {
    setItems([]);
  }

  return (
    <div className="app">
    <Header />
    <Form onAddItem={handleAddItem}/>
    <GroceryList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearItem={handleClearItem}/>
    <Footer items={items}/>
  </div>

  
  )
}