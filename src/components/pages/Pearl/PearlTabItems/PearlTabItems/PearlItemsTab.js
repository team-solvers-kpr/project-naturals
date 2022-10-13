import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabPanel, TabList } from 'react-tabs';
import PearlTabItem from '../PearlTabItem/PearlTabItem';
import tabIcon1 from '../../../../../assests/pearl/tabicon-1.png';
import tabIcon2 from '../../../../../assests/pearl/tabicon-2.png';
import tabIcon3 from '../../../../../assests/pearl/tabicon-3.png';
import tabIcon4 from '../../../../../assests/pearl/tabicon-4.png';
import tabIcon5 from '../../../../../assests/pearl/tabicon-5.png';
import CustomButton from '../../../../shared/CustomButton/CustomButton';
import './PearlItemsTab.css'
import LoadingCards from '../../../../shared/LoadingCards/LoadingCards';

const PearlItemsTab = () => {

    const [pearlItems, setPearlItems] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/pearlProducts')
            .then(res => res.json())
            .then(data => setPearlItems
                (data))
    }, [])

    return (
        <center className="pearlItemsTab" >
            <h4 style={{ fontFamily: 'Source Sans Pro ,sans-serif', fontWeight: "bolder", color: "#c19e59", marginBottom: "20px" }}>Shop By Category</h4>
            <Tabs className="mb-5" >
                <TabList >
                    <Tab >
                        <img src={tabIcon1} alt="" className='pearlTabIcon' /> <br />
                        <span>Haircare</span>
                    </Tab>
                    <Tab >
                        <img src={tabIcon2} alt="" className='pearlTabIcon' /> <br />
                        Skincare
                    </Tab>
                    <Tab >
                        <img src={tabIcon3} alt="" className='pearlTabIcon' /> <br />
                        Bodycare
                    </Tab>
                    <Tab >
                        <img src={tabIcon4} alt="" className='pearlTabIcon' /> <br />
                        Organic Soap
                    </Tab>
                    <Tab >
                        <img src={tabIcon5} alt="" className='pearlTabIcon' /> <br />
                        Combo
                    </Tab>

                </TabList>

                {
                    pearlItems.length < 1 ? (<>
                        <LoadingCards />

                    </>) : (<>

                        <TabPanel className='container' >
                            <div className='row' data-aos="fade-in"
                                data-aos-duration="1000">
                                {
                                    pearlItems.filter(category => category.category === "haircare").slice(0, 8).map((pearlItem) =>
                                        <PearlTabItem key={pearlItem.id} pearlItem={pearlItem} />
                                    )
                                }
                            </div>
                        </TabPanel>

                        <TabPanel className='container'>
                            <div className='row' data-aos="fade-in" data-aos-duration="1000">
                                {
                                    pearlItems.filter(category => category.category === "skincare").slice(0, 8).map((pearlItem) =>
                                        <PearlTabItem key={pearlItem.id} pearlItem={pearlItem} />
                                    )
                                }
                            </div>
                        </TabPanel>

                        <TabPanel className='container'>
                            <div className='row' data-aos="fade-in" data-aos-duration="1000">
                                {
                                    pearlItems.filter(category => category.category === "bodycare").slice(0, 8).map((pearlItem) =>
                                        <PearlTabItem key={pearlItem.id} pearlItem={pearlItem} />
                                    )
                                }
                            </div>
                        </TabPanel>
                        <TabPanel className='container'>
                            <div className='row' data-aos="fade-in" data-aos-duration="1000">
                                {
                                    pearlItems.filter(category => category.category === "soap").slice(0, 8).map((pearlItem) =>
                                        <PearlTabItem key={pearlItem.id} pearlItem={pearlItem} />
                                    )
                                }
                            </div>
                        </TabPanel>
                        <TabPanel className='container'>
                            <div className='row' data-aos="fade-in" data-aos-duration="1000">
                                {
                                    pearlItems.filter(category => category.category === "combo").slice(0, 8).map((pearlItem) =>
                                        <PearlTabItem key={pearlItem.id} pearlItem={pearlItem} />
                                    )
                                }
                            </div>
                        </TabPanel>
                    </>)


                }
            </Tabs>
            <CustomButton title="VIEW ALL" color="#ffffff" border="2px solid #00a651" backgroundColor="#00a651" />
        </center>
    );
};

export default PearlItemsTab;