import React from 'react'
import Header from './Header'
import NewUser from './NewUser'
import Toast from './Toast'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <NewUser error={ message => this.refs.toast.error(message) }/>
        <Toast ref="toast"/>
      </div>
    )
  }
}


export default App
