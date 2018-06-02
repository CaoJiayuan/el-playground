import Form from '../../components/form';

require('./login.sass');
export default {
  name      : 'app-login',
  data() {
    return {
      post: {}
    };
  },
  components: {Form},
  methods   : {
    login() {
      console.log(this.post);
      this.$router.push('/')
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
        type: 'primary'
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
      class: 'app-login'
    }, [h('el-row', {
      style: {
        width: '100%',
      }
    }, [box])]);
  }
};
