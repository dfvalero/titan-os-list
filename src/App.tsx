import React, { useEffect, useState } from 'react';
import { getGenreContents } from './api';
import Main from './components/Main/Main';
import List from './components/List/List';
import { GetGenreContentsResponse } from './api/types';
import ListItem from './components/ListItem/ListItem';

function App() {
    const [data, setData] = useState<GetGenreContentsResponse>({
        collection: [],
        pagination: {
            count: 0,
            current_page: 0,
            next_page: null,
            per_page: 20,
            prev_page: null,
            total_count: 0,
            total_pages: 0,
        },
    });

    useEffect(() => {
        getGenreContents().then((data) => {
            setData(data);
        });
    }, []);

    return (
        <Main>
            <h1>Titan OS - List</h1>
            <List
                id="collection"
                items={data.collection}
                navigation={true}
                renderItem={(item, itemState) => (
                    <ListItem
                        title={item.title}
                        image={item.images === null ? undefined : item.images.artwork_portrait}
                        focused={itemState.wrapperFocused}
                        selected={itemState.selected}
                    />
                )}
            />
        </Main>
    );
}

export default App;
