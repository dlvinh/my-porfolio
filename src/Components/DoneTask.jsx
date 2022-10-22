import React, { Fragment } from 'react'
import TaskItem from './TaskItem'

export default function DoneTask() {
  return (
    <Fragment>
        <section className="whatdone d-flex flex-wrap justify-content-between mt-5">
            <TaskItem></TaskItem>
            <TaskItem></TaskItem>
            <TaskItem></TaskItem>
            <TaskItem></TaskItem>

      </section>
    </Fragment>
  )
}
