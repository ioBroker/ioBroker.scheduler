import { createMuiTheme } from '@material-ui/core/styles';


import orange from '@material-ui/core/colors/orange';
import purple from '@material-ui/core/colors/purple';
import indigo from '@material-ui/core/colors/indigo';
import blue from '@material-ui/core/colors/blue';
import blueGrey from '@material-ui/core/colors/blueGrey';
import lightBlue from '@material-ui/core/colors/lightBlue';


const step = (16 - 5) / 23 / 100;

function toInt(hex) {

    const rgb = {
        r: 0,
        g: 0,
        b: 0
    };

    if(hex.length === 7) {
        rgb.r = parseInt(hex.substr(1, 2), 16);
        rgb.g = parseInt(hex.substr(3, 2), 16);
        rgb.b = parseInt(hex.substr(5, 2), 16);
    } else if (hex.length === 4) {

        const r = hex.substr(1, 1);
        const g = hex.substr(2, 1);
        const b = hex.substr(3, 1);

        rgb.r = parseInt(r + r, 16);
        rgb.g = parseInt(g + g, 16);
        rgb.b = parseInt(b + b, 16);
    }

    return rgb;
}

function toHex(int) {
    return '#' + Math.round(int.r).toString(16) + Math.round(int.g).toString(16) + Math.round(int.b).toString(16);
}

function getElevation(color, overlayColor, elevation) {
    const rgb = toInt(color);
    const overlay = toInt(overlayColor);

    rgb.r += overlay.r * (0.05 + step * (elevation - 1));
    rgb.g += overlay.g * (0.05 + step * (elevation - 1));
    rgb.b += overlay.b * (0.05 + step * (elevation - 1));

    return toHex(rgb);
}

function getElevations(color, overlay) {
    const elevations = {};

    for(let i = 1; i <= 24; i++) {
        elevations['elevation' + i] = {
            backgroundColor: getElevation(color, overlay, i)
        }
    }

    return elevations;
}

