import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-fe.ssl-images-amazon.com/images/G/65/digital/video/merch/Other/BRND_MTH21_00000_GWBleedingHero_1500x600_Final_en-Multi_FT_PVD6660._CB657363407_.jpg" alt=""/>

                <div className="home__row">
                    <Product 
                        id="12341234" 
                        title="Crucial MX500 1TB 3D NAND SATA 2.5 Inch Internal SSD - CT1000MX500SSD1(Z)" 
                        price={146.86} 
                        image="https://images-na.ssl-images-amazon.com/images/I/81TmfqEBQwL._AC_SL1280_.jpg" 
                        rating={5}
                    />
                    <Product 
                        id="43214321" 
                        title="UGREEN USB C Hub, USB C HDMI Adapter 6 in 1 Type C Hub with 4K USB C to HDMI, SD TF Card Reader, 3 USB 3.0 Ports for MacBook Pro 2019/2018/2017, Galaxy Note 10 S10 S9 S8 Plus, Chromebook, XPS Aluminum" 
                        price={31.49} 
                        image="https://images-na.ssl-images-amazon.com/images/I/61hUPaRExVL._AC_SL1500_.jpg" 
                        rating={4}
                    />
                </div>

                <div className="home__row">  
                    <Product 
                        id="111111" 
                        title="Panasonic RP-HF410BE-W Athleisure Style Wireless Headphone w Mic, White" 
                        price={88.46} 
                        image="https://images-na.ssl-images-amazon.com/images/I/716D5Co7WXL._AC_SL1500_.jpg" 
                        rating={4}
                    />
                    <Product 
                        id="22222222" 
                        title="Logitech 910-005156 MX Anywhere 2S Wireless Mouse, Graphite Black" 
                        price={84.50} 
                        image="https://images-na.ssl-images-amazon.com/images/I/41zUZPkmAuL._AC_.jpg" 
                        rating={5}
                    />
                    <Product 
                        id="33333333" 
                        title="Sudio NIVWHT Niva, White" 
                        price={169.00} 
                        image="https://images-na.ssl-images-amazon.com/images/I/41lXHqfsBeL._AC_SL1000_.jpg" 
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id="44444444" 
                        title="New Apple iPad Pro (11-inch, Wi-Fi + Cellular, 1TB) - Space Gray (2nd Generation)" 
                        price={2200.00} 
                        image="https://images-na.ssl-images-amazon.com/images/I/81wV6umwpZL._AC_SL1500_.jpg" 
                        rating={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
