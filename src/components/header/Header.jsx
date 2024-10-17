import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const cartItemsCount = useSelector((state) => state.cart.items.length); // Измените путь в зависимости от вашего состояния Redux

    return (
        <header style={styles.header}>
            <Link to="/">
                <img src="/path/to/logo.png" alt="Logo" style={styles.logo} />
            </Link>
            <nav style={styles.nav}>
                <Link to="/">Главная</Link>
                <Link to="/categories">Категории</Link>
                <Link to="/products">Все продукты</Link>
                <Link to="/promotions">Все акции</Link>
            </nav>
            <div style={styles.cart}>
                <Link to="/cart">
                    <img src="/path/to/cart-icon.png" alt="Cart" />
                    {cartItemsCount > 0 && <span style={styles.cartCount}>{cartItemsCount}</span>}
                </Link>
            </div>
        </header>
    );
};

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#f8f9fa',
    },
    logo: {
        height: '50px',
    },
    nav: {
        display: 'flex',
        gap: '20px',
    },
    cart: {
        position: 'relative',
    },
    cartCount: {
        position: 'absolute',
        top: '-5px',
        right: '-10px',
        background: 'red',
        borderRadius: '50%',
        color: 'white',
        padding: '5px',
    },
};

export default Header;
