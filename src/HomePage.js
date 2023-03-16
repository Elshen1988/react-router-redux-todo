import { useRef, useState } from 'react';
import './App.css';
import { ListActionAdd,ListActionDelete,ListActionTamam } from './action/action';
import { useSelector, useDispatch } from 'react-redux'

export const HomePage = () => {
    let [data, setData] = useState("")
  let [tamam, setTamam] = useState("")
  let [remove, setremove] = useState("")
  const tdref=useRef()

  const dispa = useDispatch()
  const listStore = useSelector(state => state.list)
 


  const sendData = () => {
    dispa(ListActionAdd(data))
    setData("")
  }
  const sendTamam=(item,e)=>{
    setTamam(item)
    dispa(ListActionTamam(tamam))
    e.target.style="text-decoration-line:line-through ;color: rgb(128, 126, 126);"
    
    
  }
  const sendDelete=(item,e)=>{
  setremove(item)
    dispa(ListActionDelete(remove))
    e.target.parentElement.parentElement.style="display:none"
  }
  return (
    <div className='homePage' >
        <div className='homePage2'>
          <input onChange={(e) => setData(e.target.value)} placeholder='input title' value={data} />
      <img className='enter' alt='qwe' src='https://cdn-icons-png.flaticon.com/128/5421/5421659.png' onClick={sendData}/>
<table >
  <tbody>
  {listStore?.map((item,index)=><tr key={index}><td ref={tdref} onClick={(e)=>sendTamam(item,e)} >{item}</td><td><button className='buttonTD' onClick={(e)=>sendDelete(item,e)}>delete</button></td></tr>)}
  </tbody>
</table>  
        </div>
              
    </div>
  )
}
