export default class GalleryService {
    getPhotos = async(page, id) => {
        const typeUrl = id ? 'collections/3330452/' : '';
        return await new Promise ((resolve) => {
            setTimeout(async() => {
                const response = await fetch(`https://api.unsplash.com/${typeUrl}photos?page=${page}&per_page=20`, {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Client-ID cff11d975e766b0d4ed0f6b3ebb2647b75523b96c4d321820c3851401c54ba9b',
                        'Accept-Version': 'v1'
                    }
                });
                const result = await response.json();
                resolve(result);
            }, 0)
        })
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

// collections/3330452/