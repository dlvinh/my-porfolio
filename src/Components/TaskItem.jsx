import React from 'react'
import style from '../Styles/TaskItem.module.css';
export default function TaskItem() {
  return (
    <div className={`${style["task-item"]} text-center` }>
    <i className={`${style["icon"]} fa fa-warehouse`}> </i>
    <h3 className='my-4'>Warehouse Assisstant</h3>
    <p>Working with advance <a href="#">AMR system</a> to help warehouse in controlling stock level. Robot operation such as fixing robot congestion, rebooting robot, and reporting problems.</p>
    </div>
  )
}
