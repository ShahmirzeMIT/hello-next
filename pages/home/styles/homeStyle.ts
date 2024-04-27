import HomeImg from '../../../public/assets/shutterstock_2040669293-Shopping_King_Louie_yzmhkq.webp';

// Define keyframes outside the homeStyle object
const waveAnimation = {
    '0%': {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 80%)',
    },
    '50%': {
        clipPath: 'polygon(0 0, 100% 20%, 100% 100%, 0% 100%)',
    },
    '100%': {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 80%)',
    },
};

const moveBackground = {
    '0%': {
        backgroundPosition: '0 0',
    },
    '100%': {
        backgroundPosition: '100% 0',
    },
};


interface HomeStyle {
    [key: string]: React.CSSProperties | Record<string, React.CSSProperties>;
}

const homeStyle: HomeStyle = {
    homeBg: {
        background: `url(${HomeImg.src}) no-repeat top center/cover`, 
        height: '80vh',
        marginTop: '60px',
        position: 'relative',
        overflow: 'hidden',
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 80%)',
        animation: `
          waveAnimation 2s infinite alternate,
           moveBackground 10s linear infinite
        `,
    },
    '@keyframes waveAnimation': waveAnimation, // Define keyframes using @keyframes syntax
    '@keyframes moveBackground': moveBackground, // Define keyframes using @keyframes syntax
};


// Add keyframes to the style object
homeStyle['@keyframes waveAnimation'] = waveAnimation;
homeStyle['@keyframes moveBackground'] = moveBackground;

export { homeStyle };
