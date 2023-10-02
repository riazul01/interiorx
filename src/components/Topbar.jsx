import React from 'react';

// icons
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

const Topbar = () => {
    return (
        <div className="topbar bg-primary">
            <div className="container text-white py-3 d-flex flex-wrap justify-content-center justify-content-lg-between">
                <div className="d-flex flex-wrap flex-sm-nowrap justify-content-center justify-content-lg-between">
                    <div className="d-flex w-100 w-sm-auto justify-content-center align-items-center">
                        <FaPhoneAlt style={{fontSize: '1.1rem'}}/>
                        <p className="my-0 ms-2" style={{fontSize: '1.1rem'}}>+88 01234-567899, +88 01298-765431</p>
                    </div>
                    <div className="ms-0 ms-sm-3 d-flex align-items-center">
                        <IoMdMail className="fs-5"/>
                        <p className="my-0 ms-2" style={{fontSize: '1.1rem'}}>interiorx@example.com</p>
                    </div>
                </div>
                <div className="ms-0 ms-sm-3 d-flex align-items-center">
                    <p className="my-0" style={{fontSize: '1.1rem'}}>North Tower(3rd floor), Dhaka, Bangladesh</p>
                </div>
            </div>
        </div>
    );
}

export default Topbar;