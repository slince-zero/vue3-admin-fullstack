<template>
  <div class="nav-tab">
    <div class="tabs-chrome">
      <TabsChromeX
        ref="tabRef"
        :tabs="topNav"
        :activePath="activePath"
        @clickTab="clickTab"
        @removeTab="removeTab"
      >
      </TabsChromeX>
    </div>
    <div class="nav-action">
      <el-dropdown>
        <div class="more-btn">
          <el-icon>
            <MoreFilled />
          </el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="removeAllTab" icon="CloseBold">
              关闭全部
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useRouter, useRoute } from "vue-router";
import { useAppStore } from "../store/app";

import TabsChromeX from "../components/tabsChrome/TabsChromeX.vue";

const route = useRoute();
const router = useRouter();
const activePath = ref(route.path); // 拿到当前页面的路由path

const store = useAppStore();

const { topNav } = storeToRefs(store);

// router 钩子函数，在路由切换完成之后触发
router.afterEach((to) => {
  activePath.value = to.path; // 替换当前路由
  pushThisRoute(route.path, route.meta.title, route.meta.closable);
});

// 添加当前的页面
const pushThisRoute = (path, title, closeable) => {
  let tab = { path, title, closeable };
  store.addTopNav(tab);
};

// 刷新时当前的页面,目的就是为了刷新时，第一次能够获取到route.meta里面的数据
pushThisRoute(route.path, route.meta.title, route.meta.closable);

// 点击标签的时候，就能拿到tab进行路由跳转
const clickTab = (tab) => {
  router.push(tab.path);
};

const removeTab = (tab) => {
  // store.removeTopNav(tab)
  const index = store.removeTopNav(tab);
  if (index) {
    router.push(index.path);
  }
};

const removeAllTab = () => {
  store.removeAllTopNav();
  router.push("/home");
};
</script>
<style scoped lang="scss">
.nav-tab {
  display: flex;
  align-items: center;
  background-color: #ebeef4;

  .tabs-chrome {
    flex: 1;
  }

  .nav-action {
    width: 40px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .more-btn {
      cursor: pointer;
    }
  }

  @at-root .dark {
    .nav-tab {
      background-color: #000;
    }
  }
}
</style>
