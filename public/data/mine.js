// Experiences timeline
export const works = [
    {
        company: 'PopBlocks',
        duration: 'Feb 2022 - Apr 2022',
        role: 'Full Stack Web-Blockchain Developer',
    },
    {
        company: 'RetainLab',
        duration: 'Nov 2020 - Dec 2021',
        role: 'Full Stack Developer',
    },
    {
        company: 'GlobalSignin, Pte Ltd',
        duration: 'May 2020 - Aug 2020',
        role: 'Full Stack Engineer',
    },
    {
        company: 'Self-Employed (Freelancing)',
        duration: 'Jan 2015 - Aug 2019',
        role: 'Web/App Developer',
    },
    { company: 'Rose Institute', duration: 'Dec 2012 - Dec 2013', role: 'Web Developer' },
];

// Projects
export const projects = [
    {
        title: 'Sneaky Goblins NFT',
        details:
            'An NFT project on Ethereum network. Implemented the UI for minting, staking, and marketplace. Also, integrated contracts.',
        image: '/image/projects/sneaky_screenshot.png',
        techs: ['ReactJS', 'ES6+', 'Solidity', 'Web3', 'Metamask'],
        link: 'https://goblinverse.sneakygoblins.co/mint',
        github: 'https://github.com/MelodicCrypter/',
        priv: true,
    },
    {
        title: 'SeaFloor',
        details:
            'A browser extension that will allow users to check latest status of NFTs at OpenSea. It will show the rarity score and rank and its trading volume, and so much more.',
        image: '/image/projects/seafloor_screenshot.png',
        techs: ['ReactJS', 'ES6+', 'Browser Extension', 'NodeJS', 'Puppeteer'],
        link: 'https://chrome.google.com/webstore/detail/seafloor/hnfikimmejnoigenobgcjmcampcmcgpl',
        github: 'https://github.com/MelodicCrypter/',
        priv: true,
    },
    {
        title: 'PolkaCombat',
        details:
            'A Blockchain project that lets users to bet to a custom Mugen game. The setup for this project is a bit complex.',
        image: '/image/projects/polkacombat_screenshot.png',
        techs: ['ReactJS', 'ES6+', 'NodeJS', 'Mugen', 'Web3', 'Metamask', 'Windows Server'],
        link: 'https://www.polkacombat.com/',
        github: 'https://github.com/MelodicCrypter/',
        priv: true,
    },
    {
        title: 'GlobalSignin Live',
        details:
            'A web application that allows corporations or people around the world to host an online event. I helped in creating the admin section of the Live app.',
        image: '/image/projects/gsi_screenshot.png',
        techs: ['ReactJS', 'ES6+', 'Apollo Client', 'Redux', 'GraphQL'],
        link: 'https://www.gevme.com/l/live/',
        github: 'https://github.com/MelodicCrypter/',
        priv: true,
    },
    {
        title: 'Numov',
        details:
            'A browser extension that will pull all the latest and top movies from ' +
            'an API every time the user will open a new tab. Available only on Firefox.',
        image: '/image/projects/numov_screenshot.png',
        techs: ['ReactJS', 'ES6+', 'Apollo Client', 'Localforage', 'GraphQL'],
        link: 'https://addons.mozilla.org/en-US/firefox/addon/numov/',
        github: 'https://github.com/MelodicCrypter/Numov-React',
        priv: false,
    },
    {
        title: 'Wordlocker',
        details:
            'A PWA (Progressive Web App) application that enable users to save their new-learned ' +
            'words to enhance their vocabularies. Since it is a PWA it can be installed on any ' +
            'platform through a browser.',
        image: '/image/projects/wordlocker_screenshot.png',
        techs: ['ES6+', 'Firebase', 'PWA'],
        link: 'https://wordlocker-mc.web.app/',
        github: 'https://github.com/MelodicCrypter/WordLocker',
        priv: true,
    },
    {
        title: 'Cratz Pad',
        details:
            'A web application that allow users to type, take note, download it as text, and ' +
            'insert emojis. Basically, it serves like a scratch pad. Right now, it can only' +
            ' be ran on Chrome based browser. But the user can download it as a standalone ' +
            'desktop app. Support Dark mode.',
        image: '/image/projects/cratzpad_screenshot.png',
        techs: ['ES6+', 'Heroku', 'Express', 'Node', 'WebPack', 'PM2'],
        link: 'https://cratzpad.herokuapp.com/',
        github: 'https://github.com/MelodicCrypter/Cratz-Pad',
        priv: false,
    },
    {
        title: 'Smoofly',
        details:
            'A WordPress web application for gathering (aggregating) search results' +
            ' for cheap flights and hotels. This is my website for my travel and tours business. ' +
            'Other bloggers post their travel experiences in the blog section.',
        image: '/image/projects/smoofly_screenshot.png',
        techs: ['PHP7', 'WordPress', 'cPanel', 'Apache'],
        link: 'https://www.smoofly.com',
        github: '',
        priv: true,
    },
];

