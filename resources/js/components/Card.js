import React, { cloneElement } from 'react';

const Card = ({ className, title, extra, footer, bodyClassName, children }) => {
    console.log( extra.props.className );
    return (
        <div className={"card " + className}>
        	<div className="clearfix position-relative">
        		<div className="card-title">{ title }</div>
        		{cloneElement(extra, { style: {position: 'absolute', top: '0',  right: '0'} }) }
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
