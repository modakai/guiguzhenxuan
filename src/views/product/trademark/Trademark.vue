<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue'
import { reactive } from 'vue'

const page = reactive({
  pageNo: 1,
  limit: 3,
  pageSizes: [3, 5, 7, 9],
  total: 0,
  count: 9
})

const sizeChange = () => {}
const getHasTrademark = () => {}
</script>

<template>
  <el-card class="card-box">
    <!-- 卡片顶部添加品牌按钮 -->
    <el-button type="primary" size="default" :icon="Plus">添加品牌</el-button>
    <!-- 表格组件：用于展示已有得平台数据 -->
    <!-- table:---border:可以设置表格纵向是否有边框
				table-column:---label:某一个列表 ---width:设置这列宽度 ---align:设置这一列对齐方式    
		-->
    <el-table style="margin-top: 10px" border>
      <el-table-column label="序号" width="80px" align="center" type="index"></el-table-column>
      <!-- table-column:默认展示数据用div -->
      <el-table-column label="品牌名称" align="center" prop="tmName"></el-table-column>
      <el-table-column label="品牌LOGO" align="center"></el-table-column>
      <el-table-column label="品牌操作" align="center"></el-table-column>
    </el-table>

    <!-- 分页器组件
         pagination
            current-page:设置分页器当前页码
            page-size:设置每一个展示数据条数
            page-sizes:用于设置下拉菜单数据
            background:设置分页器按钮的背景颜色
            layout:可以设置分页器六个子组件布局调整
     -->
    <el-pagination
      v-model:current-page="page.pageNo"
      v-model:page-size="page.limit"
      :page-sizes="page.pageSizes"
      background
      :total="page.total"
      :page-count="page.count"
      layout="prev, pager, next, jumper,->,sizes,total"
      @size-change="sizeChange"
      @current-change="getHasTrademark"
      style="margin-top: 10px"
    />
  </el-card>
</template>

<style scoped lang="scss"></style>
