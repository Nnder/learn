import React from 'react';
import logoImage from '../../assets/img/create-react-app.svg';
import styles from './Header.module.sccs';

const menu = [
    {title:'Products', link:'/'},
    {title:'Pricing', link:'/'},
    {title:'Dashboard', link:'/'},
    {title:'About', link:'/'},
]

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src={logoImage} alt="react-img"/>
            </div>
            <div className={styles['menu-wrapper']}>
                <ul>
                    {menu.map((el,id)=>(
                        <li key={id}>
                            <a href={el.link}>{el.title}</a>
                        </li>
                    ))}
                </ul>
                <div className={styles['buttons']}>
                    <button className={styles['login-button']}>Login</button>
                    <button className={styles['sign-up']}>Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Header;