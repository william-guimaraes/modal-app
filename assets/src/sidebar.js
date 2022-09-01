import Sidebar from './components/Sidebar.js';
import { client } from './lib/zafClient.js'

const initSidebar = () => {
    client.on('app.registered', () => {
        Vue.createApp(Sidebar).mount("#app")
        client.invoke('resize', { width: '100%', height: `350px` });
    })
}

export default initSidebar()