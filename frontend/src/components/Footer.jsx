import React from 'react';

import "./styles/index.css"

function Footer() {
    return (
        <div>
            <footer><p>Copyright © {new Date().getFullYear()}</p></footer>
        </div>
    );

}

export default Footer;