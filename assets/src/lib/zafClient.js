export const client = ZAFClient.init()

export const createModalInstance = async (imgURL) => {
    await client.invoke('instances.create', {
        location: 'modal',
        url: `assets/modal.html#imgURL=${imgURL}`,
        size: {
          width: '80vw',
          height: '70vh'
        }
      })
}