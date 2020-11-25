import Mock from 'mockjs'

import User from './user'
import System from './system'

Mock.setup({
  timeout: '100-600'
})

// 用户信息
//获取数据字典
Mock.mock(/mockjs\/system\/category\/v1\.0\/wholetree/, 'get', User.getWholeTree)
//获取userInfo
Mock.mock(/mockjs\/system\/login/, 'get', User.getLogin)
Mock.mock(/mockjs\/system\/v1\.0\/userinfo/, 'get', User.getUserInfo)
Mock.mock(/mockjs\/system\/v1\.0\/0000100011000017700199001\/userinfo/, 'get', User.getUserInfo)

// ============   系统管理   =======================
// 菜单管理
Mock.mock(/mockjs\/system\/menu\/v1\.0\/tree\/menus/, 'get', System.getMenus)
Mock.mock(/mockjs\/system\/szyd\/org\/v1\.0\/page/, 'get', System.getMenus)

//组织树管理
Mock.mock(/mockjs\/system\/forcast\/org\/v1\.0\/root\?menuCode=/, 'get', System.getOrg)
Mock.mock(/mockjs\/system\/forcast\/org\/v1\.0\/next\/all\?id=a7d7f9e9549911eaa97529aedb620f0b&menuCode=/, 'get', System.getNextOrg)
Mock.mock(/mockjs\/system\/forcast\/org\/v1\.0\/next\/all\/use\?id=a7d7f9e9549911eaa97529aedb620f0b&menuCode=/, 'get', System.getNextOrg)

Mock.mock(/mockjs\/system\/forcast\/org\/v1\.0\/next\/all\/use\?menuCode=0604&id=2760421b5e9111eaa276c1e783879bed/, 'get', System.getNextOrg)
Mock.mock(/mockjs\/system\/forcast\/org\/v1\.0\/next\/all\/use\?menuCode=0608&id=2760421b5e9111eaa276c1e783879bed/, 'get', System.getNextOrg)
Mock.mock(/mockjs\/system\/forcast\/org\/v1\.0\/next\/all\?menuCode=&id=2760421b5e9111eaa276c1e783879bed/, 'get', System.getNextOrg)
Mock.mock(/mockjs\/system\/hr\/v1\.0\/1\/1\/HROrgs/, 'get', System.getRootHr)

Mock.mock(/mockjs\/system\/forcast\/org\/v1\.0\/page/, 'post', System.getOrgTable)

// 权限管理
Mock.mock(/mockjs\/system\/hr\/v1\.0\/org\?orgid=142687&providerId=hr11/, 'get', System.getNextOrg1)
Mock.mock(/mockjs\/system\/hr\/v1\.0\/org\?orgid=142697&providerId=hr11/, 'get', System.getNextOrg2)
Mock.mock(/mockjs\/system\/hr\/v1\.0\/users\?providerId=hr11&positionId=142698/, 'get', System.getNextOrg3)
Mock.mock(/mockjs\/system\/hr\/v1\.0\/users\?providerId=hr11&positionId=236940/, 'get', System.getNextOrg4)

//组织树管理
Mock.mock(/mockjs\/system\/auth\/v1\.0\/users\/info/, 'post', System.getAuth)
Mock.mock(/mockjs\/system\/auth\/v1\.0\/91a2509784fc11ea967ded28830a39cb\/permission/, 'get', System.getProcess)
Mock.mock(/mockjs\/system\/category\/detail\/v1\.0\/details\/bycode\/authCode/, 'get', System.getAuthCode)
//system/category/detail/v1.0/details/bycode/authCode
Mock.mock(/mockjs\/system\/category\/v1\.0\/tree/, 'get', User.getWholeTree)
Mock.mock(/mockjs\/system\/log\/v1\.0/, 'post', System.getLog)
Mock.mock(/mockjs\/wfmanage\/v1\.0\/workflow\/0000100002\/all/, 'get', System.getAllProcess)
Mock.mock(/mockjs\/wfmanage\/v1\.0\/processDef\/RISK_GRADE\/0000100002/, 'get', System.getProcessData)
Mock.mock(/mockjs\/wfmanage\/v1\.0\/beginner/, 'post', System.getBeginner)
Mock.mock(/mockjs\/wfmanage\/v1\.0\/wfmapping\/SUB_ADD\/000010000200002/, 'get', System.getSUB_ADD)

// 菜单管理
// http://192.168.1.14:8200/mockjs/wfmanage/v1.0/processDef/RISK_GRADE/0000100002
