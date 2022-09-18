import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const PearlItemsTab = () => {

    const [pearlItems, setPearlItems] = useState([])
    useEffect(() => {
        fetch('PearlTabItems.json')
            .then(res => res.json())
            .then(data => setPearlItems
                (data))
    }, [])

    return (
        <center >
            <Tabs>

                <Tab>Haircare</Tab>
                <Tab >Skincare</Tab>
                <Tab>Bodycare</Tab>
                <Tab>Organic Soap</Tab>
                <Tab>Combo</Tab>


                <TabPanel className='container'>
                    <div className='row'>
                        {
                            pearlItems.map((pearlItem) =>
                                <div key={pearlItem.id} className="col-md-3">
                                    <div class="card">
                                        <img width="100%" src={pearlItem.img} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">{pearlItem.name}</h5>
                                            <p class="card-text">{pearlItem.price}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <p>
                        2nd Tab
                    </p>
                </TabPanel>
                <TabPanel>
                    <p>
                        3rd Tab
                    </p>
                </TabPanel>
                <TabPanel>
                    <p>4th Tab</p>
                </TabPanel>
                <TabPanel>
                    <p>5th Tab</p>
                </TabPanel>
            </Tabs>
        </center>
    );
};

export default PearlItemsTab;