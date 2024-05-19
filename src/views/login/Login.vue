<script setup lang="ts" name="Login">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive } from 'vue'
import { type loginFormData } from '@/api/user/type'
import useUserStore from '@/store/modules/user'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
// 路由器
const $router = useRouter()

let useStore = useUserStore()
// 登入数据
const loginForm = reactive<loginFormData>({
  username: 'admin',
  password: '111111'
})

// 登入方法
const login = async () => {
  // 进行登入，并且保存数据到pinia中
  try {
    await useStore.userLogin(loginForm)
    await $router.push('/')
    ElNotification({
      type: 'success',
      message: '登入成功'
    })
  } catch (e) {
    ElNotification({
      type: 'error',
      message: (e as Error).message
    })
  }
}
</script>

<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form">
          <h1>Hello</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item>
            <el-input
              :prefix-icon="User"
              placeholder="请输入用户名"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              :prefix-icon="Lock"
              type="password"
              placeholder="请输入密码"
              v-model="loginForm.password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="login_btn" type="primary" size="default" @click="login"
              >登入
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;

  .login_form {
    position: relative;
    padding: 40px;
    width: 80%;
    top: 30vh;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;

    h1 {
      color: #fff;
      font-size: 40px;
    }

    h2 {
      color: #fff;
      font-size: 20px;
      margin: 20px 0;
    }

    .login_btn {
      width: 100%;
    }
  }
}
</style>
