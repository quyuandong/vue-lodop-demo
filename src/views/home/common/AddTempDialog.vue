<template>
    <el-dialog
        class="collect-tree-dialog"
        title="新增设计模板"
        :visible="showDialog"
        :before-close="handleClose"
        :close-on-click-modal="false"
        width="30vw"
        top="10vh"
        append-to-body
    >
        <el-form
            ref="form"
            :model="form"
            size="small"
            :rules="rules"
            label-width="80px"
        >
            <el-form-item
                label="模板名称"
                prop="title"
            >
                <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item
                label="模板类型"
                prop="type"
            >
                <el-select v-model="form.type">
                    <el-option
                        label="出库单"
                        :value="1"
                    ></el-option>
                    <el-option
                        label="入库单"
                        :value="2"
                    ></el-option>
                </el-select>
            </el-form-item>
            <el-form-item
                label="模板宽度"
                prop="width"
            >
                <el-input v-model="form.width"></el-input>
            </el-form-item>
            <el-form-item
                label="模板高度"
                prop="height"
            >
                <el-input v-model="form.height"></el-input>
            </el-form-item>
            <el-form-item
                label="纸张宽度"
                prop="pageWidth"
            >
                <el-input v-model="form.pageWidth"></el-input>
            </el-form-item>
            <el-form-item
                label="纸张高度"
                prop="pageHeight"
            >
                <el-input v-model="form.pageHeight"></el-input>
            </el-form-item>
        </el-form>
        <div
            slot="footer"
            class="dialog-footer"
        >
            <el-button
                size="mini"
                @click="handleClose"
            >取 消</el-button>
            <el-button
                type="primary"
                size="mini"
                @click="handleSave"
            >确 定</el-button>
        </div>
    </el-dialog>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { State, Mutation } from 'vuex-class'
@Component({
  components: {}
})
export default class AddTempDetail extends Vue {
  @State tempTableList
  @Mutation SET_TEMP_TABLE_LIST
  $refs!: {
    [propName: string]: any
  }
  @Prop({ type: Boolean, default: false }) showDialog

  form: Object = {
    title: '',
    type: 1, // 模板类型 1：出库单；2：入库单
    width: '',
    height: '',
    pageWidth: '',
    pageHeight: '',
    tempItems: []
  }
  rules: any = {
    title: { required: true, message: '请输入模板名称' },
    type: { required: true, message: '请选择模板类型' },
    width: { required: true, message: '请输入模板宽度' },
    height: { required: true, message: '请输入模板高度' },
    pageWidth: { required: true, message: '请输入纸张宽度' },
    pageHeight: { required: true, message: '请输入纸张高度' }
  }

  // 保存模板
  handleSave() {
    this.$refs.form.validate(valid => {
      if (valid) {
        let tableData: any = this.$cloneDeep(this.tempTableList)
        tableData.push(this.form)
        this.SET_TEMP_TABLE_LIST(tableData)
        this.handleClose()
      }
    })
  }

  handleClose() {
    this.$emit('close')
  }
}
</script>

