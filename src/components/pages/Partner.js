import React from 'react';

function Banner(props) {
  const bannerStyle = {
    maxWidth: '100%',
  };

  return (
    <div className="banner">
      <img src={require('../../assets/images/' + props.imageUrl)} alt={props.altText} style={bannerStyle} />
    </div>
  );
}

function Partner(props) {
  const partnerStyle = {
    textAlign: 'center',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    maxWidth: '300px',
  };

  const imageStyle = {
    maxWidth: '100px',
    height: 'auto',
    borderRadius: '50%',
  };

  return (
    <div className="partner" style={partnerStyle}>
      <img src={require('../../assets/images/' + props.logoUrl)} alt={props.partnerName} style={imageStyle} />
      <p><strong>{props.partnerName}</strong></p>
      <p>{props.description}</p>
    </div>
  );
}

export default function PartnersPage() {
  const partnersPageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
  };

  return (
    <div className="partners-page" style={partnersPageStyle}>
      <Banner imageUrl="Rectangle 6.png" altText="Banner 1" />
      <Banner imageUrl="Group 15.png" altText="Banner 2" />
      <Banner imageUrl="Group 16.png" altText="Banner 3" />
      
      <Partner
        logoUrl="Rectangle 22.png"
        partnerName="Partner 1"
        description="Description for Partner 1"
      />

      <Partner
        logoUrl="Rectangle 23.png"
        partnerName="Partner 2"
        description="Description for Partner 2"
      />

      <Partner
        logoUrl="Rectangle 24.png"
        partnerName="Partner 3"
        description="Description for Partner 3"
      />
    </div>
  );
}
