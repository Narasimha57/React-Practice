import React,{useState} from 'react'
const ShoppingList = () => {
    const[items, setItems] = useState([])
    const[name, setName] = useState("")
    const[quantity, setQuantity] = useState("")
    const submitHandler = (e) =>{
        e.preventDefault();
        if (!name || !quantity)  {
            return;
        }
        const newItems = {
            name, 
            quantity: parseInt(quantity),
        }
        setItems((prevItems) => [...prevItems, newItems])
        setName("")
        setQuantity("")
    }
  return (
    <div>
        <h1>Shopping List</h1>
        <form onSubmit={submitHandler}>
            <input 
                type="text"
                placeholder='Item Name'
                value={name} 
                onChange={(e)=>setName(e.target.value)}
            />

            <input 
                type="number"
                placeholder='Quantity'
                value={quantity} 
                onChange={(e)=>setQuantity(e.target.value)} 
            />

            <button type='submit'>Add Item</button>

        </form>

        <ul>
            {items.map((item, index)=>{
               return <li>{item.name}- Quantity: {item.quantity}</li>
            })}
        </ul>

    </div>
  )
}

export default ShoppingList