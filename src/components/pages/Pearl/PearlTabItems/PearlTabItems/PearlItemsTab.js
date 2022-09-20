import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabPanel, TabList } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './PearlItemsTab.css';
import PearlTabItem from '../PearlTabItem/PearlTabItem';
import tabIcon1 from '../../../../../assests/pearl/tabicon-1.png';
import tabIcon2 from '../../../../../assests/pearl/tabicon-2.png';
import tabIcon3 from '../../../../../assests/pearl/tabicon-3.png';
import tabIcon4 from '../../../../../assests/pearl/tabicon-4.png';
import tabIcon5 from '../../../../../assests/pearl/tabicon-5.png';
const PearlItemsTab = () => {

    const [pearlItems, setPearlItems] = useState([])
    useEffect(() => {
        fetch('PearlTabItems.json')
            .then(res => res.json())
            .then(data => setPearlItems
                (data))
    }, [])

    return (
        <center className="pearlItemsTab">
            <h4 style={{ fontFamily: 'Source Sans Pro ,sans-serif', fontWeight: "bolder", color: "#c19e59", marginBottom: "20px" }}>Shop By Category</h4>
            <Tabs >
                <TabList disabled  >
                    <Tab >
                        <img src={tabIcon1} alt="" /> <br />
                        <span>Haircare</span>
                    </Tab>
                    <Tab >
                        <img src={tabIcon2} alt="" /> <br />
                        Skincare
                    </Tab>
                    <Tab> <img src={tabIcon3} alt="" /> <br />
                        Bodycare
                    </Tab>
                    <Tab>
                        <img src={tabIcon4} alt="" /> <br />
                        Organic Soap
                    </Tab>
                    <Tab>
                        <img src={tabIcon5} alt="" /> <br />
                        Combo
                    </Tab>
                    <hr className='w-50 mb-5' />
                </TabList>


                <TabPanel className='container'>
                    <div className='row'>
                        {
                            pearlItems.filter(category => category.category === "haircare").slice(0, 8).map((pearlItem) =>
                                <PearlTabItem key={pearlItem.id} pearlItem={pearlItem} />
                            )
                        }
                    </div>
                </TabPanel>

                <TabPanel className='container'>
                    <div className='row'>
                        {
                            pearlItems.filter(category => category.category === "skincare").slice(0, 8).map((pearlItem) =>
                                <PearlTabItem key={pearlItem.id} pearlItem={pearlItem} />
                            )
                        }
                    </div>
                </TabPanel>

                <TabPanel className='container'>
                    <div className='row'>
                        {
                            pearlItems.filter(category => category.category === "bodycare").slice(0, 8).map((pearlItem) =>
                                <PearlTabItem key={pearlItem.id} pearlItem={pearlItem} />
                            )
                        }
                    </div>
                </TabPanel>
                <TabPanel className='container'>
                    <div className='row'>
                        {
                            pearlItems.filter(category => category.category === "soap").slice(0, 8).map((pearlItem) =>
                                <PearlTabItem key={pearlItem.id} pearlItem={pearlItem} />
                            )
                        }
                    </div>
                </TabPanel>
                <TabPanel className='container'>
                    <div className='row'>
                        {
                            pearlItems.filter(category => category.category === "combo").slice(0, 8).map((pearlItem) =>
                                <PearlTabItem key={pearlItem.id} pearlItem={pearlItem} />
                            )
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </center>
    );
};

export default PearlItemsTab;