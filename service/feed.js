import axios from 'axios';

export const getSources = async (source) => {
    const URL = `https://newsapi.org/v2/everything?domains=${source}&apiKey=3bf48e7e1a5f4278b12fdacd61599b57&pageSize=100`;
    try {
        const response = await axios.get(URL, 
                {headers: {
                    'Content-type': 'application/json'
                 }}
            );
        const sourcesData = response.data;
        // console.log('====================================');
        // console.log(sourcesData);
        // console.log('====================================');
        return sourcesData;
    } catch (err) {
        console.log(err);
    }
}
