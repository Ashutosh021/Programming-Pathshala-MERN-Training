import React from 'react';
import logo from './logo.jpg'; // Adjust the path to your logo image
import '../styles/footer'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-div1">
                <a href="#top" id="back-to-top">Back to top</a>
            </div>
            <div className="footer-div2">
                <FooterList
                    title="Get to Know Us"
                    items={["About Us", "Careers", "Press Release", "Amazon Science"]}
                />
                <FooterList
                    title="Connect with Us"
                    items={["Facebook", "Twitter", "Instagram", "Amazon.com"]}
                />
                <FooterList
                    title="Make Money with Us"
                    items={["Sell on Amazon", "Become an Affiliate", "Advertise Your Product", "Amazon Global Selling"]}
                />
                <FooterList
                    title="Let Us Help You"
                    items={["COVID-19 and Amazon", "Your Account", "Return Center", "Help"]}
                />
            </div>
            <hr />
            <div className="footer-div3">
                <div className="footer-logo-div">
                    <div id="footer-logo">
                        <img src={logo} alt="Amazon Logo" />
                    </div>
                    <div>
                        <button>English</button>
                    </div>
                </div>
            </div>
            <div className="footer-div4">
                {["Australia", "Canada", "Brazil", "China", "France", "Germany", "Italy", "Japan", "Mexico", "Netherlands", "Poland", "Singapore", "Spain", "Turkey", "United Arab Emirates", "United States"].map(country => (
                    <p key={country}>{country}</p>
                ))}
            </div>
            <div className="footer2">
                <div className="footer-div5">
                    <FooterList2
                        items={[
                            { title: "AbeBooks", description: "Books, art & collections" },
                            { title: "Amazon Web Services", description: "Scalable Cloud Computing Services" },
                            { title: "Audible", description: "Download Audio Books" },
                            { title: "IMDb", description: "Movies, TV & Celebrities" },
                            { title: "Shopbop", description: "Designer Fashion Brands" },
                            { title: "Amazon Business", description: "Everything For Your Business" },
                            { title: "Prime Now", description: "2-Hour Delivery on Everyday Items" },
                            { title: "Amazon Prime Music", description: "100 million songs, ad-free over 15 million podcast episodes" }
                        ]}
                    />
                </div>
                <div className="footer-div6">
                    <div className="div6-list-item">
                        <p>Conditions of Use & Sale</p>
                        <p>Privacy Notice</p>
                        <p>Internet-Based Ads</p>
                    </div>
                    <div className="copyright">
                        <p>&#169; 1995-2023, Amazon.com, Inc. or its affiliates</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const FooterList = ({ title, items }) => (
    <div className="footer-list-item">
        <ul>
            <h3>{title}</h3>
            {items.map(item => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    </div>
);

const FooterList2 = ({ items }) => (
    <div className="footer-lsit2">
        {items.map(({ title, description }) => (
            <div className="footer-lsit2-item" key={title}>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        ))}
    </div>
);

export default Footer;
