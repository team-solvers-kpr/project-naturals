import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import CustomButton from '../../../../shared/CustomButton/CustomButton';
import HomeShopItem from '../HomeShopItem/HomeShopItem';
import './HomeShopItems.css';
import icon1 from '../../../../../assests/shopItem/Honey-Dates.jpeg'
import icon2 from '../../../../../assests/shopItem/Finest-Herbs.jpeg'
import icon3 from '../../../../../assests/shopItem/Nuts-Seeds.jpeg'
import icon4 from '../../../../../assests/shopItem/Pickles-Spices.jpeg'
import icon5 from '../../../../../assests/shopItem/icongr.jpg'
import icon6 from '../../../../../assests/shopItem/Organic-Oil-Ghee-1-01.jpg'
import icon7 from '../../../../../assests/shopItem/Gift-combo2.jpeg'
import icon8 from '../../../../../assests/shopItem/Energy-Essentials.jpeg'
import icon9 from '../../../../../assests/shopItem/Hair-Skin-care-2.jpeg'
import icon10 from '../../../../../assests/shopItem/All-Natural.jpeg'
import { Link } from 'react-router-dom';
import LoadingCards from '../../../../shared/LoadingCards/LoadingCards';

const HomeShopItems = () => {
    const [shopItems, setShopItems] = useState([])
    useEffect(() => {
        fetch('https://project-naturals-backend.onrender.com/allNaturalsProducts')
            .then(res => res.json())
            .then(data => setShopItems(data))
    }, [])

    return (
        <div className='container-fluid mt-5 homeShopItemsContainer'>
            <h2 className='text-center mb-5'><span style={{
                fontWeight: "bold", marginTop: "30px", fontFamily: 'Source Sans Pro, sans-serif', fontSize: "25px"
            }}>Shop From</span><span style={{
                fontFamily: 'Source Sans Pro, sans-serif', fontSize: "25px"
            }}> nature</span> </h2>
            <center >

                <Tabs className="mb-5" >
                    <TabList className="homeTabsContainer">
                        <Tab className='homeTab' >
                            <img
                                src={icon1}
                                alt=""
                                className='pearlTabIcon'
                            />
                            <br />
                            <span> Honey & Dates </span>
                        </Tab>
                        <Tab className='homeTab'>
                            <img src={icon2}
                                alt=""
                                className='pearlTabIcon' />
                            <br />
                            Finest Herb
                        </Tab>
                        <Tab className='homeTab'>
                            <img src={icon3}
                                alt=""
                                className='pearlTabIcon' />
                            <br />
                            Nut & Seeds
                        </Tab>
                        <Tab className='homeTab'>
                            <img src={icon4}
                                alt=""
                                className='pearlTabIcon' />
                            <br />
                            Pickles & Spices
                        </Tab>
                        <Tab className='homeTab'>
                            <img src={icon5}
                                alt=""
                                className='pearlTabIcon' />
                            <br />
                            Noboshokti
                        </Tab>
                        <Tab className='homeTab'>
                            <img src={icon6}
                                alt=""
                                className='pearlTabIcon' />
                            <br />
                            Organic Oil & Ghee
                        </Tab>
                        <Tab className='homeTab'>
                            <img src={icon7}
                                alt=""
                                className='pearlTabIcon' />
                            <br />
                            Gift Combo
                        </Tab>
                        <Tab className='homeTab'>
                            <img src={icon8}
                                alt=""
                                className='pearlTabIcon' />
                            <br />
                            Energy Essentials
                        </Tab>
                        <Tab className='homeTab'>
                            <img src={icon9}
                                alt=""
                                className='pearlTabIcon' />
                            <br />
                            Hair & Skin Care
                        </Tab>
                        <Tab className='homeTab'>
                            <img src={icon10}
                                alt=""
                                className='pearlTabIcon' />
                            <br />
                            All Natural
                        </Tab>

                    </TabList>
                    {
                        shopItems.length < 1 ? (<>
                            <LoadingCards />

                        </>) : (<>


                            <TabPanel className='homeTabItems'>
                                <div className='row mb-3' data-aos="fade-in" data-aos-duration="3000"  >
                                    {
                                        shopItems.filter(category => category.category === "Honey & Dates").slice(0, 8).map((shopItem) =>
                                            <HomeShopItem key={shopItem._id} shopItem={shopItem} />
                                        )
                                    }
                                </div>
                                <Link style={{ textDecoration: "none", display: 'inline-block' }} to="/products/Honey&Dates">
                                    <CustomButton title="VIEW ALL" color="#ffffff" backgroundColor="#00a651" border="2px solid #00a651" />
                                </Link>
                            </TabPanel>
                            <TabPanel className='homeTabItems'>
                                <div className='row mb-3' data-aos="fade-in" data-aos-duration="1000"  >
                                    {
                                        shopItems.filter(category => category.category === "Finest Herb").slice(0, 8).map((shopItem) =>
                                            <HomeShopItem key={shopItem._id} shopItem={shopItem} />
                                        )
                                    }
                                </div>
                                <Link style={{ textDecoration: "none", display: 'inline-block' }} to="/products/FinestHerb"><CustomButton title="VIEW ALL" color="#ffffff" backgroundColor="#00a651" border="2px solid #00a651" />
                                </Link>
                            </TabPanel>
                            <TabPanel className='homeTabItems'>
                                <div className='row mb-3' data-aos="fade-in" data-aos-duration="1000"  >
                                    {
                                        shopItems.filter(category => category.category === "Nut & Seeds").slice(0, 8).map((shopItem) =>
                                            <HomeShopItem key={shopItem._id} shopItem={shopItem} />
                                        )
                                    }
                                </div>
                                <Link style={{ textDecoration: "none", display: 'inline-block' }} to="/products/Nut&Seeds">
                                    <CustomButton title="VIEW ALL" color="#ffffff" backgroundColor="#00a651" border="2px solid #00a651" />
                                </Link>
                            </TabPanel>
                            <TabPanel className='homeTabItems'>
                                <div className='row mb-3' data-aos="fade-in" data-aos-duration="1000"  >
                                    {
                                        shopItems.filter(category => category.category === "Pickles & Spices").slice(0, 8).map((shopItem) =>
                                            <HomeShopItem key={shopItem._id} shopItem={shopItem} />
                                        )
                                    }
                                </div>
                                <Link style={{ textDecoration: "none", display: 'inline-block' }} to="/products/Pickles&Spices">
                                    <CustomButton title="VIEW ALL" color="#ffffff" backgroundColor="#00a651" border="2px solid #00a651" />
                                </Link>
                            </TabPanel>
                            <TabPanel className='homeTabItems'>
                                <div className='row mb-3' data-aos="fade-in" data-aos-duration="1000"  >
                                    {
                                        shopItems.filter(category => category.category === "Noboshokti").slice(0, 8).map((shopItem) =>
                                            <HomeShopItem key={shopItem._id} shopItem={shopItem} />
                                        )
                                    }
                                </div>
                                <Link style={{ textDecoration: "none", display: 'inline-block' }} to="/products/Noboshokti"><CustomButton title="VIEW ALL" color="#ffffff" backgroundColor="#00a651" border="2px solid #00a651" />
                                </Link>
                            </TabPanel>
                            <TabPanel className='homeTabItems'>
                                <div className='row mb-3' data-aos="fade-in" data-aos-duration="1000"  >
                                    {
                                        shopItems.filter(category => category.category === "Organic Oil & Ghee").slice(0, 8).map((shopItem) =>
                                            <HomeShopItem key={shopItem._id} shopItem={shopItem} />
                                        )
                                    }
                                </div>
                                <Link style={{ textDecoration: "none", display: 'inline-block' }} to="/products/OrganicOil&Ghee"><CustomButton title="VIEW ALL" color="#ffffff" backgroundColor="#00a651" border="2px solid #00a651" />
                                </Link>
                            </TabPanel>
                            <TabPanel className='homeTabItems'>
                                <div className='row mb-3' data-aos="fade-in" data-aos-duration="1000"  >
                                    {
                                        shopItems.filter(category => category.category === "Gift Combo").slice(0, 8).map((shopItem) =>
                                            <HomeShopItem key={shopItem._id} shopItem={shopItem} />
                                        )
                                    }
                                </div>

                                <Link style={{ textDecoration: "none", display: 'inline-block' }} to="/products/GiftCombo"><CustomButton title="VIEW ALL" color="#ffffff" backgroundColor="#00a651" border="2px solid #00a651" />
                                </Link>
                            </TabPanel>
                            <TabPanel className='homeTabItems'>
                                <div className='row mb-3' data-aos="fade-in" data-aos-duration="1000"  >
                                    {
                                        shopItems.filter(category => category.category === "Energy Essentials").slice(0, 8).map((shopItem) =>
                                            <HomeShopItem key={shopItem._id} shopItem={shopItem} />
                                        )
                                    }
                                </div>
                                <Link style={{ textDecoration: "none", display: 'inline-block' }} to="/products/EnergyEssentials"><CustomButton title="VIEW ALL" color="#ffffff" backgroundColor="#00a651" border="2px solid #00a651" />
                                </Link>
                            </TabPanel>
                            <TabPanel className='homeTabItems'>
                                <div className='row mb-3' data-aos="fade-in" data-aos-duration="1000"  >
                                    {
                                        shopItems.filter(category => category.category === "Hair & Skin Care").slice(0, 8).map((shopItem) =>
                                            <HomeShopItem key={shopItem._id} shopItem={shopItem} />
                                        )
                                    }
                                </div>
                                <Link style={{ textDecoration: "none", display: 'inline-block' }} to="/products/Hair&SkinCare"><CustomButton title="VIEW ALL" color="#ffffff" backgroundColor="#00a651" border="2px solid #00a651" />
                                </Link>
                            </TabPanel>
                            <TabPanel className='homeTabItems' >
                                <div className='row' data-aos="fade-in"
                                    data-aos-duration="1000">
                                    {
                                        shopItems.map(shopItem => ({ shopItem, sort: Math.random() })).sort((a, b) => a.sort - b.sort).slice(0, 8).map(({ shopItem }) =>
                                            <HomeShopItem key={shopItem._id} shopItem={shopItem} />
                                        )
                                    }
                                </div>
                                <Link style={{ textDecoration: "none", display: 'inline-block' }} to="/products"><CustomButton title="VIEW ALL" color="#ffffff" backgroundColor="#00a651" border="2px solid #00a651" />
                                </Link>
                            </TabPanel>
                        </>)
                    }
                </Tabs>
            </center>

        </div>
    );
};

export default HomeShopItems;