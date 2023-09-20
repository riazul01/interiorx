import React from 'react';
import { Link } from 'react-router-dom';

const BreadCrumb = ({page}) => {
    return (
        <div className="breadcrumb">
            <div className="container-lg d-flex justify-content-between align-items-center">
                <h2 className="my-0 text-uppercase">About us</h2>

                <ul className="my-0 d-flex align-items-center">
                    <li><Link to="/" className="link">Home <span>/</span></Link></li>
                    {page === 'about' && <li aria-current="page"><Link to="/about" className="link active">About</Link></li>}
                    {page === 'interior' && (
                        <>
                            <li><Link to="/interior" className="link">Our Services <span>/</span></Link></li>
                            <li aria-current="page"><Link to="/interior" className="link active">Interior</Link></li>
                        </>
                    )}
                    {page === 'construction' && (
                        <>
                            <li><Link to="/construction" className="link">Our Services <span>/</span></Link></li>
                            <li aria-current="page"><Link to="/construction" className="link active">Construction</Link></li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default BreadCrumb;