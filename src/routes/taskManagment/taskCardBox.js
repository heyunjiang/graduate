import React, { PropTypes } from 'react'
import { Row, Col, Card, Menu, Dropdown, Icon, Checkbox } from 'antd'
import styles from './taskCardBox.less'

const taskCardBox = ({
  
}) => {
  const menu = (
    <Menu>
      <Menu.Item>归档</Menu.Item>
      <Menu.Item>删除</Menu.Item>
    </Menu>
  );
  const drop = (
    <Dropdown overlay={menu}>
      <a className="ant-dropdown-link" href="#">
        <Icon type="down" />
      </a>
    </Dropdown>
  );
  return (
    <Row gutter={24}>
      <Col lg={8} md={12} sm={16} xs={24} style={{ marginBottom: 16 }}>
        <Card title="待开发" extra={drop} className={styles.taskCardBox} style={{ width: 300 }}>
          <Card className={styles.marginBottom+" "+styles.taskCard}>
            <div><Checkbox></Checkbox>&nbsp;&nbsp;周一开始原型设计周一开始原型设计周一开始原型设计周一开始原型设计</div>
            <p><img alt="heyunjiang" src="https://avatars1.githubusercontent.com/u/15085454?v=3&s=460" /></p>
          </Card>
          <Card className={styles.taskCard}>
            <div><Checkbox></Checkbox>&nbsp;&nbsp;今天之内整理出项目需求</div>
            <p>
              <img alt="heyunjiang" src="https://avatars1.githubusercontent.com/u/15085454?v=3&s=460" />
              <img alt="heyunjiang" src="https://avatars0.githubusercontent.com/u/35128?v=3&s=460" />
            </p>
          </Card>
          <div><Icon type="plus-circle" />&nbsp;新建任务</div>
        </Card>
      </Col>
      <Col lg={8} md={12} sm={16} xs={24} style={{ marginBottom: 16 }}>
        <Card title="开发中" extra={drop} className={styles.taskCardBox} style={{ width: 300 }}>
          <Card className={styles.marginBottom+" "+styles.taskCard}>
            <div><Checkbox></Checkbox>&nbsp;&nbsp;周一开始原型设计周一开始原型设计周一开始原型设计周一开始原型设计</div>
            <p><img alt="heyunjiang" src="https://avatars1.githubusercontent.com/u/15085454?v=3&s=460" /></p>
          </Card>
          <div><Icon type="plus-circle" />&nbsp;新建任务</div>
        </Card>
      </Col>
      <Col lg={8} md={12} sm={16} xs={24} style={{ marginBottom: 16 }}>
        <Card title="待测试" extra={drop} className={styles.taskCardBox} style={{ width: 300 }}>
          <Card className={styles.marginBottom+" "+styles.taskCard}>
            <div><Checkbox></Checkbox>&nbsp;&nbsp;周一开始原型设计周一开始原型设计周一开始原型设计周一开始原型设计</div>
            <p><img alt="heyunjiang" src="https://avatars1.githubusercontent.com/u/15085454?v=3&s=460" /></p>
          </Card>
          <Card className={styles.taskCard}>
            <div><Checkbox></Checkbox>&nbsp;&nbsp;今天之内整理出项目需求</div>
            <p>
              <img alt="heyunjiang" src="https://avatars1.githubusercontent.com/u/15085454?v=3&s=460" />
              <img alt="heyunjiang" src="https://avatars0.githubusercontent.com/u/35128?v=3&s=460" />
            </p>
          </Card>
          <div><Icon type="plus-circle" />&nbsp;新建任务</div>
        </Card>
      </Col>
      <Col lg={8} md={12} sm={16} xs={24} style={{ marginBottom: 16 }}>
        <Card title="待发布" extra={drop} className={styles.taskCardBox} style={{ width: 300 }}>
          <Card className={styles.taskCard}>
            <div><Checkbox></Checkbox>&nbsp;&nbsp;今天之内整理出项目需求</div>
            <p>
              <img alt="heyunjiang" src="https://avatars1.githubusercontent.com/u/15085454?v=3&s=460" />
              <img alt="heyunjiang" src="https://avatars0.githubusercontent.com/u/35128?v=3&s=460" />
            </p>
          </Card>
          <div><Icon type="plus-circle" />&nbsp;新建任务</div>
        </Card>
      </Col>
      <Col lg={8} md={12} sm={16} xs={24} style={{ marginBottom: 16 }}>
        <Card title="bug" extra={drop} className={styles.taskCardBox} style={{ width: 300 }}>
          <Card className={styles.marginBottom+" "+styles.taskCard}>
            <div><Checkbox></Checkbox>&nbsp;&nbsp;周一开始原型设计周一开始原型设计周一开始原型设计周一开始原型设计</div>
            <p><img alt="heyunjiang" src="https://avatars1.githubusercontent.com/u/15085454?v=3&s=460" /></p>
          </Card>
          <Card className={styles.taskCard}>
            <div><Checkbox></Checkbox>&nbsp;&nbsp;今天之内整理出项目需求</div>
            <p>
              <img alt="heyunjiang" src="https://avatars1.githubusercontent.com/u/15085454?v=3&s=460" />
              <img alt="heyunjiang" src="https://avatars0.githubusercontent.com/u/35128?v=3&s=460" />
            </p>
          </Card>
          <div><Icon type="plus-circle" />&nbsp;新建任务</div>
        </Card>
      </Col>
    </Row>
  )
}

taskCardBox.propTypes = {
  
}

export default taskCardBox