export default type => {
    let theme;
    if (type === 'dark') {
        theme = { 
            name: type,
            palette: {
                type: 'dark',
                background: {
                    paper: '#121212',
                    default: '#121212'
                },
                primary : {
                    main: '#4dabf5'
                },
                // secondary : {
                //     main: '#436a93'
                // },
                text : {
                    primary: '#ffffff',
                    // secondary: '#ffffff'
                },
				background : {
					default : blueGrey[100]	
				} 
            },
            overrides: {
                MuiAppBar: {
                    colorDefault: {
                        backgroundColor: '#272727'
                    }
                },
                MuiLink: {
                    root: {
                        textTransform: 'uppercase',
                        transition: 'color .3s ease',
                        color: orange[200],
                        '&:hover': {
                            color: orange[100]
                        }
                    }
                },
                MuiPaper: getElevations('#121212', '#fff')
            },
			fontFamily: '\'Roboto\', \'Helvetica\', \'Arial\', sans-serif'
        };
    }
    else if (type === 'blue') {
        theme = {
            name: type,
            palette: {
                type: 'dark',
                background: {
                    paper: '#151d21',
                    default: '#151d21'
                },
                primary: {
                    main: '#4dabf5'
                },
                // secondary: {
                //     main: '#436a93'
                // },
                text: {
                    primary: '#ffffff',
                    // secondary: '#ffffff'
                },
				background:{
					default : blueGrey[100]	
				} 
            },
            overrides: {
                MuiAppBar: {
                    colorDefault: {
                        backgroundColor: '#2a3135'
                    }
                },
                MuiLink: {
                    root: {
                        textTransform: 'uppercase',
                        transition: 'color .3s ease',
                        color: orange[200],
                        '&:hover': {
                            color: orange[100]
                        }
                    }
                },
                MuiPaper: getElevations('#151d21', '#fff')
            },
			fontFamily: '\'Roboto\', \'Helvetica\', \'Arial\', sans-serif'
        };
    }
    else if (type === 'colored') {
        theme = {
            name: type,
            palette: {
                type: 'light',
                primary: {
                    main: '#3399CC'
                },
                // secondary: {
                //     main: '#164477'
                // },
				background:{
					default : blueGrey[100]	
				},
				bottomMenu : {
					backgroundColor: lightBlue[900],	
					justifyContent: 'flex-end' 
				}
            },
            overrides: {
                MuiAppBar: {
                    colorDefault: {
                        backgroundColor: '#3399CC'
                    }
                },
                MuiLink: {
                    root: {
                        textTransform: 'uppercase',
                        transition: 'color .3s ease',
                        color: orange[400],
                        '&:hover': {
                            color: orange[300]
                        }
                    }
                }
            },
			fontFamily: '\'Roboto\', \'Helvetica\', \'Arial\', sans-serif'
        };
    }
    else {
        theme = {
            name: type,
            palette: {
                type: 'light',
                primary: {
                    main: '#3399CC'
                },
                // secondary: {
                //     main: '#164477'
                // },
				background:{
					default : blueGrey[100]	
				}
            },
            overrides: {
                MuiLink: {
                    root: {
                        textTransform: 'uppercase',
                        transition: 'color .3s ease',
                        color: orange[400],
                        '&:hover': {
                            color: orange[300]
                        }
                    }
                }
            },
			fontFamily: '\'Roboto\', \'Helvetica\', \'Arial\', sans-serif'
        };
    }
	theme.container = {
		clouds : {
			padding:'10px 50px',
			backgroundSize:'cover',
			backgroundPositionY:'bottom',
			display:'flex',
			flexDirection:'column',
			alignItems:'start', 
			//  width:'100%',
			overflowX:'hidden',
			overflowY:'auto',
			flexWrap: 'nowrap'
		},
		light : {
			padding:'10px 50px',
			backgroundSize:'cover',
			backgroundPositionY:'bottom',
			display:'flex',
			flexDirection:'column',
			alignItems:'flex-start', 
			// width:'100%',
			overflowX:'hidden',
			overflowY:'auto',
			flexWrap: 'nowrap'
		}
	};
	theme.containerTitle = {
		clouds:{
			fontSize:'2rem',
			color: blueGrey[50]
		},
		light:{
			color: blueGrey[500],
			fontSize:'1.6rem'
		}
	};
	theme.topMenu = {
		clouds:{
			backgroundColor: blueGrey[900],
			color:'white',
			active:{
				backgroundColor:'#000',
				color:'#EEE'
			}
		},
		light:{
			backgroundColor: theme.palette.background.default,
			color:'black',
			active:{
				backgroundColor:'#00000070',
				color:'#EEE'
			}
		}
	};
	theme.mobileMenu = {
		clouds:{
			backgroundColor: blueGrey[700],
			color:'white' 
		},
		light:{
			backgroundColor: blueGrey[300],
			color:'black' 
		}
	};
	theme.leftMenu = {
		clouds:{
			backgroundColor: blueGrey[600],
			color:'white',
			active:{
				backgroundColor: purple[800],
				color:'#EEE',
			}
		},
		light:{
			backgroundColor: blueGrey[50],
			color:'black',
			active:{
				backgroundColor: blue[800],
				color:'#EEE',
				'&:hover': {
					color: 'black'
				}
			}
		}
	};
	theme.bottomMenu = {
		clouds:{
			backgroundColor: blueGrey[900],	
			justifyContent: 'flex-end',
			color:blueGrey[50],
			height:41
		},
		light:{
			backgroundColor: lightBlue[900],	
			justifyContent: 'flex-end',
			color:blueGrey[50],
			height:41
		},
	};
	theme.bottomMenuButton = {
		clouds:{ 
			color:lightBlue[50]
		},
		light:{ 
			color:lightBlue[50]
		},
	};
	theme.priceCard = {
		clouds:{
			backgroundColor: blue[500],
			title : 
			{
				color: lightBlue[500]
			},
			bestTitle : 
			{
				color: blueGrey[100]
			},
			price : 
			{
				color:blueGrey[100]
			},
			bestValue : 
			{
				backgroundColor:blue[900]
			}				
		},
		light:{
			backgroundColor: lightBlue[500] ,
			title : 
			{
				color: lightBlue[500]
			} ,
			bestTitle : 
			{
				color: blueGrey[100]
			},
			price : 
			{
				color:indigo[900]	
			},
			bestValue : 
			{
				backgroundColor:blue[900]
			}				
		},
	}
	const loginForm = {
		height: 280,
		title: {
			textAlign:'center',
			fontSize:'2rem'
		},
		overlay : {
			position: 'absolute',
			top: 0,
			left: 0,
			padding: '0 40px', 
			width: '50%',  
			transition: 'all 0.6s ease-in-out', 
			zIndex:10,
			overflow:'hidden'
		},
		overlayShift:
		{ 
			left:'50%'
		},
		overlayContainer :
		{			
			height: '100%',
			width: '300%', 
			height: 280,
			display: 'flex',
			justifyContent:'space-between',
			transform:'translateX(0)',
			transition: 'all 0.6s ease-in-out',
			 
			
		},
		overlayContainerShift :
		{			 
			transform:'translateX(-66.66%)',
		},				
		overlayCont : 
		{				
			height: '100%',
			width: '33.33%',
			transition: 'all 0.6s ease-in-out', 
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			flexDirection: 'column',
			textAlign: 'center'  
		} 
	}
	theme.loginForm = {
		clouds:{
			backgroundColor: lightBlue[900],
			formLeft : 
			{
				backgroundColor: lightBlue[900],
				padding: 15,
				paddingTop: 0,
				paddingBottom: 0,
				animation: 'show2 .6s'
			},
			formRight : 
			{
				backgroundColor: lightBlue[900],
				padding: 15,
				paddingTop: 0,
				paddingBottom: 0,
				animation: 'show .6s'
			},
			...loginForm,				
			overlayCont : 
			{
				...loginForm.overlayCont,	 
				color:'#FFF' 
			},
			overlayContainer:
			{
				...loginForm.overlayContainer,
				backgroundColor: blueGrey[200],
				//background: 'linear-gradient(to right, ' + purple[800] + " 0%," + blueGrey[900] + " 100%)"  ,
			}
		},
		light:{
			backgroundColor: lightBlue[100] ,
			formLeft : 
			{
				backgroundColor: lightBlue[100],
				padding: 15,
				paddingTop: 0,
				paddingBottom: 0,
				animation: 'show2 .6s'
			},
			formRight : 
			{
				backgroundColor: lightBlue[100],
				padding: 15,
				paddingTop: 0,
				paddingBottom: 0,
				animation: 'show .6s'
			},
			...loginForm,				
			overlayCont : 
			{	
				...loginForm.overlayCont,
				color:'#FFF' 
			},
			overlayContainer:
			{
				...loginForm.overlayContainer, 
				backgroundColor: blueGrey[200],
				//background: 'linear-gradient(to right, ' + lightBlue[800] + " 0%," + blueGrey[900] + " 100%)" ,
			}
			
		},
	}
	theme.transitions = {
		easing: {
			sharp: 'ease',
			easeOut: 'ease-out'
		},
		duration : {
			leavingScreen: '1900ms',
			enteringScreen: '1200ms',
			shiftScreen: '300ms'
		}
	};
    theme.toolbar = {
        height: 48,
		backgroundColor: theme.palette.primary.main
    };

    // add save toolbar
    theme.saveToolbar = {
        background: theme.palette.primary.main,
        button: {
            borderRadius: 3,
            height: 32
        }
    };
    return createMuiTheme(theme);
}