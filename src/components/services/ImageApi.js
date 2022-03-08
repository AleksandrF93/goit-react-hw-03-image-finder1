const API_KEY = '24819465-daa3ab1957d5e57740fc943ce';
const BASE_URL = 'https://pixabay.com/api/';

function fechImage(name, page) {
    return fetch(`${BASE_URL}?key=${API_KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            return Promise.reject(
                new Error(`Нет картинки ${name}`)
            )
        }) 
};

const api = {
  fechImage,
};

export default api;