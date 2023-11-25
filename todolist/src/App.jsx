import { useState } from 'react';
import './App.css'; // Make sure to import your styles.css

function App() {
  const [inputlist, setinputlist] = useState('');
  const [items,setitems]=useState([]);
 const itemevent=(e)=>{
   setinputlist(e.target.value)
 }
 const listofitems=(e)=>{
 setitems((olditem)=>{
  return [...olditem,i nputlist]
 })
 }

  return (
    <>
      <div className=" bg-gray-600 min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-md shadow-md p-6">
          <h1 className="text-3xl font-bold mb-4">TODO LIST</h1>
          <div className="flex flex-col md:flex-row mb-4">
            <input
            onChange={itemevent}
              type="text"
              className="w-full md:w-2/3 p-2 border rounded-md mb-2 md:mb-0 md:mr-2"
              placeholder="Add an Item"
            />
            <button
            onClick={listofitems} 
            className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded w-full md:w-1/3">
              +
            </button>
          </div>
          <ol>
            {/* <li className="mb-2">{inputlist}</li> */}
            {items.map((itemval)=>{
              return <li{itemval}></li> 
            })
          }
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
