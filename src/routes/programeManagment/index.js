import React, { PropTypes } from 'react'
import { routerRedux } from 'dva/router'
import { connect } from 'dva'
import ProgrameList from './programeList'
import ProgrameHeader from './programeHeader'
import ProgrameModal from './programeModal'

function programe ({ location, dispatch, programeManagment, loading }) {
 	const { list, pagination, currentItem, newModalVisible, modalType, isMotion } = programeManagment;
	const programeListProps = {
		dataSource: list,
		loading,
		pagination: pagination,
		location,
		isMotion: isMotion,
		onPageChange (page) {

		},
		onDeleteItem (id) {
			dispatch({
		        type: `programeManagment/delete`,
		        payload: id,
		    })
		},
		onEditItem (item) {
			dispatch({
		        type: 'programeManagment/showModal',
		        payload: {
		          currentItem: item,
		        },
		    })
		},
	}
	const programeHeaderProps = {
		onAdd(){
			dispatch({
		        type: `programeManagment/showModal`,
		    })
		}
	}
	const programeModalProps = {
		currentItem,
		visible: newModalVisible,
		onOk(data){
			dispatch({
		        type: `programeManagment/create`,
		        payload: data,
		    })
		},
		onCancel(){
			dispatch({
		        type: `programeManagment/hideModal`,
		    })
		},
	}

  return (
    <div className="content-inner">
      <ProgrameModal {...programeModalProps} />
      <ProgrameHeader {...programeHeaderProps} />
      <ProgrameList {...programeListProps} />
    </div>
  )
}

programe.propTypes = {
  programeManagment: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.bool,
}

export default connect(({ programeManagment, loading }) => ({ programeManagment, loading: loading.models.programeManagment }))(programe)
