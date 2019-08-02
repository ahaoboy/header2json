<template>
  <div class="main">
    <div class="box">
      <h1>header</h1>
      <el-input
        type="textarea"
        :autosize="{ minRows: 20, maxRows: 40}"
        placeholder="请输入header"
        v-model="header">
      </el-input>
      <el-button class="btn" @click="header=''">
        clear
      </el-button>
    </div>

    <div class="box">
      <h1>json</h1>
      <el-input
        type="textarea"
        placeholder="{}"
        readonly
        :autosize="{ minRows: 20, maxRows: 40}"
        v-model="json">
      </el-input>
      <el-button class="btn" :data-clipboard-text="json">
        Copy
      </el-button>
    </div>

  </div>
</template>

<script>
  import header2json from './util'
  import ClipboardJS from 'clipboard'
  import {Message} from 'element-ui'

  export default {
    name: "Header2Json",
    data() {
      return {
        header: '',

      }
    },
    computed: {
      json() {
        return JSON.stringify(
          header2json(this.header),
          null,
          4
        )
      }
    },
    mounted() {
      let clipboard = new ClipboardJS('.btn');
      clipboard.on('success', e => {
        Message({
          message: 'copy finished~',
          type: 'success'
        })
      });

    }
  }
</script>

<style scoped>
  .main {
    display: flex;
    /*flex-direction: column;*/
    width: 100%;
    height: 100%;
    justify-content: space-around;
    align-items: center;
  }

  .box {
    display: flex;
    width: 45%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }


</style>
