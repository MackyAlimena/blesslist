import * as React from 'react';

const Wishlist: React.FC = () => {
    const [wishlist, setWishlist] = React.useState<string[]>([]);
    const [item, setItem] = React.useState<string>('');

    React.useEffect(() => {
        const savedWishlist = localStorage.getItem('wishlist');
        if (savedWishlist) {
            setWishlist(JSON.parse(savedWishlist));
        }
    }, []);

    React.useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    const addItem = () => {
        if (item && !wishlist.includes(item)) {
            setWishlist([...wishlist, item]);
            setItem('');
        }
    };

    const removeItem = (itemToRemove: string) => {
        setWishlist(wishlist.filter(wish => wish !== itemToRemove));
    };

    return (
        <section>
            <h2>Wishlist</h2>
            <input
                type="text"
                value={item}
                onChange={(e) => setItem(e.target.value)}
                placeholder="Add new item"
            />
            <button onClick={addItem}>Add</button>
            <ul>
                {wishlist.map((wish, index) => (
                    <li key={index}>
                        {wish}
                        <button onClick={() => removeItem(wish)}>Remove</button>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Wishlist;