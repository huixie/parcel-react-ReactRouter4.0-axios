export default [{
    path: '/navigation',
    exact:true,
    component: import ('../pages/navigation')
  },
  {
    path: '/tmall20180618',
    exact:true,
    component: import ('../pages/tmall-20180618')
  },
  {
    path: '*',
    component: import ('../pages/notFound')
  },
]