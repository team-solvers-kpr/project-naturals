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



const MyVerticallyCenteredModal = (props) => {

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
                <div class="card mb-3" >
                    <div class="row g-0">
                        <div class="col-lg-5 col-md-6" >
                            <img src={props.pearlItem.img} class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-lg-7 col-md-6" >
                            <div class="card-body">
                                <h2 style={{ fontWeight: "bolder" }} class="card-title">{props.pearlItem.name}</h2>

                                <p class="card-text"><small class="text-muted">{props.pearlItem.size}</small></p>

                                <div style={{ color: "#dbdbdb", display: "flex", alignItems: "center" }}>
                                    <ReactStars
                                        count={5}
                                        activeColor="orange"
                                        isHalf={true}
                                        size={20}
                                        value={props.pearlItem.rating}
                                        edit={false}
                                        fullIcon={<ImStarFull />}
                                        halfIcon={<ImStarHalf />}
                                        emptyIcon={<ImStarEmpty />}
                                    />
                                    <span className='ms-1'>{props.pearlItem.rating}</span>
                                </div>
                                <h3 className='pearlTabItemCardPrice mt-4 mb-4'>৳{props.pearlItem.price}</h3>
                                <CustomButton title="Add to Cart" backgroundColor=" #ffffff" color="#00a651" icon={<IoCartOutline />} />
                                <hr />
                                <h6>Categories: {props.pearlItem.category}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>

        </Modal>
    )
}



const PearlTabItem = ({ pearlItem }) => {
    const { img, name, size, price, rating } = pearlItem
    const [modalShow, setModalShow] = useState(false);
    return (
        <div className="col-md-6 col-xl-3">
            <div class="card mb-4 pearlTabItemCard">
                <img src={img} class="card-img-top pearlTabItemCard-img" alt="..." />
                <div class="card-body">
                    <h6 class="card-title pearlTabItemCardName">{name}</h6>
                    <p className='text-muted pearlTabItemCardSize'>{size}</p>

                    <div className='pearlTabItemCardPriceAndRating'>
                        <div>
                            <p class="card-text pearlTabItemCardPrice">৳{price}</p>
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
                        <CustomButton title="Add to Cart" backgroundColor=" #ffffff" color="#00a651" icon={<IoCartOutline />} />

                        <div className='cart-eye-div' onClick={() => setModalShow(true)} >
                            <AiFillEye style={{ fontSize: "30px", }} />

                        </div>
                        <MyVerticallyCenteredModal
                            pearlItem={pearlItem}
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