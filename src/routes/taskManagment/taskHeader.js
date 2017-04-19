import React, { PropTypes } from 'react'
import { Form, Button, Row, Col, Switch, Select } from 'antd'
import styles from './taskHeader.less'
const Option = Select.Option;

const taskHeader = ({
  onAdd,handleChange,programeData
}) => {
  const programeOptions = programeData.map(obj=><Option key={obj.id}>{obj.name}</Option>);
  return (
    <Row gutter={24} className={styles.taskHeaderRow}>
      <Col lg={8} md={12} sm={16} xs={24} style={{ marginBottom: 16 }}>
        项目切换&nbsp;&nbsp;&nbsp;
        <Select defaultValue="1" style={{ width: 120 }} onChange={handleChange}>
          {programeOptions}
        </Select>
      </Col>
      <Col lg={{ offset: 8, span: 8 }} md={12} sm={8} xs={24} style={{ marginBottom: 16, textAlign: 'right' }}>
        <Button size="large" type="primary" onClick={onAdd}>新建任务</Button>
      </Col>
    </Row>
  )
}

taskHeader.propTypes = {
  onAdd: PropTypes.func,
  handleChange: PropTypes.func,
  programeData: PropTypes.array,
}

export default taskHeader
