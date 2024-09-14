import React from 'react';
import { Chrono } from 'react-chrono';

export class About extends React.Component {
    render() {



        const isMobile = window.innerWidth < 768;

        const timelineItems = [
            { title: "2015", cardTitle: 'Spark for Web Development Ignited.', cardDetailedText: 'I made my first homepage.'},
            { title: "2018", cardTitle: 'IT Support for Family Business', cardDetailedText: 'Handled website upkeep and network administration'},
            { title: "2019", cardTitle: 'Revamped Audio Source Website', cardDetailedText: 'Overhauled Audio Source website design.'},
            { title: "2020", cardTitle: 'Shifted Focus During COVID', cardDetailedText: 'Full-time driver; Full-time student.'},
            { title: "2022", cardTitle: 'Pursued Insurance for Financial Security', cardDetailedText: 'Gained insurance licenses for financial stability.'},
            { title: "2023", cardTitle: 'Full Commitment to Development', cardDetailedText: 'Transitioned fully into development - with the aim to develop applications full-time.'},
            { title: "Early 2024", cardTitle: 'Certified Developer with 15 Projects', cardDetailedText: 'Earned certifications; completed 15 projects.'},
            { title: "Present", cardTitle: 'Complete portfolio overhaul', cardDetailedText: 'Redesigned portfolio for mobile-first development and accessibility.'}

        ];
        return(
            <section id="main-content" className="about-section">
                <h1 className="section-header">About Me</h1>
                <p className='personal-introduction'>{isMobile ? 'Junior web developer passionate about building dynamic web apps with AI.' : 'Hello! I\'m Matthew Johnson, a passionate junior web developer based in Columbus, IN. I have a deep interest in building dynamic and user-friendly web applications. I also have a passion for AI and how it can supplement human creativity.'}</p>
                <Chrono 
                    mode="HORIZONTAL" 
                    slideItemDuration={3000}
                    slideShow
                    items={timelineItems}
                    theme={{
                        primary: "black",          // Timeline line color
                        secondary: "white",         // Dots and button color
                        titleColor: 'black',
                        titleColorActive: 'black',
                        cardTitleColor: 'black',
                        cardBgColor: "white",       // Background for cards
                        cardForeColor: "white",    // Font color inside cards
                        titleColor: "white",       // Font color for titles
                      }}
                    />
            </section>
        )
    }
}
