import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './views/Header';
import Wishlist from './views/Wishlist';
import TaskList from './views/Tasklist';
import VerseOfTheDay from './views/VerseOfTheDay';

function App() {
    return (
        <div className="App">
            <Header />
            <main className="container">
                <VerseOfTheDay />
                <TaskList />
                <Wishlist />
            </main>
        </div>
    );
}

export default App;