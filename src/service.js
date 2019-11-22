export default class GalleryService {
    getPhotos = async(page, id) => {
        const typeUrl = id ? `collections/${id}/` : '';
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
    getSearchPhoto = async (value, page) => {
        const response = await fetch(
            `https://api.unsplash.com/search/photos?query=${value}&page=${page}&per_page=20`,
            {
                method: 'GET',
                headers: {
                    'Authorization': 'Client-ID cff11d975e766b0d4ed0f6b3ebb2647b75523b96c4d321820c3851401c54ba9b',
                    'Accept-Version': 'v1'
                }
            });
        return await response.json();
    };

    getOnePhoto = async(id) => {
        const res =  await fetch(`https://api.unsplash.com/photos/${id}`, {
            method: 'GET',
                headers: {
                    'Authorization': 'Client-ID cff11d975e766b0d4ed0f6b3ebb2647b75523b96c4d321820c3851401c54ba9b',
                    'Accept-Version': 'v1'
                }
        });
        return await res.json();
    };

    getUserInfo = async(username) => {
        const res =  await fetch(`https://api.unsplash.com/users/${username}`, {
            method: 'GET',
                headers: {
                    'Authorization': 'Client-ID cff11d975e766b0d4ed0f6b3ebb2647b75523b96c4d321820c3851401c54ba9b',
                    'Accept-Version': 'v1'
                }
        });
        return await res.json();
    };
}