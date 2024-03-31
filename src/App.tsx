import React, { useState } from 'react';
import { useGetGenreContentsQuery } from 'api';
import Main from './components/Main/Main';
import List from './components/List/List';
import ListItem from './components/ListItem/ListItem';

function App() {
    const [page, setPage] = useState(1);
    const { data, isError } = useGetGenreContentsQuery({
        id: '9',
        params: { page, itemsPerPage: 20 },
    });

    if (isError) {
        return <div>Error</div>;
    }

    const handleReachEnd = () => {
        setPage((prevState) => {
            if (data?.pagination.next_page === null) return prevState;
            return prevState + 1;
        });
    };

    return (
        <Main>
            <h1>Titan OS - List</h1>
            <List
                id="collection"
                items={data?.collection ?? []}
                threshold={4}
                navigation={true}
                renderItem={(item, itemState) => (
                    <ListItem
                        title={item.title}
                        image={item.images === null ? undefined : item.images.artwork_portrait}
                        focused={itemState.wrapperFocused}
                        selected={itemState.selected}
                    />
                )}
                onReachEnd={handleReachEnd}
            />
        </Main>
    );
}

export default App;
