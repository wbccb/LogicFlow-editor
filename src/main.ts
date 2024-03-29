import {createApp} from "vue";
import "./styles/index.scss";
import "@logicflow/core/dist/style/index.css";
import "@logicflow/extension/lib/style/index.css";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/es/components/message/style/css";
import locale from "element-plus/lib/locale/lang/zh-cn";

const app = createApp(App);

app.use(router);
app.use<Array<Record<string, any>>>(ElementPlus, {locale});

app.mount("#app");
