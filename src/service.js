const BASE_URI = 'https://api.unsplash.com';

export default class GalleryService {
    getResponseApi = async(request='') => {
        const response = await fetch(`${BASE_URI}${request}`, {
            method: 'GET',
            headers: {
                'Authorization': 'Client-ID cff11d975e766b0d4ed0f6b3ebb2647b75523b96c4d321820c3851401c54ba9b',
                'Accept-Version': 'v1'
            }
        });
        return await response.json();
    };
}