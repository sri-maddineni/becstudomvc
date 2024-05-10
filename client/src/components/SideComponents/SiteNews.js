import React from 'react'

const SiteNews = () => {

    const news = [
        {
            title: "11+ Hostels",
            des: "12 Hostels around BEC and their details can be found",
            date: "26 apr 22:53"
        },
        {
            title: "25+ rooms",
            des: "For comfortable living, choose over 25+ rooms and flats at ur cost",
            date: "26 apr 22:53"
        },
       

    ]
    return (
        <>

            {news.map(item => (
                <div className='m-2'>
                    <h6 style={{ margin: "1px", padding: "1px" }}>{item.title}</h6>
                    <p style={{ margin: "0", padding: "0" }}>{item.des}</p>
                    <span style={{ fontSize: "0.8rem", margin: "0", padding: "0" }}>{item.date}</span>
                    <hr />
                </div>
            ))}

        </>
    )
}

export default SiteNews