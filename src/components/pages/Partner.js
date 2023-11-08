import React from 'react';
import './Partners.css'; // Import the CSS file

import topLeftImage from '../../assets/images/Vector.png';
import bottomLeftImage1 from '../../assets/images/Rectangle 22.png';
import bottomLeftImage2 from '../../assets/images/Rectangle 23.png';
import bottomLeftImage3 from '../../assets/images/Rectangle 24.png';
import topRightImage from '../../assets/images/Group 13.png';
import bottomLeftImage11 from '../../assets/images/Rectangle 22 (1).png';
import bottomLeftImage22 from '../../assets/images/Rectangle 23 (1).png';
import bottomLeftImage33 from '../../assets/images/Rectangle 24 (1).png';
import topRightImage1 from '../../assets/images/image 10.png';

function PartnersPage() {
  return (
    <div className="partners-page">
      <div className="partner-div" style={{ backgroundColor: '#00715D' }}>
        <p>Our Partners!</p>
        <img src={topLeftImage} alt="Top Left" className="top-left-image" />
      </div>
      <div className="partner-div" style={{ backgroundColor: '#ff8352' }}>
        <p>Daily Bread </p>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.</p>        <img src={bottomLeftImage1} alt="Bottom Left 1" className="bottom-left-image" />
        <img src={bottomLeftImage2} alt="Bottom Left 2" className="bottom-left-image" />
        <img src={bottomLeftImage3} alt="Bottom Left 3" className="bottom-left-image" />
        <img src={topRightImage} alt="Top Right" className="top-right-image" />
      </div>
      <div className="partner-div" style={{ backgroundColor: '#eef5f4' }}>
        <img src={bottomLeftImage11} alt="Bottom Left 3" className="bottom-left-image" />
        <img src={bottomLeftImage22} alt="Bottom Left 2" className="bottom-left-image" />
        <img src={bottomLeftImage33} alt="Bottom Left 1" className="bottom-left-image" />
        <img src={topRightImage1} alt="Top Right" className="top-right-image" />
      </div>
    </div>
  );
}

export default PartnersPage;
