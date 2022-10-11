import React, { useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { useState } from 'react';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import './FindStore.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const FindStore = () => {
    const [allData, setAllData] = useState([]);
    useEffect(() => {
        fetch('StoreData.json')
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [])

    const columns = [
        {
            dataField: 'id',
            text: 'SL NO',
        },
        {
            dataField: 'city',
            text: 'CITY',

        },
        {
            dataField: 'area',
            text: 'AREA',

        },
        {
            dataField: 'storeName',
            text: 'STORE NAME',
        }, {
            dataField: 'address',
            text: 'ADDRESS',

        }];

    const { SearchBar } = Search;

    return (
        <HelmetProvider>
            <Helmet>
                <title>Store Location: Naturals</title>
            </Helmet>
            <ToolkitProvider
                keyField="id"
                data={allData}
                columns={columns}
                search
            >

                {
                    props => (
                        <div className="container mt-5">
                            <h6 className='find-store-heading'>Naturals All Store Locations | Find Your Desired Location</h6>
                            <SearchBar {...props.searchProps} />
                            <br />
                            <BootstrapTable

                                {...props.baseProps}
                                hover
                                striped
                                pagination={paginationFactory()}
                            />
                        </div>
                    )
                }
            </ToolkitProvider>
        </HelmetProvider>
    );
};

export default FindStore;