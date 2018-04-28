import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

class Toast extends React.Component {
  success(message) {
    toast.success(message)
  }
  info(message) {
    toast.info(message)
  }
  error(message) {
    toast.error(message)
  }

  render() {
    return(
      <ToastContainer
        position="bottom-center"
        autoClose={ 3000 }
        hideProgressBar={ true }
        closeOnClick
        pauseOnHover
      />
    )
  }
}

export default Toast
