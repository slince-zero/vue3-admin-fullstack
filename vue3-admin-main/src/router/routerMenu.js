export const routerMenu = [
  {
    path: '/home',
    name: 'home',
    icon: 'HomeFilled',
    component: () => import('../views/home/home.vue'),
    meta: {
      title: '首页',
      closable: false,
    },
  },
  {
    path: '/other',
    name: 'other',
    icon: 'ToiletPaper',
    meta: {
      title: '其他',
    },
    children: [
      {
        path: '/test1',
        name: 'test1',
        icon: 'Watch',
        component: () => import('../views/other/test1.vue'),
        meta: {
          title: 'test1',
          closable: true,
        },
      },
      {
        path: '/test2',
        name: 'test2',
        icon: 'QuartzWatch',
        component: () => import('../views/other/test2.vue'),
        meta: {
          title: 'test2',
          closable: true,
        },
      },
    ],
  },
  {
    path: '/tables',
    name: 'tables',
    icon: 'Dish',
    meta: {
      title: '表格相关',
    },
    children: [
      {
        path: '/table',
        name: 'table',
        icon: 'IceTea',
        meta: {
          title: '常用表格',
          closable: true,
        },
        component: () => import('../views/table/commonTable.vue'),
      },
      {
        path: '/importTable',
        name: 'importTable',
        icon: 'ColdDrink',
        meta: {
          title: '导入表格',
          closable: true,
        },
        component: () => import('../views/table/importExcel.vue'),
      },
      {
        path: '/exportTable',
        name: 'exportTable',
        icon: 'IceCream',
        meta: {
          title: '导出表格',
          closable: true,
        },
        component: () => import('../views/table/exportExcel.vue'),
      },
    ],
  },
  {
    path: '/forms',
    name: 'form',
    icon: 'Pear',
    meta: {
      title: '表单相关',
    },
    children: [
      {
        path: '/form',
        name: 'form',
        icon: 'Dessert',
        meta: {
          title: '常用表单',
          closable: true,
        },
        component: () => import('../views/form/basicForm.vue'),
      },
      {
        path: '/upload',
        name: 'upload',
        icon: 'Orange',
        meta: {
          title: '上传',
          closable: true,
        },
        component: () => import('../views/form/upload.vue'),
      },
      {
        path: '/multi-level menu',
        name: 'menu',
        icon: 'Cherry',
        meta: {
          title: '多级菜单',
        },
        children: [
          {
            path: '/menu1',
            name: 'menu1',
            icon: 'Apple',
            meta: {
              title: 'menu1',
              closable: true,
            },
            children: [
              {
                path: '/menu1-1',
                name: 'menu1-1',
                icon: 'Food',
                meta: {
                  title: 'menu1-1',
                  closable: true,
                },
                component: () => import('../views/form/menu1-1.vue'),
              },
            ],
          },
          {
            path: '/menu2',
            name: 'menu2',
            icon: 'Dessert',
            meta: {
              title: 'menu2',
              closable: true,
            },
            component: () => import('../views/form/menu2.vue'),
          },
        ],
      },
    ],
  },
  {
    path: '/chart',
    name: 'chart',
    icon: 'Monitor',
    meta: {
      title: '图表相关',
    },
    children: [
      {
        path: '/barChart',
        name: 'barChart',
        icon: 'Fries',
        meta: {
          title: '条形图',
          closable: true,
        },
        component: () => import('../views/chart/barChart.vue'),
      },
      {
        path: '/lineChart',
        name: 'lineChart',
        icon: 'TrendCharts',
        meta: {
          title: '折线图',
          closable: true,
        },
        component: () => import('../views/chart/lineChart.vue'),
      },
      {
        path: '/pipeChart',
        name: 'pipeChart',
        icon: 'PieChart',
        meta: {
          title: '饼状图',
          closable: true,
        },
        component: () => import('../views/chart/pipeChart.vue'),
      },
    ],
  },
  {
    path: '/editor',
    name: 'editor',
    icon: 'List',
    meta: {
      title: '编辑器',
    },
    children: [
      {
        path: '/md-editor',
        name: 'md-editor',
        icon: 'DataLine',
        meta: {
          title: 'md-editor',
          closable: true,
        },
        component: () => import('../views/editor/md-editor.vue'),
      },
    ],
  },
]
