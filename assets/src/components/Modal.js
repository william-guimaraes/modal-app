const template = `
<div id="modal" className="modal__container">
  <img :src='imgSrc'/>
</div>`;

const Modal = {
    template,
    props: ['imgSrc'],
  };
  
export default Modal;
  