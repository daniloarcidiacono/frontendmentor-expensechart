import React, { ReactNode, useState } from "react";
import ReactDOM from 'react-dom';
import './Tooltip.scss';

export interface TooltipProps {
    title: string | ReactNode;
    children?: ReactNode;
}

function Tooltip({ title, children }: TooltipProps) {
    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
        // https://github.com/facebook/react/issues/16201#issuecomment-858030314
        const rect: DOMRect = e.currentTarget.getBoundingClientRect();
        setPosition({ 
            // https://stackoverflow.com/a/49452594
            top: window.pageYOffset + rect.top,
            left: window.pageXOffset + rect.left + rect.width / 2
        });

        setVisible(true); 
    };
    const handleMouseLeave = () => { setVisible(false); };

    const tooltipStyle = () => {
        return {
            top: position.top + 'px',
            left: position.left + 'px'
        };
    };

    // https://stackoverflow.com/questions/60871599/react-js-add-event-listener-for-each-children
    const childrenWithEvents = React.Children.map(children, (child: React.ReactNode) => {
        return React.cloneElement(
            child as any,
            { 
                onMouseEnter: handleMouseEnter, 
                onMouseLeave: handleMouseLeave 
            }
        );
    });

    return (
        <>
            { childrenWithEvents }
            {
                visible && ReactDOM.createPortal(        
                    <div role="tooltip" className="tooltip" style={ tooltipStyle() }>
                        { title }
                    </div>,
                    document.getElementById("tooltip-root")!
                )   
            }
        </>
    );
}

export default Tooltip;