import React, { PropTypes } from 'react'
import { routerRedux } from 'dva/router'
import { connect } from 'dva'
import ProgrameList from './programeList'
import ProgrameHeader from './programeHeader'

function programe ({ location, dispatch, programeManagment, loading }) {
 	const { list, pagination, currentItem, modalVisible, modalType, isMotion } = programeManagment;
	const programeListProps = {
		dataSource: list,
		loading,
		pagination: pagination,
		location,
		isMotion: isMotion,
		onPageChange (page) {

		},
		onDeleteItem (id) {

		},
		onEditItem (item) {

		},
	}
	const programeHeaderProps = {
		onAdd(){
			
		}
	}

  return (
    <div className="content-inner">
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
