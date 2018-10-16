import React from 'react';

const Card = ({ className, title, extra, footer, cardBodyClassName, children }) => {
    return (
        <div className={"card " + className}>
        	<div className="clearfix">
        		<div className="card-title">{ title }</div>
        		{extra}
        	</div>
			<div className={"card-body " + cardBodyClassName}>
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
