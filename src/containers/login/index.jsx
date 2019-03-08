import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getLogin} from "../../services/example"
import styles from './login.css';
let mapState=store=>{
  return {...store.login}
}
class LoginPage extends Component {
  constructor(props){
    super(props)
    this.state={
      username:'',
      password:''
    }
  }
  componentDidMount(){
    
  }
  fromlogin(){
    if(this.state.username===''&&this.state.password==='') return;
    getLogin({
        user_name:this.state.username,
        user_pwd:this.state.password
      }).then(res=>{
        console.log(res)
      })
  }
  usernameChange(e){
    this.setState({
      username:e.target.value
    })
  }
  pwdChange(e){
    this.setState({
      password:e.target.value
    })
  }
  render() {
    return (
      <div className={styles.loginbox}>
        <div className={styles.right}>
            <div>
              <label>登录</label>
              <div>
                <input type="text" placeholder="用户名" onChange={this.usernameChange.bind(this)} defaultValue={this.username}/>
              </div>
              <div>
                <input type="password" placeholder="密码" onChange={this.pwdChange.bind(this)} defaultValue={this.password}/>
              </div>
              <div className={styles.fromlogin}>
                <button onClick={this.fromlogin.bind(this)}>登录</button>
              </div>   
            </div>
        </div>
    </div>
    );
  }
}

export default connect(mapState)(LoginPage);