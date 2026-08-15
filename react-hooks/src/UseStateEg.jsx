import { useState } from "react";

function Profile() {

  const [user, setUser] = useState({
    name: "John Doe",
    age: 31,
    city: "LA",
  });

  const [items, setItems] = useState([
    { id: 0, name: "Item 1" },
    { id: 1, name: "Item 2" },
    { id: 2, name: "Item 3" },
  ]);

  const addItem = () => {
    const newItem = { id: items.length + 1, name: `Item ${items.length + 1}`};
    setItems((prevItems) => [...prevItems, newItem]); 
  };

  const removeItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id)); // Creates a new array
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    console.log(name);
    console.log(value);
    setUser((prevUser) => {
        const updated = {...prevUser,[name] : value}
        return updated;
    });
    
  };

return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>City: {user.city}</p>

      <h2>Update User Age </h2>
      <input type="number" name="age" value={user.age} onChange={handleChange} />

      <h2>Update User Name </h2>
      <input type="text" name="name" value={user.name} onChange={handleChange} />

      <h2>Update User City </h2>
      <input type="text" name="city" value={user.city} onChange={handleChange} />

       <div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}{" "}
            <button onClick={() => removeItem(item.id)}>Remove</button>
            <button onClick={() => addItem(item.id)}>Add</button>
          </li>
        ))}
      </ul>
    </div>
    </div>

    
  );

}

export default Profile;