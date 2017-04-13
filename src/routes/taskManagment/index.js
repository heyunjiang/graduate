//任务管理

import React, { PropTypes } from 'react'
import { routerRedux } from 'dva/router'
import { connect } from 'dva'

function task ({ location, dispatch, taskManagment, loading }) {
 	const { list, pagination, currentItem, modalVisible, modalType, isMotion } = taskManagment;
	

  return (
    <div className="content-inner">
    	hello world
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
