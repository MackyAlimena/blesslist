import * as React from 'react';
import '../App.css';
import Header from './Header';
import Wishlist from './Wishlist';
import TaskList from './Tasklist';
import VerseOfTheDay from './VerseOfTheDay';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <VerseOfTheDay />
                <TaskList />
                <Wishlist />
            </main>
        </div>
    );
}

export default App;