import foto from '../../assets/img/business.svg'
import foto2 from '../../assets/img/skills.svg'

export const homeObjOne = {
    id: 'about',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'About Me',
    headline: 'Saya adalah Seorang Penggiat IT dari Indonesia',
    description: 'Saya merupakan Fresh Graduate dari Politeknik Negeri Ujung Pandang bidang studi Teknik Komputer & Jaringan. Saya senang untuk mempelajari hal-hal baru yang berkaitan dengan IT. Dan saya ingin terus meningkatkan skil saya dalam dunia IT',
    buttonLabel: 'Get started',
    imgStart: true,
    img: foto,
    alt: 'Me',
    dark: false,
    primary: false,
    darkText: true
};

export const homeObjTwo = {
    id: 'skills',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'My Skills',
    headline: 'Teknologi yang sudah saya kuasai',
    description: 'ReactJS, CSS, Bootstrap, MYSQL, html, Javascript, PHP',
    buttonLabel: 'Get started',
    imgStart: false,
    img: foto2,
    alt: 'coding',
    dark: true,
    primary: true,
    darkText: false
};
