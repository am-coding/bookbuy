import React from 'react';
import Articles from '../components/Articles';
import { ArticleProvider } from '../components/articleWrapper'

const Feed = () => {
    return (
        <ArticleProvider>
        <div>
            <Articles />
        </div>
        </ArticleProvider>
    )
}

export default Feed;
