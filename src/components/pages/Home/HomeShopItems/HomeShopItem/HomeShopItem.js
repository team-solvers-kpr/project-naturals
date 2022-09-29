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
    >

      <Modal.Header closeButton />

      <Modal.Body >
        <div className="card mb-3" >
          <div className="row g-0">
            <div className="col-lg-5 col-md-12" >
              {
                props.shopitem.discount > 0 ? (
                  <div className='discount-tag-modal'>
                    <span className='ps-2'>{props.shopitem.discount}% off</span>

                  </div>
                ) :
                  (
                    <>
                    </>
                  )
              }
              <div id="carouselExampleControls" className="carousel slide carousel-modal" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={props.shopitem.img1} className="w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={props.shopitem.img2} className="w-100" alt="..." />
                  </div>
                </div>
                {
                  props.shopitem.img2 ? (
                    <>
                      <button className="carousel-control-prev modal-carousel-btn" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button className="carousel-control-next modal-carousel-btn" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </>
                  ) : (
                    <>
                    </>
                  )
                }
              </div>
            </div>
            <div className="col-lg-7 col-md-12" >
              <div className="card-body">
                <h2 style={{ fontWeight: "bolder" }} className="card-title">{props.shopitem.itemName}</h2>

                <p className="card-text" style={{ fontFamily: "Noto Sans Bengali", fontSize: "20px" }}><small className="text-muted">{props.shopitem.quantity}</small></p>

                <div style={{ color: "#dbdbdb", display: "flex", alignItems: "center" }}>
                  <ReactStars
                    count={5}
                    activeColor="orange"
                    isHalf={true}
                    size={20}
                    value={props.shopitem.rating}
                    edit={false}
                    fullIcon={<ImStarFull />}
                    halfIcon={<ImStarHalf />}
                    emptyIcon={<ImStarEmpty />}
                  />
                  <span className='ms-1'>{props.shopitem.rating}</span>
                </div>
                <div>
                  {
                    props.shopitem.discount ? (
                      <div className='d-flex'>
                        <p className="card-text homeTabItemCardPriceDiscounted-modal">৳{props.shopitem.price}</p>
                        <p className="card-text homeTabItemCardPrice-modal ms-4">৳{Math.round(props.shopitem.price - (props.shopitem.price * props.shopitem.discount / 100))}</p>
                      </div>
                    ) :
                      (
                        <p className="card-text homeTabItemCardPrice-modal ">৳{props.shopitem.price}</p>
                      )
                  }
                </div>
                <p className='homeTabItemCardDesc-modal'>
                  {props.shopitem.desc}
                </p>
                <div className='d-flex'>
                  <div>
                    <CounterButton amount={amount} setAmount={setAmount} />
                  </div>
                  <div className="ms-3">
                    <CustomButton title="Add to Cart" backgroundColor=" #ffffff" color="#00a651" border="2px solid #00a651" icon={<IoCartOutline />} />
                  </div>
                </div>
                <hr />
                <h6 style={{ fontFamily: "Source Sans Pro, sans-serif" }}>Categories: {props.shopitem.category}</h6>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>

    </Modal >
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
    <div className="col-md-6 col-xl-3">
      <div className="card mb-4 homeTabItemCard">
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
          {

            quantity ? (
              <>
                <p className='text-muted homeTabItemCardSize'>{quantity}</p>
              </>
            ) : (
              <>
                <p style={{ visibility: "hidden" }}>Quantity Unavailable</p>
              </>
            )
          }

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
            <CustomButton title="Add to Cart" backgroundColor=" #ffffff" color="#00a651" border="2px solid #00a651" icon={<IoCartOutline />} />

            <div className='home-cart-eye-div' onClick={() => setModalShow(true)} >
              <AiFillEye style={{ fontSize: "25px", }} />

            </div>
            <MyVerticallyCenteredModal
              shopitem={shopItem}
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