
<template>
    <div class="box">
        <div class="title">C-lodop 模板设计及打印</div>
        <section>
            <div class="section">模板管理</div>
            <el-table
                :data="tempTableList"
                style="width: 100%"
                size="mini"
                border
            >
                <el-table-column
                    label="模板名称"
                    prop="title"
                ></el-table-column>
                <el-table-column label="模板类型">
                    <template slot-scope="scope">
                        <span>{{scope.row.type == 1 ? '出库单' : '入库单'}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="模板宽高">
                    <template slot-scope="scope">
                        <span>{{scope.row.width + ' * '+ scope.row.height}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="纸张大小">
                    <template slot-scope="scope">
                        <span>{{scope.row.pageWidth + 'mm * '+ scope.row.pageHeight+'mm'}}</span>
                    </template>
                </el-table-column>
                <el-table-column align="right">
                    <template slot="header">
                        <el-button
                            size="mini"
                            type="primary"
                            @click="openCreate"
                        >创建模板</el-button>
                    </template>
                    <template slot-scope="scope">
                        <el-button
                            type="text"
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)"
                        >设计</el-button>
                        <el-button
                            type="text"
                            size="mini"
                            @click="handlePreview(scope.$index, scope.row)"
                        >预览</el-button>
                        <el-button
                            type="text"
                            size="mini"
                            @click="handleDelete(scope.$index, scope.row)"
                        >删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <AddTempDialog
                v-if="tempDialogVisible"
                :show-dialog="tempDialogVisible"
                @close="tempDialogVisible=false"
            ></AddTempDialog>
        </section>
        <!-- <section>
            <div class="section">模板打印测试</div>
            <el-form
                ref="printForm"
                :model="printForm"
                size="small"
                :rules="printRules"
                :inline="true"
            >
                <el-form-item
                    label="打印模板"
                    prop="tempIndex"
                >
                    <el-select v-model="printForm.tempIndex">
                        <el-option
                            v-for="(item,index) in tempTableList"
                            :key="index"
                            :label="item.title"
                            :value="index"
                        ></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item
                    label="测试数据"
                    prop="data"
                >
                    <el-input
                        v-model="printForm.data"
                        type="textarea"
                        style="width:520px"
                        :rows="6"
                        placeholder="数据模板对应的数据，数据格式为json对象"
                    ></el-input>
                </el-form-item>
                <el-form-item>
                    <div>
                        <el-button
                            size="mini"
                            type="primary"
                            @click="printPreview(1)"
                        >打印预览</el-button>
                    </div>
                    <div style="margin-top:10px">
                        <el-button
                            size="mini"
                            type="success"
                            @click="printPreview(2)"
                        >直接打印</el-button>
                    </div>
                </el-form-item>
            </el-form>
        </!-->

        <!-- <section>
            <el-collapse>
                <el-collapse-item
                    title="测试数据"
                    name="1"
                >
                    <el-form
                        ref="testData"
                        :model="testData"
                        size="small"
                        :inline="true"
                    >
                        <el-form-item label="出库数据">
                            <el-input
                                v-model="testData.OutStock"
                                type="textarea"
                                style="width:920px"
                                :rows="8"
                                placeholder="数据模板对应的数据，数据格式为json对象"
                            ></el-input>
                        </el-form-item>
                        <el-form-item label="入库数据">
                            <el-input
                                v-model="testData.InStock"
                                type="textarea"
                                style="width:920px"
                                :rows="8"
                                placeholder="数据模板对应的数据，数据格式为json对象"
                            ></el-input>
                        </el-form-item>
                    </el-form>
                </el-collapse-item>
            </el-collapse>
        </section>-->
    </div>
</template>

<script lang="ts">
import AddTempDialog from './common/AddTempDialog.vue'
import { Component, Vue } from 'vue-property-decorator'
import { State, Mutation } from 'vuex-class'
import { tempData } from '@/views/common/mockData'

@Component({
  components: { AddTempDialog }
})
export default class Home extends Vue {
  @State tempTableList
  @Mutation SET_TEMP_TABLE_LIST
  tempDialogVisible: boolean = false //是否显示模板

  // 创建模板
  openCreate() {
    this.tempDialogVisible = true
  }
  // 模板预览
  handlePreview(index, row) {
    // this.$lodop.previewTemp(row)
  }
  // 模板设计
  handleEdit(index, row) {
    this.$router.push({
      path: '/design',
      query: {
        index: index
      }
    })
  }
  // 模板删除
  handleDelete(index, row) {
    this.$confirm('确认删除该条数据吗？', '确认信息')
      .then(isPass => {
        if (isPass) {
          let tableData: any = this.$cloneDeep(this.tempTableList)
          tableData.splice(index, 1)
          this.SET_TEMP_TABLE_LIST(tableData)
        }
      })
      .catch()
  }
  mounted() {
    this.SET_TEMP_TABLE_LIST(tempData)
  }
}
</script>

<style lang="scss">
.box {
  width: 70%;
  height: 100%;
  margin: auto;
  .title {
    margin: 20px;
    font-size: 26px;
    font-weight: bold;
    color: #57f3b2;
    text-align: center;
  }
  .section {
    padding: 10px 0;
    font-size: 22px;
    color: #333333;
  }
}
</style>
