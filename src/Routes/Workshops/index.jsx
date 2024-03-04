import { useState } from 'react';
import { InlineWidget } from 'react-calendly';

import './index.css';

export const Workshops = () => {
    const bookingLinks = [
        'https://calendly.com/free-agent-wearhouse/tier-one-workshop',
        'https://calendly.com/free-agent-wearhouse/tier-one-workshop-clone',
        'https://calendly.com/free-agent-wearhouse/tier-two-workshop-clone',
    ];
    const [selectedTier, setSelectedTier] = useState('tier-one');

    const _pageSettings = {
        backgroundColor: '#177146',
        hideEventTypeDetails: false,
        hideLandingPageDetails: false,
        hideGdprBanner: true,
        hideCustomBranding: true,
        hideSecondaryHeader: true,
        primaryColor: '#fff',
        textColor: '#fff',
        borderColor: "#fff",
        fontSize: "6em",
    };

    const _styles = {
        height: "100vh",
        width: "100vw",
        border: "none",
    };

    const handleClick = (e) => {
        setSelectedTier(e.target.id);
    }

    return (
        <>
            <main className='workshops-page'>
                <div className='booking-selection'>
                    <button id='tier-one' className='booking-button' onMouseDown={(e) => handleClick(e)}>Tier One Workshop</button>
                    <button id='tier-two' className='booking-button' onMouseDown={(e) => handleClick(e)}>Tier Two Workshop</button>
                    <button id='tier-three' className='booking-button' onMouseDown={(e) => handleClick(e)}>Tier Three Workshop</button>
                </div>
                <div className='booking-container'>
                    <InlineWidget 
                        pageSettings={_pageSettings} 
                        styles={_styles}
                        url={selectedTier === 'tier-one' ? (
                            bookingLinks[0]
                        ) : selectedTier === 'tier-two' ? (
                            bookingLinks[1]
                        ) : selectedTier === 'tier-three' ? (
                            bookingLinks[2]
                        ) : (
                            bookingLinks[0]
                        )}
                    />
                </div>
            </main>
        </>
    )
}