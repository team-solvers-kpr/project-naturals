import React from 'react';
import './PearlTabItem.css';
import { ImStarFull } from "@react-icons/all-files/im/ImStarFull";
import { ImStarHalf } from "@react-icons/all-files/im/ImStarHalf";
import { ImStarEmpty } from "@react-icons/all-files/im/ImStarEmpty";
import { IoCartOutline } from "@react-icons/all-files/io5/IoCartOutline";
import { AiFillEye } from "@react-icons/all-files/ai/AiFillEye";
import ReactStars from 'react-rating-stars-component';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import CustomButton from '../../../../shared/CustomButton/CustomButton';
import CounterButton from '../../../../shared/CounterButton/CounterButton';
import { addToCart, selectCart } from '../../../../../redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';



const MyVerticallyCenteredModal = (props) => {
    const [amount, setAmount] = useState(1);
    const cart = useSelector(selectCart);
    const _id = props.pearlitem._id;
    const dispatch = useDispatch();
    const {
        img1, itemName, price, discount,
    } = props.pearlitem;


    const add = () => {


        // create cart product
        const cartProduct = {
            _id,
            itemName,
            img1,
            price,
            discount,
            amount,
            quantityPrice: Math.round(price - (price * discount / 100)) * amount,

        };

        // add the product to our cart in the store
        dispatch(addToCart({ cartProduct }));

        // show success message
        toast.success(`${itemName} সফলভাবে কার্টে যোগ করা হয়েছে`)
    };
    return (
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            closeButton
        >

            <Modal.Header closeButton />

            <Modal.Body>
                <div className="card mb-3" >
                    <div className="row g-0">
                        <div className="col-lg-5 col-md-6 " >
                            {
                                props.pearlitem.discount > 0 ? (
                                    <div className='discount-tag-modal'>
                                        <span className='ps-2'>{props.pearlitem.discount}% off</span>

                                    </div>
                                ) :
                                    (
                                        <>
                                            {
                                                cart.find(element => element._id === _id) ? (<div className='cart-added-tag-1-modal'>
                                                    <span className='ps-2'>Added to Cart</span>
                                                </div>) : (<>
                                                </>)
                                            }
                                        </>
                                    )
                            }
                            {
                                props.pearlitem.discount > 0 ? (
                                    <>
                                        {
                                            cart.find(element => element._id === _id) ? (<div className='cart-added-tag-2-modal'>
                                                <span className='ps-2'>Added to Cart</span>
                                            </div>) : (<>
                                            </>)
                                        }
                                    </>
                                ) :
                                    (
                                        <>
                                        </>
                                    )
                            }
                            <img src={props.pearlitem.img1} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-lg-7 col-md-6" >
                            <div className="card-body">
                                <h2 style={{ fontWeight: "bolder" }} className="card-title">{props.pearlitem.itemName}</h2>

                                <p className="card-text"><small className="text-muted">{props.pearlitem.size}</small></p>

                                <div style={{ color: "#dbdbdb", display: "flex", alignItems: "center" }}>
                                    <ReactStars
                                        count={5}
                                        activeColor="orange"
                                        isHalf={true}
                                        size={20}
                                        value={props.pearlitem.rating}
                                        edit={false}
                                        fullIcon={<ImStarFull />}
                                        halfIcon={<ImStarHalf />}
                                        emptyIcon={<ImStarEmpty />}
                                    />
                                    <span className='ms-1'>{props.pearlitem.rating}</span>
                                </div>
                                <h3 className='pearlTabItemCardPrice mt-4 mb-4'>৳{props.pearlitem.price}</h3>
                                <div className='d-flex'>
                                    <div>
                                        <CounterButton amount={amount} setAmount={setAmount} />
                                    </div>
                                    <div className="ms-3">
                                        <CustomButton onClick={add} title="Add to Cart" backgroundColor=" #ffffff" color="#00a651" border="2px solid #00a651" icon={<IoCartOutline />} />
                                    </div>
                                </div>
                                <hr />
                                <h6 style={{ fontFamily: "Source Sans Pro, sans-serif" }}>Categories: {props.pearlitem.category}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>

        </Modal>
    )
}

const PearlTabItem = ({ pearlItem }) => {
    const { img1, itemName, size, price, rating, discount } = pearlItem
    const [modalShow, setModalShow] = useState(false);

    const cart = useSelector(selectCart);
    const amount = 1;
    const _id = pearlItem._id;
    const dispatch = useDispatch();

    const add = () => {
        // create cart product
        const cartProduct = {
            _id,
            itemName,
            img1,
            price,
            discount,
            amount,
            quantityPrice: Math.round(price - (price * discount / 100)) * amount,
        };

        // add the product to our cart in the store
        dispatch(addToCart({ cartProduct }));

        // show success message
        toast.success(`${itemName} সফলভাবে কার্টে যোগ করা হয়েছে`)
    };
    return (
        <div className="col-md-6 col-xl-3">
            <div className="card mb-4 pearlTabItemCard">
                {
                    discount > 0 ? (
                        <div className='discount-tag'>
                            <span className='ps-2'>{discount}% off</span>
                        </div>
                    ) : <>
                    </>
                }
                {
                    cart.find(element => element._id === _id) ? (<div className='cart-added-tag'>
                        <span className='ps-2'>Added to Cart</span>
                    </div>) : (<>
                    </>)
                }
                <img src={img1} className="card-img-top pearlTabItemCard-img" alt="..." />
                <div className="card-body">
                    <h6 className="card-title pearlTabItemCardName">{itemName}</h6>
                    <p className='text-muted pearlTabItemCardSize'>{size}</p>

                    <div className='pearlTabItemCardPriceAndRating'>
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
                    <div className='pearlTabItemCardCartAndEye'>
                        {
                            cart.find(element => element._id === _id) ? (<CustomButton title="VIEW CART" backgroundColor=" #00a651" color="#ffff" border="2px solid #00a651" />) : (<CustomButton onClick={add} title="ADD TO CART" backgroundColor=" #ffffff" color="#00a651" border="2px solid #00a651" icon={<IoCartOutline />} />)
                        }

                        <div className='pearl-cart-eye-div' onClick={() => setModalShow(true)} >
                            <AiFillEye style={{ fontSize: "25px", }} />

                        </div>
                        <MyVerticallyCenteredModal
                            pearlitem={pearlItem}
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PearlTabItem;