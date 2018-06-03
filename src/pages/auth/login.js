import Form from '../../components/form';
import UserApi from './UserApi'
require('./login.sass');

export default {
  name      : 'app-login',
  data() {
    return {
      post: {},
      loading: false
    };
  },
  components: {Form},
  methods   : {
    login() {
      this.loading = true
      UserApi.login(this.post).then(re => this.loading = false).then(re => this.$router.push('/')).catch(err => {
        this.loading = false
        this.$message({
          type: 'error',
          message: err.response.data.message
        })
      })
    },
    renderForm(h) {
      return h(Form, {
        props: {
          fields: [
            {
              label: 'Email',
              id   : 'email',
              type : 'input'
            },
            {
              label: 'Password',
              id   : 'password',
              type : 'input.password'
            },
          ],
          value : this.post
        }
      });
    }
  },
  render(h) {
    let login = h('el-button', {
      props: {
        type: 'primary',
        loading: this.loading
      },
      on: {
        click: this.login
      },
      class: 'login-btn'
    }, '登陆');

    let f = this.renderForm(h);

    let title = h('h4', {
      class: 'login-title'
    }, '登陆');
    let box = h('el-col', {
      props: {
        md: {
          offset: 9,
          span  : 6
        }
      },
      class: 'login-box'
    }, [title, f, login]);

    return h('el-container', {
      class: 'app-login',
    }, [h('el-row', {
      style: {
        width: '100%',
      }
    }, [box])]);
  }
};
