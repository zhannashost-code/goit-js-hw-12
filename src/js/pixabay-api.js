import axios from "axios";
const API_KEY = "55660188-792f1fef602df37d72b3dd925";

export async function getImagesByQuery(query, page) {
    const response = await axios.get("https://pixabay.com/api/", {
    params: {
      key: API_KEY,
      q: query,
      page,
      per_page: 15,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
    },
  })
   return response.data;
}