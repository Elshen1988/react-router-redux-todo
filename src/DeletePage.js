import React from 'react'
import { useSelector } from 'react-redux'

export const DeletePage = () => {
    const deleteStore = useSelector(state => state.deletes)
  return (
    <div className='deletePage'>
        <table>
    <tbody>
        {deleteStore?.map((item,index)=><tr key={index}><td>{item}</td></tr>)}
    </tbody>
</table>
    </div>
  )
}
