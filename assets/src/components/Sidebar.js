import { getNasaAPodImage } from '../lib/nasaAPI.js'
import { createModalInstance } from '../lib/zafClient.js'
import Loader from './Loader.js'

const template = `
<div id="app">
  <p className="exemplo">Datepicker</p>
  <Datepicker v-model="date" :enableTimePicker="false" autoApply></Datepicker>
  <Loader v-if="isLoading"/>
  <img v-else :src='imgSrc' @click="openModal" />
  <p v-if="isError">Ops, something went wrong. Please, select a new date.</p>
</div>`;

const Initial = {
  template,
  components: { Datepicker: VueDatePicker, Loader },
  data() {
    return {
      isError: false,
      isLoading: false,
      imgSrc: '',
      date: new Date(),
    }
  },
  methods: {
    insertAPodImage: async function () {
      this.isLoading = true
      const data = await getNasaAPodImage(this.date, true)
      this.isError = data.error
      this.imgSrc = data.url
      this.isLoading = false
    },
    openModal: async function () {
      const imgURL = this.imageSrc
      await createModalInstance(imgURL)
    }
  },
  async mounted() {
    await this.insertAPodImage()
  },
  watch: {
    date: function() {
      this.insertAPodImage()
    }
  }
};

export default Initial;
