import React, { useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { useState } from 'react';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import './FindStore.css';

const FindStore = () => {

    const [allData, setAllData] = useState([]);
    useEffect(() => {
        fetch('storeData.json')
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
        <ToolkitProvider
            keyField="id"
            data={allData}
            columns={columns}
            search
        >
            {
                props => (
                    <div className="container mt-5">
                        <SearchBar {...props.searchProps} />
                        <br />
                        <BootstrapTable
                            {...props.baseProps}
                            hover
                            pagination={paginationFactory({ sizePerPage: 19 })}
                        />
                    </div>
                )
            }
        </ToolkitProvider>
    );
};

export default FindStore;