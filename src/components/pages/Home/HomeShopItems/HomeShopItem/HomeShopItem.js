import React, { useState } from 'react';

const HomeShopItem = ({ shopItem }) => {
  const { img1, img2, itemName, quantity, price } = shopItem
  const [hover, setHover] = useState(img1);

  const HoverIn = () => {
    setHover(img2)
  }
  const HoverOut = () => {
    setHover(img1)
  }

  return (
    <div className="col-md-6 col-xl-3">
      <div className="card mb-4 pearlTabItemCard">
        {img1 && img2 ? (
          <img
            onMouseEnter={() => {
              HoverIn()
            }}
            onMouseLeave={() => {
              HoverOut()
            }}

            src={hover} className="card-img-top pearlTabItemCard-img" alt="..." />
        ) :
          <img
            src={hover} className="card-img-top pearlTabItemCard-img" alt="..." />
        }
        <div className="card-body">
          <h6 className="card-title pearlTabItemCardName">{itemName}</h6>
          <p className='text-muted pearlTabItemCardSize'>{quantity}</p>

          <div className='pearlTabItemCardPriceAndRating'>
            <div>
              <p className="card-text pearlTabItemCardPrice">৳{price}</p>
            </div>
            <div style={{ color: "#dbdbdb", display: "flex", alignItems: "center" }}>


            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomeShopItem;