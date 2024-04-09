import React from 'react';

export class About extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <section id="about-me" className="underline">
                <h1 className="header">About Me</h1>
                <div className="personal-introduction">
                    <p style={{fontFamily: 'Poppins' , backgroundColor: '#181a1b'}}>Hello! I'm Matthew Johnson, a passionate junior web developer based in Columbus, IN. I have a deep interest in building dynamic and user-friendly web applications. In my free time, I enjoy learning new skills, making music, and exploring the world.</p>
                </div>
                <div className="professional-summary underline">
                    <p style={{fontFamily: 'Poppins', backgroundColor: '#181a1b'}}>With roughly 2 years of experience in web development, I specialize in creating engaging and efficient applications using React and JavaScript. I'm committed to continuous learning and keeping up with the latest technologies to deliver top-notch solutions.</p>
                </div>
                <div className="timeline">
                    <h3>Professional Timeline</h3>
                    <ul>
                        <li className="list-element"><strong>2015</strong> - I started my web development journey in high-school where I made my first home page. It was simple, but this was what caused my spark for web-development to re-kindle itself over the years</li>
                        <li className="list-element"><strong>2018</strong> - I began working for my family's car audio company, unofficially, I was the IT solutions expert on hand and handled the upkeep of the website they had at the time</li>
                        <li className="list-element"><strong>2019</strong> - Huge website overhaul for Audio Source's company page. At the time I was still using third-party tools to create and develop the website. Not much hands on coding/programming except for occasionally html/css formatted newsletter I sent out. At this point, I was still working part time as a delivery driver and a student.</li>
                        <li className="list-element"><strong>2020</strong> - COVID for me, as much as anyone else I'm sure had an unbelievabley large impact on my career trajectory. I became a full-time delivery driver and explored my other interests at the time while living with a few roommates, pursuing jazz composition, writing, and even made a podcast during the time which I was very proud of. I was unsure of my return to web-development, though my interests in tech had never waned as I still built my own devices at home and always kept up with development news.</li>
                        <li className="list-element"><strong>2022</strong> - This was the year I met my fiance. Needing to provide, I acquired some insurance licenses and leveraged my experience in tech and sales to help others find affordable coverage.</li>
                        <li className="list-element"><strong>2023</strong> - I was still using my career in insurance as a backbone to keep food on the table, but I knew it was not my passion. It wasn't until December 18th, 2023 that I would take my full leap into web-development.</li>
                        <li className="list-element"><strong>2024-present</strong> - Since just December, I've acquired my front-end libraries, javascript data structures and algorithims, and responsive web design certifcations. In doing so I completed 15 projects from scratch which I will highlight in the following sections to demonstrate just how truly passionate I am about my career. Enjoy.</li>
                    </ul>
                </div>
            </section>
        )
    }
}
