import axios from "axios";

export default class PostService {
    // get all posts from api
    static async getAll() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        return response.data;
    }
}