// Other Projects
export const otherProjects = [
    {
        title: 'Under Your Hood',
        details:
            'A web app that will display your Host/Proxy IP address, Browser name, ' +
            'OS version, Internet Service Provider, Timezone and Location. A very handy tool.',
        techs: ['PHP7', 'Zeit', 'Vanilla JS', 'jQuery'],
        link: 'https://underyourhood.herokuapp.com/',
        github: 'https://github.com/MelodicCrypter/UnderYourHood',
        priv: false,
    },
    {
        title: 'CheckDay',
        details:
            'Simple and lightweight CLI (NPM package) to check weather, time, and timezone ' +
            'for a certain location. You can directly check it on your Console/Terminal.',
        techs: ['Node', 'Vanilla JS', 'ES6+', 'CLI'],
        link: 'https://www.npmjs.com/package/checkday',
        github: 'https://github.com/MelodicCrypter/CheckDay',
        priv: false,
    },
    {
        title: 'Konvert',
        details:
            'It is a Node module for fetching latest currency conversion. It can also get' +
            ' which countries the user can spend the target-currency.',
        techs: ['Node', 'ES6+', 'Vanilla JS'],
        link: 'https://www.npmjs.com/package/konvert',
        github: 'https://github.com/MelodicCrypter/Konvert',
        priv: false,
    },
    {
        title: 'Me v1',
        details:
            'This is my portfolio site. The one you are checking right now. I offer' +
            'the source code to other developers for free as long as they provide link-back' +
            'and respect the license.',
        techs: ['Netlify', 'NextJS', 'ES6+'],
        link: 'https://www.hughcaluscusin.com',
        github: 'https://github.com/MelodicCrypter/me-v1',
        priv: false,
    },
    {
        title: 'EWWB Scaffolding',
        details:
            'Stands for Express, Workbox, Webpack, and Babel. This is a scaffolding so ' +
            'anytime I want to create PWA apps I can clone this and spin-up a PWA app within' +
            " seconds. Main ingredient here is Workbox - Google's framework for PWA.",
        techs: ['Workbox', 'Express', 'Node', 'Webpack', 'Babel', 'PWA'],
        link: 'https://ewwb.herokuapp.com/',
        github: 'https://github.com/MelodicCrypter/Express-Workbox-Webpack-Babel-Scaffold',
        priv: false,
    },
    {
        title: 'Robust Node Scaffolding (MVC)',
        details:
            'A robust scaffolding (boilerplate) for Node, Express, MongoDB, and es6Renderer' +
            ' based on MVC architecture. Implemented with security in mind. Packed with PM2, ' +
            'Logger, Linting, and many more.',
        techs: ['Node', 'Express', 'ES6+', 'MongoDB', 'Webpack', 'Bootstrap'],
        link: 'https://robust-node-scaffolding.herokuapp.com/',
        github: 'https://github.com/MelodicCrypter/Robust-Node-Scaffolding',
        priv: false,
    },
    {
        title: 'Remindah',
        details:
            'It is a collaborative repository. Basically, Remindah is a cheatsheet for ' +
            'common command-line codes.',
        techs: ['Vanilla JS', 'HTML5', 'SASS', 'Webpack'],
        link: 'https://remindah.gq/',
        github: 'https://github.com/MelodicCrypter/Remindah',
        priv: false,
    },
];

// Skills
export const skills = [
    {
        languages: [
            'JavaScript (ES6+)',
            'Solidity',
            'GraphQL',
            'TypeScript',
            'PHP7+',
            'HMTL5',
            'CSS3/SASS',
        ],
        frameworks: [
            'React',
            'NextJS',
            'Express',
            'WordPress',
            'WorkBox',
            'Apollo',
            'Redux',
            'Gatsby',
        ],
        tools: [
            'Git & GitHub',
            'Webpack',
            'CLI',
            'Ngrok',
            'HardHat',
            'Postman',
            'ESLint/Prettier',
            'Remix',
            'Infura',
        ],
        platforms: [
            'DigitalOcean',
            'AWS EC2',
            'Vercel',
            'Netlify',
            'Vultr',
            'Heroku',
            'cPanel/Apache',
        ],
        misc: [
            'Docker',
            'Nginx',
            'Jest',
            'Enzyme',
            'MongoDB',
            'MySQL',
            'PostgreSQL',
            'Firebase',
            'Travis CI',
        ],
        design: ['Photoshop', 'Adobe XD', 'Wireframing'],
    },
];
