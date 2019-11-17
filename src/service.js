export default class GalleryService {
    getPhotos = async(page) => {
        const response = await fetch("https://api.unsplash.com/photos?page="+page+"&per_page=20", {
            method: 'GET',
            headers: {
                'Authorization': 'Client-ID cff11d975e766b0d4ed0f6b3ebb2647b75523b96c4d321820c3851401c54ba9b',
                'Accept-Version': 'v1'
            }
        });
        return await response.json();
    };
    getRandomPhoto = async() => {
        const response = await fetch("https://api.unsplash.com/photos/random", {
            method: 'GET',
            headers: {
                'Authorization': 'Client-ID cff11d975e766b0d4ed0f6b3ebb2647b75523b96c4d321820c3851401c54ba9b',
                'Accept-Version': 'v1'
            }
        });
        return await response.json();
    };
}