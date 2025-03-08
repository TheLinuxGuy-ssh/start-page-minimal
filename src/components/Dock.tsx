import { useEffect } from 'react';
import { DockData } from '../assets/config';
import { initNavItems } from '../assets/dock'; 

const Dock = () => {
    useEffect(() => {
        // Initialize nav items when the component mounts
        initNavItems();
    
        // Optionally, you can return a cleanup function to remove event listeners
        return () => {
          // If you need to clean up event listeners, this is where you'd do it
          const navItems = document.querySelectorAll('.nav-item');
          navItems.forEach((item) => {
            item.removeEventListener('mouseenter', () => {});
            item.removeEventListener('mouseleave', () => {});
          });
        };
      }, []); // Empty dependency array ensures this effect runs only once when the component mounts
    
    return (
        <>
            <section className="dock">
                <div className="nav-wrap">
                    <nav className="nav-bar">
                        <ul className="nav-list">
                            {DockData.map((data, key) => {
                            return (
                                <li className="nav-item">
                                <a href="#" className="nav-item__link"><img src={data.imgurl} loading="eager" alt="Notion app icon" className="image" /></a>
                                <div className="nav-item__tooltip">
                                    <div>{data.name}</div>
                                </div>
                            </li>
                            )
                            })}
                           
                        </ul>
                    </nav>
                </div>
            </section>
        </>
    );
}

export default Dock;