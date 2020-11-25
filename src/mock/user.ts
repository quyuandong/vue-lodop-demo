import Mock from 'mockjs'
import apiData from './data'

let User = {
  getTreeLevel0: options => {
    // console.log(options)
    // let params = options
    let orgCode = options.url.match(/mockjs\/sys\/org\/v1\.0\/(\d+)\/next\/all/)[1]
    // let parmas = parseUrl(options.url)
    // console.log(orgCode)
    let data = null
    switch (orgCode) {
      case '00001':
        data = Mock.mock({
          id: 1,
          sequence_number: 1,
          danweicengji: '100101',
          jiancheng: '中国铁建',
          leixing: 'danwei',
          leixingmingcheng: '单位',
          paixuma: 1,
          quancheng: '中国铁建',
          shangjizhujian: '1',
          xunizuzhi: false,
          zhujian: '986436',
          zuzhibianma: '00001',
          zuzhilujing: '中国铁建股份总公司'
        })
        break
      case '0000100001':
        data = Mock.mock([
          {
            danweicengji: "@order('100101','100102','100102','100102','100102','100102')",
            jiancheng: "@order('中土集团','十一局','十八局','十九局','网信科技')",
            leixing: "@order('danwei','danwei','danwei','danwei','danwei','danwei')",
            leixingmingcheng: "@order('单位','单位','单位','单位','单位','单位')",
            paixuma: '@order(1,3,5,19,21,91)',
            quancheng:
              "@order('中国土木工程集团有限公司','中铁十一局集团有限公司','中铁十八局集团有限公司','中铁十九局集团有限公司','中铁建网络信息科技有限公司')",
            sequence_number: '',
            shangjizhujian: "@order('1','1','1','1','1','1')",
            xunizuzhi: '@order(false,false,false,false,false,false)',
            zhujian: "@order('986436','1117553','1118193','1118184','1041228','1178609')",
            zuzhibianma: "@order('0000100001','0000100010','0000100011','0000100018','0000100019','0000100054')",
            zuzhilujing: "@order('中国铁建中土集团','中国铁建十一局','中国铁建十八局','中国铁建十九局','中国铁建网信科技')"
          }
        ])
        break
    }

    let response = {
      data: data,
      msg: '',
      success: true
    }
    return response
  },
  getPageAuthorizeList: () => {
    let data = Mock.mock({
      asc: true,
      condition: 1,
      current: 1,
      limit: 2147483647,
      offset: 0,
      offsetCurrent: 0,
      openSort: true,
      orderByField: 1,
      pages: 1,
      records: [
        {
          createPerson: 1,
          createTime: 1,
          enabled: 1,
          id: '1231231231321321321',
          orgCode: 1,
          orgName: 1,
          orgShortname: 1,
          personId: '123456',
          personIdentity: 1,
          personName: '王浩',
          postFullname: 1,
          postId: 1,
          postName: '研发部长',
          updatePerson: 1,
          updateTime: 1,
          version: 1
        }
      ],
      searchCount: true,
      size: 20,
      total: 1
    })
    let response = {
      data: data,
      msg: '',
      success: true
    }
    return response
  },
  getPermissionList: () => {
    let data = Mock.mock([
      {
        permissionCode: '1212',
        permissionID: '123',
        permissionName: '管理'
      },
      {
        permissionCode: '1213',
        permissionID: '124',
        permissionName: '编辑'
      }
    ])

    let response = {
      data: data,
      msg: '',
      success: true
    }
    return response
  },

  getWholeTree: () => {
    let response = apiData.category
    return response
  },
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
