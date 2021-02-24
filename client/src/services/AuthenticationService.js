import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}

//AuthenticationService.register ({
//  email: 'testing@gmail.com'
//  password: '123456'
//})

//Implement a UI to be used by the Authentication Service
