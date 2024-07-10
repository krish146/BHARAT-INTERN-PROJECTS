import {useState,useEffect} from "react";

function App() {
  const initialState="" //problem with let ??

  const [name,setName] =useState(initialState)
  const[datetime,setDatetime]=useState(initialState)
  const[description,setDescription]=useState(initialState)

  const [totalPrice,settotalPrice] = useState(initialState)
  
  const initialData=[]
  const [data,setData]=useState(initialData)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/retrieve");
        if (!response.ok) {
          throw new Error('Failed to retrieve data');
        }
        const data = await response.json();
       console.log( Array.isArray(data) )
       settotalPrice(calculateTotalPrice(data));
        setData(data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []); 

  function calculateTotalPrice(data) {
    return data.reduce((total, item) => total + parseFloat(item.price), 0);
  }


  function addNewTransaction(e){  
    e.preventDefault();
    const price = name.split(' ')[0]; // Splits the input by spaces and takes the first part as price
   setName( name.split(' ').slice(1).join(' ')) // Joins the remaining parts as the name
  
    fetch("http://localhost:5000/AddTransaction",{
      method:'POST',
      headers:{'Content-type':'application/json'},
      body:JSON.stringify({name,price,description,datetime})
    }).then(response=>{
      response.json().then(json=>{
        console.log('result',json);
        setDescription("")
        setName("")
        setDatetime("")

      })
    }).catch(err=>{
      console.log(err) 
    })
  }
 
 
  return (
  <div className="App"> 
    <h1>₹{totalPrice.toFixed(2)}</h1>
    <form onSubmit={addNewTransaction}>
      <div className="basic">
        <input type="text" placeholder="+200 Chocolate" value={name} onChange={e => setName(e.target.value)} />
        <input type="datetime-local" placeholder="date" value={datetime} onChange={e => setDatetime(e.target.value)} />
      </div>

      <div>
        <input type="text" placeholder="description" value={description} onChange={e => setDescription(e.target.value)} />
      </div>
      <button><b>Add Transaction</b></button>
    </form>

    <div className="transactions">
      {data.map((item, index) => (
        <div className="transaction" key={index}>
          <div className="left">
            <div className="name">{item.name}</div>
            <div className="description">{item.description?item.description:"none"}</div>
          </div>
          <div className="right">
            <div className={`price ${item.price >= 0 ? 'green' : 'red'}`}>{item.price}</div>
         
            <div className="datetime">{  new Date(item.datetime).toLocaleString()}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
}

export default App;
