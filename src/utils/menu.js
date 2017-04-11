//最高权限管理员
module.exports = [
  /*{
    key: 'dashboard',
    name: 'Dashboard',
    icon: 'laptop',
  },
  {
    key: 'request',
    name: 'Request',
    icon: 'api',
  },*/
  {
    key: 'programeManagment',
    name: '项目管理',
    icon: 'appstore',
    clickable: false,
    child: [
      {
        key: 'programeList',
        name: '项目列表',
        icon: 'bars',
      },
      {
        key: 'programeAdd',
        name: '新建项目',
        icon: 'plus-circle-o',
      },
      {
        key: 'myProgrameList',
        name: '我的项目',
        icon: 'info',
      },
    ],
  },
  {
    key: 'users',
    name: '人员管理',
    icon: 'user',
  },
  {
    key: 'taskManagment',
    name: '任务管理',
    icon: 'global',
  },
  {
    key: 'docManagment',
    name: '文档管理',
    icon: 'folder',
  },
  {
    key: 'pmsManagment',
    name: '经费管理',
    icon: 'pay-circle-o',
  },
  /*{
    key: 'UIElement',
    name: 'UI Element',
    icon: 'camera-o',
    clickable: false,
    child: [
      {
        key: 'iconfont',
        name: 'IconFont',
        icon: 'heart-o',
      },
      {
        key: 'dataTable',
        name: 'DataTable',
        icon: 'database',
      },
      {
        key: 'dropOption',
        name: 'DropOption',
        icon: 'bars',
      },
      {
        key: 'search',
        name: 'Search',
        icon: 'search',
      },
      {
        key: 'editor',
        name: 'Editor',
        icon: 'edit',
      },
      {
        key: 'layer',
        name: 'layer (Function)',
        icon: 'credit-card',
      },
    ],
  },
  {
    key: 'chart',
    name: 'Recharts',
    icon: 'code-o',
    child: [
      {
        key: 'lineChart',
        name: 'LineChart',
        icon: 'line-chart',
      },
      {
        key: 'barChart',
        name: 'BarChart',
        icon: 'bar-chart',
      },
      {
        key: 'areaChart',
        name: 'AreaChart',
        icon: 'area-chart',
      },
    ],
  },
  {
    key: 'navigation',
    name: 'Test Navigation',
    icon: 'setting',
    child: [
      {
        key: 'navigation1',
        name: 'Test Navigation1',
      },
      {
        key: 'navigation2',
        name: 'Test Navigation2',
        child: [
          {
            key: 'navigation21',
            name: 'Test Navigation21',
          },
          {
            key: 'navigation22',
            name: 'Test Navigation22',
          },
        ],
      },
    ],
  },*/
]
