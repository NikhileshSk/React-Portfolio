import React from 'react';
import './PageHeader.scss'; // Assuming you are using a separate SCSS file for styles

function PageHeader({ headerText, icon }) {
  return (
    <section>
         <div className='page-header'>
      <h2>{headerText}</h2>
      <span className='page-header__icon'>{icon}</span> {/* Icon with a class for styling */}
    </div>
     <hr className='line' />
    </section>
  );
}

export default PageHeader;
