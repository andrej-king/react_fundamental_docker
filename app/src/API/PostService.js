import axios from "axios";

export default class PostService {
    // get all posts from api
    static async getAll(limit = 10, page = 1) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        })
        return response
    }

    // get post from api by id
    static async getById(id) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/'+ id)
        return response
    }
}
