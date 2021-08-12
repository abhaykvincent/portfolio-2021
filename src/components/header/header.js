import React ,{useState}from 'react'
import './header.scss'
function Header() {
    const [active, setActive] = useState(false);
    const [activeClass, setActiveClass] = useState('');

    return (
        <header>
            <div className="header">
                <div className="right">
                    <div className="hamburger-icon" onClick={() => {
                        setActive(!active);
                        if(active === true){
                            setActiveClass('')
                        }
                        else{
                            setActiveClass('active')
                        }
                    }}>=</div>
                </div>
            </div>
                <div className={`hamburger-menu ` + activeClass}>
                <div className="left"></div>
                <div className="right">
                    <div className="menu">
                        <h1 className="menu-label">about</h1>
                        <h1 className="menu-label-dot">.</h1>
                    </div>
                    <div className="menu">
                        <h1 className="menu-label">contact</h1>
                        <h1 className="menu-label-dot">.</h1>
                    </div>
                    <div className="menu">
                        <h1 className="menu-label">works</h1>
                        <h1 className="menu-label-dot">.</h1>
                    </div>
                </div>
                
            </div>
         </header>
    )
}

export default Header
