<template>
  <el-page-header :icon="ArrowLeft" @back="to_back">
    <template #content>
      <span class="text-large font-600 mr-3"> Title </span>
    </template>
  </el-page-header>
  <div class="role-info-main">
    <el-row :gutter="60">
      <el-col :span="13">
        <div class="video-role">
          <Video></Video>
        </div>
      </el-col>
      <el-col :span="10">
        <div class="role-text">
          <el-row :gutter="20" class="p-row">
            <el-col :span="8"><span>角色名称：&nbsp;xxxxxx</span></el-col>
            <el-col :span="8"><span>星级：&nbsp;<el-rate v-model="self_value" disabled text-color="#ff9900" />
              </span></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8"><span>国家：枫丹</span></el-col>
            <el-col :span="10"><span>角色得分：<el-rate v-model="get_value" disabled show-score
                  text-color="#ff9900" /></span></el-col>
          </el-row>
          <el-row><el-col :span="24">
              <span>神之眼：</span>
            </el-col></el-row>
          <el-row><el-col :span="24">
              <span>武器推荐：</span>
            </el-col></el-row>
          <el-row><el-col :span="24">
              <span>圣遗物推荐：</span>
            </el-col></el-row>
          <el-row><el-col :span="24">
              <span>角色介绍：</span>
            </el-col></el-row>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="24">
        <div class="role-team" v-for="i in 3">
          <el-divider>
            <el-icon>
              <StarFilled />
            </el-icon>
          </el-divider>
          <h3>xxxxxxxx</h3>
          <el-space wrap>
            <el-card v-for="i in 4" class="box-card" style="width: 160px">
              <template #header>
                <el-image style="width: 160px; height: 120px" fit="cover" />
              </template>
              <p style="margin: -10px;">xxxxx</p>
            </el-card>
            <p style="width: 40px;"></p>
            <RouterLink to="/Duc/itme_three/role_detail">查看详情</RouterLink>
          </el-space>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
  
<script  >
import { StarFilled } from '@element-plus/icons-vue'
import Video from '../util_tool/video.vue'
import { ArrowLeft } from '@element-plus/icons-vue'
export default {
  components: { Video, StarFilled },
  setup() {
    return {
      ArrowLeft,
    }
  },
  data() {
    return {
      get_value: 3.4,
      self_value: 5

    }
  },
  methods: {
    to_back() {
      this.$router.push(this.$route.query.redirect)
    },

  }
}
</script>
  
<style scoped>
.video-role {
  height: 300px;
  float: right;

}

.role-text {
  height: 300px;
}

.role-text .el-col {
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  align-items: flex-start;
}
.role-text .el-col span{
  height: 32px;
}
.role-team {
  height: 300px;
  width: 100%;
}

.role-info-main {
  padding: 10px;

}


.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}

.el-card__body {
  height: 40px;
  padding: 1px;
}</style>