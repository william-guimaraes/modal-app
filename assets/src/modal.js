import Modal from './components/Modal.js';
import { client } from './lib/zafClient.js'
import { getURL } from './utils/getURL.js'

const initModal = () => {
    client.on('app.registered', () => {
        const imgSrc = getURL()
        Vue.createApp(Modal, { imgSrc }).mount("#modal")
        client.invoke('resize', { width: '80vw', height: `70vh` });
    })
}

export default initModal();
