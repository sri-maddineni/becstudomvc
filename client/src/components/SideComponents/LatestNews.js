import React from 'react'

const LatestNews = () => {

    const news = [
        {
            title: "NBA",
            des: "Accredited for tier 1 college for cse,civil",
            date: "26 apr 22:53"
        },
        {
            title: "Postponed for final years",
            des: "Final date for final years has been postponed, for not paying fees",
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

export default LatestNews