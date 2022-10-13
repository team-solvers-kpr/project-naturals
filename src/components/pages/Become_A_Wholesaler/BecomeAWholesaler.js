import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import CustomButton from '../../shared/CustomButton/CustomButton';
import './BecomeAWholesale.css';

const Become_A_Wholesaler = () => {

    const handleSubmit = e => {
        e.preventDefault()
        toast.success("আপনার তথ্য আমাদের ডেটাবেইজে সংগ্রহণ করা হয়েছে, খুব শীঘ্রই আমাদের টিম আপনার সাথে যোগাযোগ করবে!")
    }

    return (
        <HelmetProvider>
            <Helmet>
                <title>Wholesaler: Naturals</title>
            </Helmet>
            <div className='container'>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <Link className="breadcrumb-item" to='/'>Home</Link>
                        <span className='ms-2 me-2'>/</span>
                        <li className="breadcrumb-item-active"> Wholesaler</li>
                    </ol>
                </nav>

                <div className='wholesaler-title-div mb-3'>
                    <h5 className='wholesaler-title'>Wholesaler</h5>
                </div>
                <div>
                    <form onSubmit={handleSubmit}>

                        <label className="small mb-1 wholesalerFormTitle">Full Name <span style={{ color: "red" }}> *</span></label>
                        <input className="form-control wholesalerFormInput" type="text" />

                        <label className="small mb-1 wholesalerFormTitle">Shop/Institute/Page name</label>
                        <input className="form-control wholesalerFormInput" name="first_name" id="first_name" type="text" />

                        <label className="small mb-1 wholesalerFormTitle">Phone Number <span style={{ color: "red" }}> *</span></label>

                        <input className="form-control wholesalerFormInput" type="number" />

                        <label className="small mb-1 wholesalerFormTitle">Email</label>

                        <input className="form-control wholesalerFormInput" type="text" />

                        <label className="small mb-1 wholesalerFormTitle">Location(District/Thana)-</label>
                        <input className="form-control wholesalerFormInput" type="text" />

                        <label className="small mb-1 wholesalerFormTitle">Message</label>
                        <textarea className="form-control  wholesalerFormInput" rows="5" type="text" />

                        <CustomButton title="Submit" border="none" />
                    </form>
                </div>
            </div>
        </HelmetProvider>
    );
};

export default Become_A_Wholesaler;