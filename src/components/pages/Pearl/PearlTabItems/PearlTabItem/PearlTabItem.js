import React from 'react';
import './PearlTabItem.css';
import { ImStarFull } from "@react-icons/all-files/im/ImStarFull";
import { ImStarHalf } from "@react-icons/all-files/im/ImStarHalf";
import { ImStarEmpty } from "@react-icons/all-files/im/ImStarEmpty";
import { IoCartOutline } from "@react-icons/all-files/io5/IoCartOutline";
import { AiFillEye } from "@react-icons/all-files/ai/AiFillEye";
import ReactStars from 'react-rating-stars-component';
import Button from '../../../../shared/Button/Button';


const PearlTabItem = ({ pearlItem }) => {
    const { img, name, size, price, rating } = pearlItem

    return (
        <div className="col-md-3">
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
                        <Button title={"Add to Cart"} icon={<IoCartOutline />} />
                        <div className='cart-eye-div'>
                            <AiFillEye style={{ fontSize: "30px", }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PearlTabItem;