import apiData from './data'

let System = {
  getMenus: options => {
    let response = {
      data: apiData.menus,
      msg: '',
      success: true,
      status: 200
    }
    return response
  },
  getOrg: options => {
    let response = {
      data: apiData.orgTree,
      msg: '',
      success: true,
      status: 200
    }
    return response
  },
  getNextOrg: options => {
    let response = {
      data: apiData.orgNextTree,
      msg: '',
      success: true,
      status: 200
    }
    return response
  },
  getOrgTable: options => {
    let response = {
      data: apiData.orgTable,
      msg: '',
      success: true,
      status: 200
    }
    return response
  },
  getAuth: options => {
    let response = {
      data: apiData.auth,
      msg: '',
      success: true,
      status: 200
    }
    return response
  },
  getCategory: options => {
    let response = {
      data: apiData.treeDategory,
      msg: '',
      success: true,
      status: 200
    }
    return response
  },
  getLog: options => {
    let response = {
      data: apiData.log,
      msg: '',
      success: true,
      status: 200
    }
    return response
  },
  getAllProcess: options => {
    let response = {
      data: apiData.allProcess,
      msg: '',
      success: true,
      status: 200
    }
    return response
  },
  getProcessData: options => {
    let response = {
      data: apiData.processData,
      msg: '',
      success: true,
      status: 200
    }
    return response
  },
  getBeginner: options => {
    let response = {
      data: [],
      msg: '',
      success: true,
      status: 200
    }
    return response
  },
  getSUB_ADD: options => {
    let response = {
      data: apiData.subAdd,
      msg: '',
      success: true,
      status: 200
    }
    return response
  },
  getRootHr: options => {
    let response = {
      data: apiData.rootHr,
      msg: '',
      success: true,
      status: 200
    }
    return response
  },
  getNextOrg1: options => {
    let response = {
      data: apiData.nextOrg1,
      msg: '',
      success: true,
      status: 200
    }
    return response
  },
  getNextOrg2: options => {
    let response = {
      data: apiData.nextOrg2,
      msg: '',
      success: true,
      status: 200
    }
    return response
  },
  getNextOrg3: options => {
    let response = {
      data: apiData.nextOrg3,
      msg: '',
      success: true,
      status: 200
    }
    return response
  },
  getNextOrg4: options => {
    let response = {
      data: apiData.nextOrg4,
      msg: '',
      success: true,
      status: 200
    }
    return response
  },
  getProcess: options => {
    let response = {
      data: apiData.process,
      msg: '',
      success: true,
      status: 200
    }
    return response
  },
  getAuthCode: options => {
    let response = {
      data: apiData.authCode,
      msg: '',
      success: true,
      status: 200
    }
    return response
  }
}
export default System
