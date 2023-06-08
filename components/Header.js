import React from 'react';

import Image from 'next/image';


const Header = () => {
    return (

        <div className='header_holder'>

            <div className='top_nav_bar'>


                <div className='qbs_logo_container'>

                    <div className='qbs_logo_holder'>

                        <Image src="/qbs_original_logo.png" alt="QBS Logo" width={190} height={65} />

                    </div>

                </div>

                <div className='qbs_nav_headings_container'>

                    <div className='qbs_nav_headings_holder'>
                        <ul className='nav_links'>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Products</li>
                            <li>Careers</li>
                        </ul>
                    </div>

                </div>


            </div>


        </div>




    );
};


export default Header;