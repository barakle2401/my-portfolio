import apiClient, { HTTPMethod } from 'api/client';
import { Post } from 'api/response';

// Declare your API calls here...
const API = {
  getPosts: () => apiClient<Post[]>({ url: '/posts', method: HTTPMethod.GET }),
};

export default API;
