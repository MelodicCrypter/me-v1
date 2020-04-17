// Experiences timeline
export const works = [
    {
        company: 'Self-Employed (Freelancing)',
        duration: 'Jan 2015 - Present',
        role: 'Web/App Developer',
    },
    { company: 'Rose Institute', duration: 'Dec 2012 - Dec 2013', role: 'Web Developer' },
];

// Projects
export const projects = [
    {
        title: 'Numov',
        details:
            'A browser extension that will pull all the latest and top movies from ' +
            'an API everytime the user will open a new tab. Available only on Firefox. ' +
            '(As of now, version 2.2.0 is being reviewed by Mozilla)',
        image: '/image/projects/numov_screenshot.png',
        techs: ['ReactJS', 'ES6+', 'Apollo Client', 'Localforage', 'GraphQL'],
        link: 'https://addons.mozilla.org/en-US/firefox/addon/numov/',
        github: 'https://github.com/MelodicCrypter/Numov-React',
        priv: false,
    },
    {
        title: 'Origz',
        details:
            'An e-Commerce web application powered by latest technologies. For now, it is ' +
            'for a fictitious company called "Origz". Created to showcase skills for latest technologies.',
        image: '/image/projects/origz_screenshot.png',
        techs: [
            'ReactJS',
            'NextJS',
            'GraphQL',
            'Apollo',
            'Prisma',
            'GraphQL-Yoga',
            'Node',
            'Zeit',
            'Heroku',
            'ES6+',
        ],
        link: 'https://origz-frontend.now.sh/',
        github: 'https://github.com/MelodicCrypter/Origz',
        priv: true,
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
        title: 'Storya',
        details:
            'A web chat application that allow users to chat with each other in ' +
            'real-time. This is possible through Socket IO.',
        image: '/image/projects/storya_screenshot.png',
        techs: ['Vanilla JS', 'Express', 'Node', 'Socket IO'],
        link: 'https://storya.herokuapp.com/',
        github: 'https://github.com/MelodicCrypter/Storya',
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
    {
        title: 'Lez Dress Up',
        details:
            'A WordPress web application for a real client. The site is about fashion ' +
            'and it also sells some merch like shirts and accessories, etc.',
        image: '/image/projects/ldp_screenshot.png',
        techs: ['PHP7', 'WordPress', 'cPanel', 'Apache'],
        link: 'https://www.lezdressup.co.uk',
        github: '',
        priv: true,
    },
    {
        title: 'Anne Marsan',
        details:
            'A personal portfolio site for Anne Marzan. A UK-based actress. Her ' +
            'first domain is not available anymore, but I have a copy of her site.',
        image: '/image/projects/am_screenshot.png',
        techs: ['PHP7', 'Vanilla JS', 'HTML5', 'CSS3', 'Apache', 'cPanel'],
        link: 'https://www.annemarzan.tk/',
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
        languages: ['JavaScript (ES6+)', 'PHP7+', 'GraphQL', 'HMTL5', 'CSS3/SASS'],
        frameworks: [
            'React',
            'NextJS',
            'CRA',
            'Node/Express',
            'WordPress',
            'WorkBox',
            'Apollo',
            'GraphQL-Yoga',
            'Prisma',
            'Redux',
        ],
        tools: [
            'Git & GitHub',
            'Webpack',
            'CLI',
            'Ngrok',
            'Postman',
            'ESLint/Prettier',
            'LogRocket',
        ],
        platforms: ['Heroku', 'AWS EC2', 'Zeit/Now', 'Netlify', 'cPanel/Apache'],
        misc: ['Jest', 'Enzyme', 'MongoDB', 'MySQL', 'PostgreSQL', 'Firebase', 'Travis CI'],
        design: ['Photoshop', 'Adobe XD', 'Wireframing'],
    },
];
