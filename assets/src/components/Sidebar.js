import { getNasaAPodImage } from '../lib/nasaAPI.js'
import { createModalInstance } from '../lib/zafClient.js'
import Loader from './Loader.js'

const template = `
<div id="app">
  <p className="date__title">Please, select your date:</p>
  <div className="date__container">
    <Datepicker v-model="date" :enableTimePicker="false" autoApply></Datepicker>
  </div>
  <Loader v-if="isLoading"/>
  <img className="date__image" v-else :src='imgSrc' @click="openModal" />
  <p className="date__error" v-if="isError">
    Ops, something went wrong. Please, select a new date.\n
    (note that future dates are not allowed)
  </p>
</div>`;

const Initial = {
  template,
  components: { 
    Datepicker: VueDatePicker, 
    Loader 
  },
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
      const imgURL = this.imgSrc
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
