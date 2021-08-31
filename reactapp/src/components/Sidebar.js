import React from 'react';
import SideNav, {
    Toggle,
    Nav,
    NavItem,
    NavIcon,
    NavText,
} from '@trendmicro/react-sidenav';

// Icon imports
import HomeIcon from '@material-ui/icons/Home';
import LaptopChromebookIcon from '@material-ui/icons/LaptopChromebook';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import InfoIcon from '@material-ui/icons/Info';
import PersonIcon from '@material-ui/icons/Person';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

// Scroll to elements on the page

const Sidebar = () => {
    return (
        <SideNav
            className='sidebar'
            style={{
                position: 'fixed',
                top: '0',
                left: '0',
                background: 'hsl(13, 89%, 60%)',
            }}
            onSelect={(selected) => {
                // scroller.scrollTo(selected, {
                //     duration: 1000,
                //     delay: 0,
                //     smooth: 'easeInOutCubic',
                // });
                if (selected === 'projects') {
                    document.getElementById(selected).scrollIntoView({
                        block: 'start',
                        behavior: 'smooth',
                    });
                } else {
                    document.getElementById(selected).scrollIntoView({
                        block: 'center',
                        behavior: 'smooth',
                    });
                }
            }}>
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected='home'>
                <NavItem eventKey='home'>
                    <NavIcon
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <HomeIcon />
                    </NavIcon>
                    <NavText style={{ fontFamily: 'Montserrat' }}>Home</NavText>
                </NavItem>
                <NavItem eventKey='projects'>
                    <NavIcon
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <LaptopChromebookIcon />
                    </NavIcon>
                    <NavText style={{ fontFamily: 'Montserrat' }}>
                        Projects
                    </NavText>
                </NavItem>
                <NavItem eventKey='skills'>
                    <NavIcon
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <MenuBookIcon />
                    </NavIcon>
                    <NavText style={{ fontFamily: 'Montserrat' }}>
                        Skills
                    </NavText>
                </NavItem>
                <NavItem eventKey='about'>
                    <NavIcon
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <InfoIcon />
                    </NavIcon>
                    <NavText style={{ fontFamily: 'Montserrat' }}>
                        About
                    </NavText>
                </NavItem>
                <NavItem eventKey='contact'>
                    <NavIcon
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <PersonIcon />
                    </NavIcon>
                    <NavText style={{ fontFamily: 'Montserrat' }}>
                        Contact
                    </NavText>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
    );
};

export default Sidebar;
