<template>
    <TempEnter
        :temp-value="value"
        :widget-options="widgets"
        @save="handleSave"
    />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { OutStockOptions, InStockOptions } from '@/views/common/tempData'
import TempEnter from './common/TempEnter.vue'

@Component({
  components: { TempEnter }
})
export default class Index extends Vue {
  index: any = ''
  value: any = {
    title: 'demo',
    width: 750,
    height: 550,
    pageWidth: 750,
    pageHeight: 550,
    tempItems: []
  }
  widgets: any = OutStockOptions

  handleSave(data) {
    let tempList: any = []
    tempList[this.index] = data
    localStorage.setItem('tempList', JSON.stringify(tempList))
    this.$router.back()
  }

  created() {
    this.index = this.$route.query.index
    try {
      let tempList = []
      this.value = tempList[this.index]
      this.widgets = this.value.type == 1 ? OutStockOptions : InStockOptions
    } catch (err) {
      console.error(err)
    }
  }
}
</script>

<style lang="scss">
.index {
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: $--background-color-shallow;
  .index-main {
    flex: 1 1 100%;
    /* src/view/index.vue */
    width: 100%;
    overflow: hidden;
    .collaspe-aside .main-nav-container {
      box-sizing: border-box;
      padding-top: 10px;
    }
    .current-sub-menu-item {
      height: $--sub-menu-height;
      line-height: $--sub-menu-height;
    }
    .app-menu {
      .el-menu-vertical {
        display: inline-block;
      }
    }
  }
}
// small button/input/table字体大小统一设置为14px
.el-button--small,
.el-input--small,
.el-table--small {
  font-size: 14px;
}
// 表格样式统一 单元格高度40px
.el-table--small td,
.el-table--small th {
  padding: 0;
}
.el-table--small .cell {
  line-height: 40px;
}
.el-table-column--selection .cell {
  padding-right: 10px;
}
// tag字体14px
.el-tag {
  font-size: 14px;
}
// 对话框header padding
.el-dialog__header {
  padding: 20px 20px 10px;
  line-height: 1;
}
// 对话框body padding
.el-dialog__body {
  padding: 20px;
}
</style>
