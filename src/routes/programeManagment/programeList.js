import React, { PropTypes } from 'react'
import { Table, Modal } from 'antd'
// import styles from './UserList.less'
import classnames from 'classnames'
import AnimTableBody from '../../components/DataTable/AnimTableBody'
import { DropOption } from '../../components'


const confirm = Modal.confirm

function list ({ loading, dataSource, pagination, onPageChange, onDeleteItem, onEditItem, isMotion, location }) {
  //编辑、删除处理函数
  const handleMenuClick = (record, e) => {
    if (e.key === '1') {
      onEditItem(record)
    } else if (e.key === '2') {
      confirm({
        title: '您确定要删除这个项目吗?',
        onOk () {
          onDeleteItem(record.id)
        },
      })
    }
  }

  const columns = [
    {
      title: '编号',
      dataIndex: 'id',
      key: 'id',
      width: 64,
      fixed: 'left',
    }, {
      title: '名称',
      dataIndex: 'name',
      width: 100,
      fixed: 'left',
      key: 'name',
    }, {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
    }, {
      title: '描述',
      dataIndex: 'des',
      key: 'des',
    }, {
      title: '创建者',
      dataIndex: 'creator',
      key: 'creator'
    }, {
      title: '预期成果',
      dataIndex: 'expectValue',
      key: 'expectValue'
    }, {
      title: '预计开始时间',
      dataIndex: 'expectStartTime',
      key: 'expectStartTime',
    }, {
      title: '预计结束时间',
      dataIndex: 'expectEndTime',
      key: 'expectEndTime',
    }, {
      title: '进展状态',
      dataIndex: 'status',
      key: 'status',
    }, {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
    },  {
      title: '成员',
      dataIndex: 'member',
      key: 'member',
    }, {
      title: '操作',
      key: 'operation',
      width: 100,
      fixed: 'right',
      render: (text, record) => {
        return <DropOption onMenuClick={e => handleMenuClick(record, e)} menuOptions={[{ key: '1', name: '编辑' }, { key: '2', name: '删除' }]} />
      },
    },
  ]

  const getBodyWrapperProps = {
    page: location.query.page,
    current: pagination.current,
  }

  const getBodyWrapper = body => { return isMotion ? <AnimTableBody {...getBodyWrapperProps} body={body} /> : body }

  return (
    <div>
      <Table
        bordered
        scroll={{ x: 1200 }}
        columns={columns}
        dataSource={dataSource}
        loading={loading}
        onChange={onPageChange}
        pagination={pagination}
        simple
        rowKey={record => record.id}
        getBodyWrapper={getBodyWrapper}
      />
    </div>
  )
}

list.propTypes = {
  loading: PropTypes.bool,
  dataSource: PropTypes.array,
  pagination: PropTypes.object,
  onPageChange: PropTypes.func,
  onDeleteItem: PropTypes.func,
  onEditItem: PropTypes.func,
  isMotion: PropTypes.bool,
  location: PropTypes.object,
}

export default list
