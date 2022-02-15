import React from "react";
import classes from './Header.module.css'
import ThemeToggler from "./ThemeToggler";
function Header () {
    return (
        <header className={classes['main-header']}>
            <div className="container">
                <div className={classes['header-wrapper']}>
                    <div className={classes['header-left-logo']}>
                        <h2>Where in the world?</h2>
                    </div>
                    <div className={classes['header-right-theme-toggle']}>
                        <ThemeToggler classes={classes}></ThemeToggler>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;