//任务管理

import React, { PropTypes } from 'react'
import { routerRedux } from 'dva/router'
import { connect } from 'dva'
import TaskHeader from './taskHeader'
import TaskCardBox from './taskCardBox'

function task ({ location, dispatch, taskManagment, loading }) {
 	const { list, pagination, currentItem, modalVisible, modalType, isMotion, programeData } = taskManagment;
	
  const taskHeaderProps = {
    programeData: programeData,
    onAdd(){

    },
    handleChange(value){
      console.log(value);
    },
  }

  return (
    <div className="content-inner">
    	<TaskHeader {...taskHeaderProps} />
      <TaskCardBox />
    </div>
  )
}

task.propTypes = {
  taskManagment: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.bool,
}

export default connect(({ taskManagment, loading }) => ({ taskManagment, loading: loading.models.taskManagment }))(task)
