import React from 'react';

function Footer() {
    return (
        <div className="container-fluid">
            <footer><p>Copyright © {new Date().getFullYear()}</p></footer>
        </div>
    );

}

export default Footer;