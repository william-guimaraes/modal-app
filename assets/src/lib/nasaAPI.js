import { BASE_URL } from './const.js'
import { formatDate } from '../utils/formatDate.js'

export const getNasaAPodImage = async (day, thumbs) => {
    const queryDay = formatDate(day)
    const response = await fetch(`${BASE_URL}&date=${queryDay}&thumbs=${thumbs}`)

    if(response.status === 200) {
        const data = await response.json()
        return {
            error: false,
            url: data.url
        }
    }

    return {
        error: true,
        url: ''
    }
}