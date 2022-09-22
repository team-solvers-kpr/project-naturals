import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import CustomButton from '../../../../shared/CustomButton/CustomButton';
import HomeShopItem from '../HomeShopItem/HomeShopItem';
import './HomeShopItems.css';

const HomeShopItems = () => {
    const [shopItems, setShopItems] = useState([])
    useEffect(() => {
        fetch('HomeShopItems.json')
            .then(res => res.json())
            .then(data => setShopItems(data))
    }, [])

    return (
        <div className='container-fluid mt-5'>
            <h2 className='text-center mb-5'><span style={{
                fontWeight: "bold", marginTop: "30px", fontFamily: 'Source Sans Pro, sans-serif', fontSize: "25px"
            }}>Shop From</span><span style={{
                fontFamily: 'Source Sans Pro, sans-serif', fontSize: "25px"
            }}> nature</span> </h2>
            <center >

                <Tabs className="mb-5" >
                    <TabList >
                        <Tab className='homeTab' >
                            <img alt="" className='pearlTabIcon' /> <br />
                            <span> Honey & Dates </span>
                        </Tab>
                        <Tab className='homeTab'>
                            <img alt="" className='pearlTabIcon' /> <br />
                            Finest Herb
                        </Tab>
                        <Tab className='homeTab'>
                            <img alt="" className='pearlTabIcon' /> <br />
                            Nut & Seeds
                        </Tab>
                        <Tab className='homeTab'>
                            <img alt="" className='pearlTabIcon' /> <br />
                            Pickles & Spices
                        </Tab>
                        <Tab className='homeTab'>
                            <img alt="" className='pearlTabIcon' /> <br />
                            Noboshokti
                        </Tab>
                        <Tab className='homeTab'>
                            <img alt="" className='pearlTabIcon' /> <br />
                            Organic Oil & Ghee
                        </Tab>
                        <Tab className='homeTab'>
                            <img alt="" className='pearlTabIcon' /> <br />
                            Gift Combo
                        </Tab>
                        <Tab className='homeTab'>
                            <img alt="" className='pearlTabIcon' /> <br />
                            Energy Essentials
                        </Tab>
                        <Tab className='homeTab'>
                            <img alt="" className='pearlTabIcon' /> <br />
                            Hair & Skin Care
                        </Tab>
                        <Tab className='homeTab'>
                            <img alt="" className='pearlTabIcon' /> <br />
                            All Natural
                        </Tab>

                    </TabList>

                    <TabPanel className='container-fluid'>
                        <div className='row'>
                            {
                                shopItems.filter(category => category.category === "Honey & Dates").slice(0, 8).map((shopItem) =>
                                    <HomeShopItem key={shopItem.id} shopItem={shopItem} />
                                )
                            }
                        </div>
                    </TabPanel>

                    <TabPanel className='container'>
                        <div className='row'>

                        </div>
                    </TabPanel>

                    <TabPanel className='container'>
                        <div className='row'>

                        </div>
                    </TabPanel>
                    <TabPanel className='container'>
                        <div className='row'>


                        </div>
                    </TabPanel>
                    <TabPanel className='container'>
                        <div className='row'>

                        </div>
                    </TabPanel>
                    <TabPanel className='container'>
                        <div className='row'>

                        </div>
                    </TabPanel>
                    <TabPanel className='container'>
                        <div className='row'>

                        </div>
                    </TabPanel>
                    <TabPanel className='container'>
                        <div className='row'>

                        </div>
                    </TabPanel>
                    <TabPanel className='container'>
                        <div className='row'>

                        </div>
                    </TabPanel>
                    <TabPanel className='container'>
                        <div className='row'>

                        </div>
                    </TabPanel>
                </Tabs>
                <CustomButton title="VIEW ALL" color="#ffffff" backgroundColor="#00a651" />
            </center>

        </div>
    );
};

export default HomeShopItems;