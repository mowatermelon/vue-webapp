<!--左侧面板信息-->
<template>
  <div class="mdui-tab mdui-color-theme" mdui-tab>
    <router-link class="mdui-ripple mdui-ripple-white" v-for="(tab, tindex) in Tabs" :key='tindex' :to="{path:tab.link,query: {tabIndex: tindex+1}}">
      <i class="mdui-icon material-icons">{{tab.icon}}</i>
      <label>{{tab.title}}</label>
    </router-link >
  </div>
</template>
<script>

import Home from '../pages/Home'
import Analysis from '../pages/Analysis'
import Lucky from '../pages/Lucky'
import Setting from '../pages/Setting'
import {getAjax} from '../service/moAjax'

export default {
    name: 'toolBar',
    data() {
      return {
        isActive: 0,// 默认的tab数
        Tabs: []
        }
    },
    methods: {
      collapseTab: function(ind) {
        this.isActive = ind;
      },
      goRouter: function(tabIndex,listIndex) {
        this.isActiveList = tabIndex+'--'+listIndex;
      }
    },
    components:{
      Home,
      Analysis,
      Lucky,
      Setting
    },
  created:function(){
    let that = this;
    getAjax('../../static/mock/ToolBar.json')
      .then((response) => {
        console.log("请求到的面板数据是");
        console.log(response.data);
        that.Tabs = response.data || [];
      })
      .catch((error) => {
        console.error(error);
      });
  }
  }
</script>
<style>

</style>
