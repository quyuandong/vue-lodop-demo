import apiData from './data'

let User = {
  getLogin: () => {
    console.log('apiData.login: ', apiData.login)
    let response = apiData.login
    return response
  },
  getUserInfo: () => {
    let response = apiData.userInfo
    return response
  }
}
export default User
