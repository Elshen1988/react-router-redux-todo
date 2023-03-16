import React from 'react'
import { useSelector } from 'react-redux'

export const Tamamlanmis = () => {
    const tamamStore = useSelector(state => state.tamam)
  return (
    <div className='Tamamlanmis'>
<table>
    <tbody>
        {tamamStore?.map((item,index)=><tr key={index}><td>{item}</td></tr>)}
    </tbody>
</table>
    </div>
  )
}

