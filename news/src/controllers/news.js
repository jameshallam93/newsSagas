import axios from "axios"

const newsRequests = {
    async getNews (request) {
        const response = await axios.get(request)
        return (response.data)
}
}
export default newsRequests