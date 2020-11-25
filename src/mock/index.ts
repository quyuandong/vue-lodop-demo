import Mock from 'mockjs'

import User from './user'

Mock.setup({
  timeout: '100-600'
})

// 用户信息
Mock.mock(/mockjs\/system\/login/, 'get', User.getLogin)
Mock.mock(/mockjs\/system\/v1\.0\/userinfo/, 'get', User.getUserInfo)
