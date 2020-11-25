// 常用基本接口

import { _axios as http } from '@/plugins/axios'
let systemServerName = ''

// 获取登陆用户信息
export function login() {
  return http.get(`${systemServerName}system/login`)
}

// 更改用户管理机构
export function changeManageOrg(orgCode) {
  return http.get(`${systemServerName}system/v1.0/${orgCode}/userinfo`)
}

// 获取用户管理机构
export function getManageOrg() {
  return http.get(`${systemServerName}system/v1.0/userinfo`)
}

// 注销
export function logout() {
  return http.get('home/logout')
}

//获取数据字典
export function getWholeTree() {
  return http.get(`${systemServerName}system/category/v1.0/wholetreeNew`)
}

//根据数据字典code获取数据字典
export function getCategoryByCode(categoryCode) {
  return http.get(`${systemServerName}system/category/detail/v1.0/details/bycode/${categoryCode}`)
}

//获取当前人员有权限的菜单
export function getUserAuthMenus() {
  return http.get(`${systemServerName}system/v1.0/userinfo/permission`)
}

//上传附件
export function uploadFile(files: any[], onProcess: (progressEvent: any) => void) {
  let form = new FormData()
  files.forEach(function(file) {
    form.append('file', file, file.name)
  })

  return http.post(`${systemServerName}/file/info/v1.0`, form, {
    onUploadProgress: onProcess,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
