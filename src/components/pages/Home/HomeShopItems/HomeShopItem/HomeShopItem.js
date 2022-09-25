import React, { useState } from 'react';
import CustomButton from '../../../../shared/CustomButton/CustomButton';
import { IoCartOutline } from "@react-icons/all-files/io5/IoCartOutline";
import ReactStars from 'react-rating-stars-component';
import { ImStarFull } from '@react-icons/all-files/im/ImStarFull';
import { ImStarHalf } from '@react-icons/all-files/im/ImStarHalf';
import { ImStarEmpty } from '@react-icons/all-files/im/ImStarEmpty';
import { AiFillEye } from '@react-icons/all-files/ai/AiFillEye';
import { Modal } from 'react-bootstrap';
import './HomeShopItem.css';
import CounterButton from '../../../../shared/CounterButton/CounterButton';



const MyVerticallyCenteredModal = (props) => {
  const [amount, setAmount] = useState(0);
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      closeButton
    >

      <Modal.Header closeButton />

      <Modal.Body >
        <div className="card mb-3" >
          <div className="row g-0">
            <div className="col-lg-5 col-md-6" >
              {
                props.shopItem.discount > 0 ? (
                  <div className='discount-tag-modal'>
                    <span className='ps-2'>{props.shopItem.discount}% off</span>
                  </div>
                ) : <>
                </>
              }
              <img src={props.shopItem.img1} className="img-fluid" alt="..." />
            </div>
            <div className="col-lg-7 col-md-6" >
              <div className="card-body">
                <h2 style={{ fontWeight: "bolder" }} className="card-title">{props.shopItem.itemName}</h2>

                <p className="card-text"><small className="text-muted">{props.shopItem.size}</small></p>

                <div style={{ color: "#dbdbdb", display: "flex", alignItems: "center" }}>
                  <ReactStars
                    count={5}
                    activeColor="orange"
                    isHalf={true}
                    size={20}
                    value={props.shopItem.rating}
                    edit={false}
                    fullIcon={<ImStarFull />}
                    halfIcon={<ImStarHalf />}
                    emptyIcon={<ImStarEmpty />}
                  />
                  <span className='ms-1'>{props.shopItem.rating}</span>
                </div>
                <div>
                  {
                    props.shopItem.discount ? (
                      <div className='d-flex'>
                        <p className="card-text homeTabItemCardPriceDiscounted-modal">৳{props.shopItem.price}</p>
                        <p className="card-text homeTabItemCardPrice-modal ms-4">৳{props.shopItem.price - (props.shopItem.price * props.shopItem.discount / 100)}</p>
                      </div>
                    ) :
                      (
                        <p className="card-text homeTabItemCardPrice-modal ">৳{props.shopItem.price}</p>
                      )
                  }
                </div>
                <p className='homeTabItemCardDesc-modal'>
                  {props.shopItem.desc}
                </p>
                <CounterButton amount={amount} setAmount={setAmount} />
                <CustomButton title="Add to Cart" backgroundColor=" #ffffff" color="#00a651" icon={<IoCartOutline />} />
                <hr />
                <h6>Categories: {props.shopItem.category}</h6>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>

    </Modal>
  )
}

const HomeShopItem = ({ shopItem }) => {
  const { img1, img2, itemName, quantity, price, rating, discount } = shopItem
  const [hover, setHover] = useState(img1);
  const [modalShow, setModalShow] = useState(false);

  const HoverIn = () => {
    setHover(img2)
  }
  const HoverOut = () => {
    setHover(img1)
  }

  return (
    <div className="col-md-6 col-xl-3 ">
      <div className="card mb-4 homeTabItemCard ">
        {
          discount > 0 ? (
            <div className='discount-tag'>
              <span className='ps-2'>{discount}% off</span>
            </div>
          ) : <>
          </>
        }
        {img1 && img2 ? (
          <img
            onMouseEnter={() => {
              HoverIn()
            }}
            onMouseLeave={() => {
              HoverOut()
            }}

            src={hover} className="card-img-top homeTabItemCard-img" alt="..." />
        ) :
          <img
            src={hover} className="card-img-top homeTabItemCard-img" alt="..." />
        }
        <div className="card-body">
          <h6 className="card-title homeTabItemCardName">{itemName}</h6>
          <p className='text-muted homeTabItemCardSize'>{quantity}</p>

          <div className='homeTabItemCardPriceAndRating'>
            <div>
              {
                discount ? (
                  <div className='d-flex'>
                    <div>
                      <p className="card-text homeTabItemCardPriceDiscounted">৳{price}</p>
                    </div>
                    <div>
                      <p className="card-text homeTabItemCardPrice ms-2">৳{Math.round(price - (price * discount / 100))}</p>
                    </div>
                  </div>
                ) :
                  (
                    <p className="card-text homeTabItemCardPrice">৳{price}</p>
                  )
              }
            </div>
            <div style={{ color: "#dbdbdb", display: "flex", alignItems: "center" }}>
              <ReactStars
                count={5}
                activeColor="orange"
                isHalf={true}
                size={20}
                value={rating}
                edit={false}
                fullIcon={<ImStarFull />}
                halfIcon={<ImStarHalf />}
                emptyIcon={<ImStarEmpty />}
              />
              <span className='ms-1'>{rating}</span>
            </div>
          </div>
          <div className='homeTabItemCardCartAndEye'>
            <CustomButton title="Add to Cart" backgroundColor=" #ffffff" color="#00a651" icon={<IoCartOutline />} />

            <div className='home-cart-eye-div' onClick={() => setModalShow(true)} >
              <AiFillEye style={{ fontSize: "30px", }} />

            </div>
            <MyVerticallyCenteredModal
              shopItem={shopItem}
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div>
        </div>

      </div>
    </div>

  );
};

export default HomeShopItem;