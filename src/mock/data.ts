// import system from '@/router/children/system'

let json = {
  //用户信息
  userInfo: {
    success: true,
    code: 200,
    message: null,
    data: {
      currentPostCode: '0000100011000017700199001',
      currentPostName: '专利管理员',
      currentPostPath: '中铁十一局集团第一工程有限公司工程管理部专利管理员',
      menuPermission: [
        {
          parentCode: null,
          menuPath: '/system',
          children: [
            {
              parentCode: '06',
              menuPath: '/systemLog',
              children: null,
              menuTitle: '系统日志',
              menuCode: '0607',
              menuRouteName: 'systemLog',
              menuId: 'b3c13cbadd7e40a7b6baa1bb2f0493e4',
              actionCode: []
            },
            {
              parentCode: '06',
              menuPath: '/import',
              children: null,
              menuTitle: '数据导入',
              menuCode: '0609',
              menuRouteName: 'import',
              menuId: 'f9b7eeb7544b4654b93bd2c795e98bc9',
              actionCode: []
            },
            {
              parentCode: '06',
              menuPath: '/organizationManage',
              children: null,
              menuTitle: '组织管理',
              menuCode: '0606',
              menuRouteName: 'organizationManage',
              menuId: '66d4f28bb0da4382abe76d10242d640e',
              actionCode: [
                'system-organizationManage-addOrgList',
                'system-organizationManage-delOrgList',
                'system-organizationManage-putOrgList',
                'system-organizationManage-putOrgCodeRelation'
              ]
            },
            {
              parentCode: '06',
              menuPath: '/menus',
              children: null,
              menuTitle: '菜单管理',
              menuCode: '0602',
              menuRouteName: 'menus',
              menuId: 'ba234473a47f4a86aa3a0163b47966fc',
              actionCode: ['system-menu-delete', 'system-menu-edit']
            },
            {
              parentCode: '06',
              menuPath: '/auth',
              children: null,
              menuTitle: '权限管理',
              menuCode: '0604',
              menuRouteName: 'auth',
              menuId: '75f6cec45cd5495f9e248d41ec720de2',
              actionCode: [
                'system-auth-delOrgUserList',
                'system-auth-addOrgUserList',
                'system-auth-putUserPermission',
                'system-auth-getUserPermission'
              ]
            },
            {
              parentCode: '06',
              menuPath: '/process',
              children: null,
              menuTitle: '流程管理',
              menuCode: '0608',
              menuRouteName: 'process',
              menuId: 'e29bb7ddb1b243bc8f656722e9712629',
              actionCode: [
                'system-process-publishProcessOrgMap',
                'system-process-getMapSingleDetail',
                'system-process-addProcessBeginner',
                'system-process-deleteProcessBeginner',
                'system-process-addProcessOrgMap',
                'system-process-deleteMapSingle'
              ]
            },
            {
              parentCode: '06',
              menuPath: '/category',
              children: null,
              menuTitle: '数据字典',
              menuCode: '0603',
              menuRouteName: 'category',
              menuId: 'c50101ea1473439a857c520e2246e637',
              actionCode: ['system-category-edit', 'system-category-delete']
            }
          ],
          menuTitle: '系统管理',
          menuCode: '06',
          menuRouteName: 'system',
          menuId: '6bca53297ee54976bebcf66ffcff8ee2',
          actionCode: []
        }
      ],
      managerOrgList: [
        {
          catalogID: null,
          createdPerson: '张三',
          createdTime: '2020-02-21T19:02:31',
          defId: null,
          defName: null,
          defOrgCode: null,
          defOrgId: null,
          hr11Code: '{"id": 1,"orgcode": "11","orgname": "中铁十一局集团有限公司"}',
          hrCode: '[{"orgid":"1","providerId":"hr11"}]',
          id: 'a7d7f9e9549911eaa97529aedb620f0b',
          ifDeleted: null,
          ifUse: 1,
          name: null,
          orgCode: '0000100002',
          orgFullName: '中国铁建十一局集团1',
          orgLevel: 1,
          orgName: '十一局集团1',
          orgNode: null,
          orgType: null,
          parentId: '00001',
          projectManagerUnitCode: null,
          sortNo: '00002',
          treeSort: 2,
          updatedPerson: '张三',
          updatedTime: '2020-03-05T09:37:12',
          version: 1
        }
      ],
      hasPermissionPosts: [
        {
          type: 3,
          id: 142698,
          name: '专利管理员',
          code: '0000100011000017700199001',
          order: 1,
          mainPosition: true,
          zuzhibianma: '0000100011000017700199001',
          jiancheng: '专利管理员',
          zuzhilujing: '中铁十一局集团第一工程有限公司工程管理部专利管理员'
        },
        {
          type: 3,
          id: 251358,
          name: '部员',
          code: '0000100011010007702499001',
          order: 1,
          mainPosition: false,
          zuzhibianma: '0000100011010007702499001',
          jiancheng: '部员',
          zuzhilujing: '中铁十一局集团有限公司机关工程部部员'
        }
      ],
      actionMap: [
        {
          'riskModify-detail': '0000100002',
          'riskModify-add': '0000100002',
          'riskModify-delete': '0000100002'
        },
        {
          'riskNew-add': '0000100002',
          'riskNew-upload': '0000100002',
          'riskNew-delete': '0000100002',
          'riskNew-detail': '0000100002'
        },
        {
          'riskDelete-delete': '0000100002',
          'riskDelete-detail': '0000100002',
          'riskDelete-add': '0000100002'
        },
        {
          'system-organizationManage-addOrgList': '0000100002',
          'system-organizationManage-delOrgList': '0000100002',
          'system-organizationManage-putOrgList': '0000100002',
          'system-organizationManage-putOrgCodeRelation': '0000100002'
        },
        {
          'system-menu-delete': '0000100002',
          'system-menu-edit': '0000100002'
        },
        {
          'system-auth-delOrgUserList': '0000100002',
          'system-auth-addOrgUserList': '0000100002',
          'system-auth-putUserPermission': '0000100002',
          'system-auth-getUserPermission': '0000100002'
        },
        {
          'system-process-publishProcessOrgMap': '0000100002',
          'system-process-getMapSingleDetail': '0000100002',
          'system-process-addProcessBeginner': '0000100002',
          'system-process-deleteProcessBeginner': '0000100002',
          'system-process-addProcessOrgMap': '0000100002',
          'system-process-deleteMapSingle': '0000100002'
        },
        {
          'riskSupervision-add': '0000100002',
          'riskSupervision-delete': '0000100002'
        },
        {
          'system-category-edit': '0000100002',
          'system-category-delete': '0000100002'
        }
      ],
      project: false,
      id: '142723',
      username: '孙浩林',
      postCode: '0000100011000017700199001',
      postName: '专利管理员',
      postPath: '中铁十一局集团第一工程有限公司工程管理部专利管理员',
      posts: [
        {
          type: 3,
          id: 142698,
          name: '专利管理员',
          code: '0000100011000017700199001',
          order: 1,
          mainPosition: true,
          zuzhibianma: '0000100011000017700199001',
          jiancheng: '专利管理员',
          zuzhilujing: '中铁十一局集团第一工程有限公司工程管理部专利管理员'
        },
        {
          type: 3,
          id: 251358,
          name: '部员',
          code: '0000100011010007702499001',
          order: 1,
          mainPosition: false,
          zuzhibianma: '0000100011010007702499001',
          jiancheng: '部员',
          zuzhilujing: '中铁十一局集团有限公司机关工程部部员'
        }
      ],
      sub: 'hr11|142723',
      zhengzhimianmao: null,
      identity: null,
      currentOrgNode: null
    }
  },
  //登录信息
  login: {
    success: true,
    msg: '调用接口成功',
    data: {
      menuPermission: [
        {
          parentCode: null,
          menuPath: '/blackList',
          children: [
            {
              parentCode: '07',
              menuPath: 'blackSup',
              children: null,
              menuTitle: '拉黑供应商',
              menuCode: '0702',
              menuRouteName: 'blackSup',
              menuId: '8725ab8c143d48c893126deaf21d0732',
              actionCode: ['black-list-black-sup-edit']
            },
            {
              parentCode: '07',
              menuPath: 'blockList',
              children: null,
              menuTitle: '初评黑名单',
              menuCode: '0701',
              menuRouteName: 'blockList',
              menuId: 'c0a8ef2942c34a9a97e71ad2ed1c5af7',
              actionCode: ['black-list-block-list-edit', 'black-list-block-list', 'black-list-block-list-check']
            }
          ],
          menuTitle: '黑名单',
          menuCode: '07',
          menuRouteName: 'blackList',
          menuId: 'a55b820af5ed426aa8bb56636c297c9e',
          actionCode: []
        },
        {
          parentCode: null,
          menuPath: '/firstEvaluate',
          children: [
            {
              parentCode: '01',
              menuPath: 'apply',
              children: null,
              menuTitle: '供应商初评申请',
              menuCode: '0101',
              menuRouteName: 'apply',
              menuId: '801c4058604c415cbbe0da183c230c0b',
              actionCode: ['first-evaluate-apply-check', 'first-evaluate-apply-edit', 'first-evaluate-apply-delete', 'first-evaluate-apply-export']
            },
            {
              parentCode: '01',
              menuPath: 'approve',
              children: null,
              menuTitle: '供应商初评审核',
              menuCode: '0102',
              menuRouteName: 'approve',
              menuId: 'd5cb393619584810b34074d479e298d4',
              actionCode: ['first-evaluate-approve-check', 'first-evaluate-approve-edit', 'first-evaluate-approve-export']
            }
          ],
          menuTitle: '供应商初评',
          menuCode: '01',
          menuRouteName: 'firstEvaluate',
          menuId: 'c35d7aec0ac2480bb641d981ef3fa934',
          actionCode: []
        },
        {
          parentCode: null,
          menuPath: '/supplyList',
          children: [
            {
              parentCode: '03',
              menuPath: 'cooperationList',
              children: [
                {
                  parentCode: '0301',
                  menuPath: 'project',
                  children: null,
                  menuTitle: '本项目',
                  menuCode: '030103',
                  menuRouteName: 'project',
                  menuId: 'feaabdc9128d4223b345aa4d1c5d10c8',
                  actionCode: ['supply-list-check']
                },
                {
                  parentCode: '0301',
                  menuPath: 'company',
                  children: null,
                  menuTitle: '本公司',
                  menuCode: '030102',
                  menuRouteName: 'company',
                  menuId: '224c4ff1ccea47c0a6fd462c6d0c75f8',
                  actionCode: ['supply-list-check']
                },
                {
                  parentCode: '0301',
                  menuPath: 'group',
                  children: null,
                  menuTitle: '本集团',
                  menuCode: '030101',
                  menuRouteName: 'group',
                  menuId: '944eafa1540d4966ae649842e3ad0498',
                  actionCode: ['supply-list-check']
                }
              ],
              menuTitle: '合作供应商名录',
              menuCode: '0301',
              menuRouteName: 'cooperationList',
              menuId: '341b0914185f436b9c1ffd67b5a5860e',
              actionCode: []
            },
            {
              parentCode: '03',
              menuPath: 'nameList',
              children: [
                {
                  parentCode: '0303',
                  menuPath: 'all',
                  children: null,
                  menuTitle: '所有供应商名录',
                  menuCode: '030303',
                  menuRouteName: 'all',
                  menuId: '8cac997e60d545098f89a9187c23d104',
                  actionCode: ['supply-list-check']
                },
                {
                  parentCode: '0303',
                  menuPath: 'warningList',
                  children: null,
                  menuTitle: '警示供应商名录',
                  menuCode: '030302',
                  menuRouteName: 'warningList',
                  menuId: '3752ca2173a948ca88fcb9b939f5f432',
                  actionCode: ['supply-list-check']
                },
                {
                  parentCode: '0303',
                  menuPath: 'qulifiedList',
                  children: null,
                  menuTitle: '合格供应商名录',
                  menuCode: '030301',
                  menuRouteName: 'qulifiedList',
                  menuId: 'f0134493b52e433bb07a5d15ae2fc14a',
                  actionCode: ['supply-list-check']
                }
              ],
              menuTitle: '供应商名录',
              menuCode: '0303',
              menuRouteName: 'nameList',
              menuId: '8683fc52c0024295999294530c2168ae',
              actionCode: []
            }
          ],
          menuTitle: '供应商名录',
          menuCode: '03',
          menuRouteName: 'supplyList',
          menuId: 'b7a9a2da52d24971850ab354bf2ca9d5',
          actionCode: ['supply-list-check', 'supply-list-export']
        },
        {
          parentCode: null,
          menuPath: '/system',
          children: [
            {
              parentCode: '06',
              menuPath: 'systemLog',
              children: null,
              menuTitle: '系统日志',
              menuCode: '0607',
              menuRouteName: 'systemLog',
              menuId: 'b3c13cbadd7e40a7b6baa1bb2f0493e4',
              actionCode: ['system-log-export']
            },
            {
              parentCode: '06',
              menuPath: 'process',
              children: null,
              menuTitle: '流程设置',
              menuCode: '0606',
              menuRouteName: 'process',
              menuId: '66d4f28bb0da4382abe76d10242d640e',
              actionCode: [
                'system-process-deleteMapSingle',
                'system-process-deleteProcessBeginner',
                'system-process-getMapSingleDetail',
                'system-process-publishProcessOrgMap',
                'system-process-addProcessOrgMap',
                'system-process-addProcessOrgMap',
                'system-process-addProcessBeginner'
              ]
            },
            {
              parentCode: '06',
              menuPath: 'menus',
              children: null,
              menuTitle: '菜单管理',
              menuCode: '0602',
              menuRouteName: 'menus',
              menuId: 'ba234473a47f4a86aa3a0163b47966fc',
              actionCode: []
            },
            {
              parentCode: '06',
              menuPath: 'auth',
              children: null,
              menuTitle: '权限管理',
              menuCode: '0604',
              menuRouteName: 'auth',
              menuId: '75f6cec45cd5495f9e248d41ec720de2',
              actionCode: ['system-auth-delOrgUserList', 'system-auth-addOrgUserList', 'system-auth-putUserPermission']
            },
            {
              parentCode: '06',
              menuPath: 'category',
              children: null,
              menuTitle: '数据字典',
              menuCode: '0603',
              menuRouteName: 'category',
              menuId: 'c50101ea1473439a857c520e2246e637',
              actionCode: []
            }
          ],
          menuTitle: '系统管理',
          menuCode: '06',
          menuRouteName: 'system',
          menuId: '6bca53297ee54976bebcf66ffcff8ee2',
          actionCode: []
        }
      ],
      managerOrgId: '1e0758606bd8474cbd7c89c82f91cf04',
      managerOrgCode: '0000100011',
      managerOrgName: '中铁十一局',
      managerOrgCreditCode: '91420000179315087R',
      managerOrgList: [
        {
          createdPerson: null,
          createdTime: null,
          id: '00001',
          ifUse: 1,
          isVirtual: 1,
          orgCode: '00001',
          orgCreditCode: '91110000100010660R',
          orgFullName: '中国铁道建筑集团有限公司',
          orgName: '中国铁道建筑集团有限公司',
          orgType: '0',
          parentId: null,
          sortNo: null,
          unitCode: '00001',
          updatedPerson: null,
          updatedTime: null,
          version: 0
        },
        {
          createdPerson: '张三',
          createdTime: '2019-04-19T15:36:38',
          id: '4b90612938274a50ac2a432042d9680b',
          ifUse: 1,
          isVirtual: 1,
          orgCode: '0000100001',
          orgCreditCode: '91110000710935150D',
          orgFullName: '股份公司',
          orgName: '股份公司',
          orgType: '0',
          parentId: '00001',
          sortNo: null,
          unitCode: '0000100001',
          updatedPerson: '张三',
          updatedTime: '2019-04-19T15:36:38',
          version: 1
        },
        {
          createdPerson: '张三',
          createdTime: '2019-04-19T15:37:01',
          id: '1e0758606bd8474cbd7c89c82f91cf04',
          ifUse: 1,
          isVirtual: 1,
          orgCode: '0000100011',
          orgCreditCode: '91420000179315087R',
          orgFullName: '中国铁建十一局集团',
          orgName: '中铁十一局',
          orgType: '0',
          parentId: '4b90612938274a50ac2a432042d9680b',
          sortNo: null,
          unitCode: '0000100011',
          updatedPerson: '张三',
          updatedTime: '2019-04-19T15:37:01',
          version: 1
        },
        {
          createdPerson: '张三',
          createdTime: '2019-05-06T14:04:54',
          id: 'c7a618079a894527b4e376547406bb4a',
          ifUse: 1,
          isVirtual: 1,
          orgCode: '0000100019',
          orgCreditCode: '91110000122027391R',
          orgFullName: '中铁十九局集团有限公司',
          orgName: '中铁十九局',
          orgType: '0',
          parentId: '4b90612938274a50ac2a432042d9680b',
          sortNo: null,
          unitCode: '0000100019',
          updatedPerson: '张三',
          updatedTime: '2019-05-06T14:04:54',
          version: 1
        },
        {
          createdPerson: '张三',
          createdTime: '2019-05-06T17:09:29',
          id: 'efd898d5675c409bbf105ca205664798',
          ifUse: 1,
          isVirtual: 1,
          orgCode: '0000100054',
          orgCreditCode: '91110108556831926A',
          orgFullName: '中铁建网络信息科技有限公司',
          orgName: '中铁建网络信息科技',
          orgType: '0',
          parentId: '4b90612938274a50ac2a432042d9680b',
          sortNo: null,
          unitCode: '0000100054',
          updatedPerson: '张三',
          updatedTime: '2019-05-06T17:09:29',
          version: 1
        }
      ],
      id: null,
      username: '张三',
      postCode: '000010000104000770198800399001',
      postName: '处长',
      postPath: '中国铁建股份公司信息化管理部基础平台处处长',
      posts: [
        {
          zuzhilujing: '中国铁建股份公司信息化管理部基础平台处处长',
          zhujian: 1164567,
          danweimingcheng: '中国铁建/股份公司',
          shifouzhugangwei: 1,
          bumenmingcheng: '信息化管理部/基础平台处',
          zuzhibianma: '000010000104000770198800399001',
          jiancheng: '处长',
          quancheng: '处长'
        },
        {
          zuzhilujing: '中国铁建股份公司测试单位5测试部门5待分配人员',
          zhujian: 143048,
          danweimingcheng: '中国铁建/股份公司/测试单位5',
          shifouzhugangwei: 0,
          bumenmingcheng: '测试部门5',
          zuzhibianma: '000010000100005010007700199001',
          jiancheng: '待分配人员',
          quancheng: '待分配人员'
        }
      ],
      sub: 'hr|987837',
      zhengzhimianmao: null,
      identity: null,
      currentOrgNode: {
        leixing: 'dw',
        zuzhilujing: '中国铁建',
        zhujian: 1,
        leixingmingcheng: '单位',
        paixuma: 1,
        danweicengji: '1001010101',
        zuzhibianma: '00001',
        jiancheng: '中国铁建',
        quancheng: '中国铁建股份有限公司',
        shangjizhujian: 0,
        xunizuzhi: 0
      }
    }
  }
}
export default json
