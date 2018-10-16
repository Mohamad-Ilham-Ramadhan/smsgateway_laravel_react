import React, { cloneElement } from 'react';

const Card = ({ className = null, title = null, extra = null , footer = null, bodyClassName = null, children }) => {

    return (
        <div className={"card " + className}>
        	<div className="clearfix position-relative">
        		<div className="card-title">{ title }</div>
        		{ extra ? cloneElement(extra, { style: {position: 'absolute', top: '0',  right: '0'} }) : null }
        	</div>
			<div className={"card-body " + bodyClassName}>
                {children}
			</div>
            { footer && 
    			<div className="card-footer clearfix">
                    {footer}
    			</div>
            }
		</div>
    );
};

export default Card;
