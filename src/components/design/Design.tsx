import { useEffect, useState } from 'react';
import './Design.scss';

const SHOW_DESIGN = 'show-design';

function Design() {
    const showDesign = sessionStorage.getItem(SHOW_DESIGN) === 'true';
    const [visible, setVisible] = useState<boolean>(showDesign);
    
    useEffect(() => {
        sessionStorage.setItem(SHOW_DESIGN, visible.toString());
    }, [visible]);
    
    useEffect(() => {
        // Note: when using <React.StrictMode /> all components are rendered twice!
        // document.addEventListener would add the same listener twice, so the visible flag would be toggled twice with a single keypress!
        // document.onkeydown on the other hand can host only one listener
        document.onkeydown = e => {
            if (e.ctrlKey && e.code === 'KeyD') {
                e.preventDefault();
                e.stopPropagation();

                setVisible((oldVisible) => !oldVisible);
            }
        };
    }, [setVisible]);

    return (
        <>
            { visible && <img className="design" alt="Design" title="Press CTRL+D to toggle" /> }
        </>        
    );
}

export default Design;