import { useState } from 'react';
import Container from '@mui/material/Container';
import { ReactComponent as OutlineLogo } from '../../Assets/3dc_logo_outline.svg';
import { ReactComponent as ColorLogo } from '../../Assets/3DC_Logo_colored.svg';
function Landing() {
    
    const [hoverState, setHoverState] = useState('hideColorLogo');
    const [hideState, setHideState] = useState('showColorLogo');
    function toggleHover() {
        if (hoverState === 'hideColorLogo') {
            setHoverState('showColorLogo'); 
            setHideState('hideColorLogo');
        }
        else {
            setHoverState('hideColorLogo');
            setHideState('showColorLogo');
        }
    }

    return (
        <Container className='landingContainer'>
            {/* insert background team photo */}
            {/* <img src=""></img> */}
            <div className='landingLogo' onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                <ColorLogo className={'logo colorLogo ' + hoverState} />
                <OutlineLogo className={'logo outlineLogo ' + hideState} />
            </div>

        </Container>
    )
}

export default Landing;