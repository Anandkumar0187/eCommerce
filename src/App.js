import React, { useEffect, useState } from 'react'
import './App.css';
import Bookmark from './bookmark';


function App() {

  const [data,setData] = useState([]);
  const [search, setSearch] = useState("");
  const [searchItem, setSearchItem] = useState("");
  const [id,setId] = useState("");
  const [bookmark, setBookmark] = useState([]);
  const [temp, setTemp] = useState(true);
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setData(json))
  },[])
  const book = (id)=>{
    setId(id);
  }
  const func = ()=>{
    setTemp(!temp)
  }

  return (
     
      <div className='main'>
        <div className='header'>
          <h1>React Photo Search</h1>
          <button onClick={()=>func()}>Bookmarks</button>
        </div>
        
        <div className='search'>
          <input placeholder='Search free high resolution image' onChange={(e)=>setSearch(e.target.value)}/>
          <button onClick={()=>setSearchItem(search)}>Search</button>
        </div>
        {temp && (<div className='img'>
        {
                data.filter((value)=>{
                    if(searchItem === ""){
                        return "";
                    }else if(value.title.toLowerCase().includes(searchItem.toLowerCase())){
                        return value;
                    }
                }).map((item)=>
                    <div>
                      {/* {console.log(id)} */}
                      {id === item.id && <button className='btn' onClick={()=>setBookmark([...bookmark,item.image])}>Bookmark</button>}
                      <img src={item.image} key={item.id} className='images' onMouseEnter={()=>book(item.id)} alt=""/>
                    </div>
                )
            }
        </div>)}
        {!temp && <Bookmark bookmark={bookmark} func={func}/>}
      </div>
  );
}
export default App;
