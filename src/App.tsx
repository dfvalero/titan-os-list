import React, { useEffect, useState } from 'react';
import { getGenreContents } from './api';
import Main from './components/Main/Main';

function App() {
    const [data, setData] = useState<unknown>([]);

    useEffect(() => {
        getGenreContents().then((data) => {
            setData(data.collection);
        });
    }, []);

    console.log(data);

    return (
        <Main>
            <h1>Titan OS - List</h1>
        </Main>
    );
}

export default App;
