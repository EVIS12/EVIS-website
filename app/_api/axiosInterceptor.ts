import axios from 'axios';

const axiosInterceptorInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // Replace with your API base URL
});

// Response interceptor
axiosInterceptorInstance.interceptors.response.use(
  (response) => {
    // Modify the response data here

    return response;
  },
  async (error) => {
    // Handle response errors here

    return await Promise.resolve(error.response);
  }
);
// End of Response interceptor

export default axiosInterceptorInstance;
