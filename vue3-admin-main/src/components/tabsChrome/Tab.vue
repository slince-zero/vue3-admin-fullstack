<template>
  <div class="tab" :class="{ active }">
    <div class="title">
      {{ tab.title }}
    </div>
    <div
      @click.stop="closeTab"
      class="close-icon"
      v-if="active&& tab.closeable ">
      <svg width="16" height="16" stroke="#595959">
        <path d="M 4 4 L 12 12 M 12 4 L 4 12"></path>
      </svg>
    </div>
    <svg class="tabs-before-l" width="7" height="7">
      <path d="M 0 7 A 7 7 0 0 0 7 0 L 7 7 Z"></path>
    </svg>
    <svg class="tabs-before-r" width="7" height="7">
      <path d="M 0 0 A 7 7 0 0 0 7 7 L 0 7 Z"></path>
    </svg>
  </div>
</template>
<script setup>
const props = defineProps(['active', 'tab'])


// 获取 emit
const emit = defineEmits(['closeTab'])

// 调用 emit
const closeTab = () => {
  emit('closeTab', props.tab)
}
</script>

<style scoped lang="scss">
.tab {
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 14px;
  flex: 1;
  font-size: 14px;
  max-width: 140px;
  min-width: 100px;
  transition: background-color 0.3s;

  .title {
    width: 100%;
    word-break: keep-all; // 防止单词被拆分到两行
    white-space: nowrap; // 禁止文本换行
    overflow: hidden;
    text-overflow: ellipsis; // 当文本溢出时，显示省略...标记
  }

  @at-root .dark {
    .tab {
      &.active {
        background-color: #121212;
        border: 1px solid #e4dede;
        border-bottom: 0;
        .tabs-before-l,
        .tabs-before-r {
          fill: #121212;
        }
      }
    }
  }

  &.active {
    background-color: #fff;

    .tabs-before-l,
    .tabs-before-r {
      fill: #fff;
    }
  }

  .close-icon {
    width: 16px;
    height: 16px;
    border-radius: 50%;

    &:hover {
      background-color: #eee;
    }
  }

  .tabs-before-l,
  .tabs-before-r {
    bottom: 0px;
    position: absolute;
    fill: transparent;
  }

  .tabs-before-l {
    left: -7px;
  }

  .tabs-before-r {
    right: -7px;
  }
}
</style>
