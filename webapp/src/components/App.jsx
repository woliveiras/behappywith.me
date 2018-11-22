import React from 'react'
import Header from './Header'
import NewUser from './NewUser'
import Toast from './Toast'
import User from '../models/User'

class App extends React.Component {
  constructor() {
    super()
    User.get(user => {
      this.state = {
        user: user
      }
    }, () => {
      this.state = {
        user: undefined
      }
    })
  }

  newUserMessage(user) {
    let gender = user.gender == 'm' ? 'o' : 'a';
    this.refs.toast.success(
        `Seja bem-vind${gender} ${user.name}!`
    )
  }

  renderNewUser() {
    let user = this.state.user;        
    if (user) {
        return (
            <div style={{marginTop: '140px', textAlign: 'center'}}>
                <b>Usuário obtido do <i>localStorage</i></b><br />
                {user.toString()}
            </div>
        )
    } else {
        return (
            <NewUser
                onSubmit={user => {                        
                    user.save(() => {
                        this.setState({
                            user: user
                        }, () => {
                            this.newUserMessage(user)
                        })                            
                    });
                }}
                error={message => this.refs.toast.error(message)}
            />
        )
    }      
  }

  render() {
    return (
        <div>
            <Header />
            {this.renderNewUser()}
            <Toast ref="toast" />
        </div>
    );
  }
}


export default App
