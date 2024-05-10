import React from 'react';
import { Carousel } from 'antd';
import { useNavigate } from 'react-router-dom';

const CountServices = () => {
    const navigate = useNavigate();

    const details = [
        {
            "img": "https://images.jdmagicbox.com/comp/ghaziabad/w4/011pxx11.xx11.191217190807.e5w4/catalogue/rpn-boy-s-hostel-dasna-ghaziabad-hostels-t5h8if1qiw.jpg",
            "link": "/",
            "text": "10+ Hostels"
        },
        {
            "img": "https://studio.desichalchitra.com/wp-content/uploads/2022/03/Untitled-design-1.png",
            "link": "/",
            "text": "25+ Rooms"
        },
        {
            "img": "https://educationobserver.b-cdn.net/wp-content/uploads/2022/08/Kerala-Class-8-Onam-exam-previous-papers-750x460.jpg",
            "link": "/",
            "text": "11+ subjects"
        },
        {
            "img": "https://images.jdmagicbox.com/comp/ghaziabad/w4/011pxx11.xx11.191217190807.e5w4/catalogue/rpn-boy-s-hostel-dasna-ghaziabad-hostels-t5h8if1qiw.jpg",
            "link": "/",
            "text": "10+ Hostels"
        },
        {
            "img": "https://images.jdmagicbox.com/comp/ghaziabad/w4/011pxx11.xx11.191217190807.e5w4/catalogue/rpn-boy-s-hostel-dasna-ghaziabad-hostels-t5h8if1qiw.jpg",
            "link": "/",
            "text": "10+ Hostels"
        },
        {
            "img": "https://images.jdmagicbox.com/comp/ghaziabad/w4/011pxx11.xx11.191217190807.e5w4/catalogue/rpn-boy-s-hostel-dasna-ghaziabad-hostels-t5h8if1qiw.jpg",
            "link": "/",
            "text": "10+ Hostels"
        },

    ];

    return (
        <div className="container" style={{ display: "flex", flexDirection: "row" }}>
            {details.map(item => (
                <div className="m-3" onClick={() => navigate(item.link)}>
                    <img src={item.img} alt="loading..." style={{ width: "180px", height: "180px", borderRadius: "50%" }} />
                    <div className="text-center">
                        <p className='my-2'>{item.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}










const HomepageServices = () => {
    const carouselImages = [
        "https://st2.depositphotos.com/3837271/8401/i/950/depositphotos_84015096-stock-photo-hostels-written-in-search-bar.jpg",
        "https://shorturl.at/mEFY0",
        "https://images.shiksha.com/mediadata/images/articles/1581333516phpVSycrt.jpeg",
    ];

    return (
        <Carousel autoplay>
            {carouselImages.map(image => (
                <div>
                    <img src={image} alt="" style={{ width: "100%", height: "300px" }} />
                </div>
            ))}
        </Carousel>
    );
}

export { CountServices, HomepageServices };
