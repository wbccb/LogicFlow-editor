<template>
  <div class="location-wrapper">

    <div ref="containerRef" id="logicFlow"></div>

    <!-- 数据查看面板 -->


  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from "vue";
import LogicFlow from '@logicflow/core';
import {Menu, Snapshot, MiniMap, DndPanel} from '@logicflow/extension'
import lfMockData from "../common/data/lfMockData";

export default defineComponent({
  name: "",
  props: {},
  setup() {

    const config = {
      background: {
        backgroundColor: '#f7f9ff',
      },
      grid: true,
      keyboard: {
        enabled: true
      },
      edgeTextDraggable: true,
      hoverOutline: false,
      width: 700,
      height: 600,
    }

    const theme = {
      circle: {
        stroke: '#000000',
        strokeWidth: 1,
        outlineColor: '#88f',
      },
      rect: {
        outlineColor: '#88f',
        strokeWidth: 1
      },
      polygon: {
        strokeWidth: 1
      },
      polyline: {
        stroke: '#000000',
        hoverStroke: '#000000',
        selectedStroke: '#000000',
        outlineColor: '#88f',
        strokeWidth: 1
      },
      nodeText: {
        color: '#000000'
      },
      edgeText: {
        color: '#000000',
        background: {
          fill: '#f7f9ff'
        }
      }
    }

    const containerRef = ref<any>();
    onMounted(() => {
      const lf = new LogicFlow({
        ...config,
        plugins: [
          Menu,
          MiniMap,
          Snapshot,
          DndPanel
        ],
        container: containerRef.value
      });

      lf.setTheme(theme);

      lf.render(lfMockData);
    })


    return {
      containerRef
    };
  },
});
</script>

<style scoped>
.location-wrapper {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0;
  margin: 0;
}

#logicFlow {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 10001;
}
</style>