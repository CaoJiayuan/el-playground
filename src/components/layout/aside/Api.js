const navs = [
  {
    path: '/',
    display_name: '首页',
    icon: 'el-icon-menu',
  },
  {
    path: '/accounts',
    display_name: '用户',
    icon: 'el-icon-star-on',
  },
]
const Api = {
  loadNav(){
    return Promise.resolve(navs)
  }
};



export default Api;
