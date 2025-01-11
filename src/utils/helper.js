import UpcomingProjectfirst from '../assets/images/upcoming-project-first.webp'
import UpcomingProjectsecond from '../assets/images/upcoming-project-second.webp'
import UpcomingProjectthird from '../assets/images/upcoming-project-third.webp'
import UpcomingProjectfourth from '../assets/images/upcoming-project-fourth.webp'
import CircleImage from '../assets/images/white-circle.webp'
import ProjectFirst from '../assets/images/project-first.webp'
import ProjectSecond from '../assets/images/project-second.webp'
import ProjectThird from '../assets/images/project-third.webp'
import ProjectFourth from '../assets/images//project-fourth.webp'
import ProjectFifth from '../assets/images/project-fifth.webp'
import ProjectSixth from '../assets/images/project-sixth.webp'
import ProjectSeventh from '../assets/images/project-seventh.webp'
import ProjectEighth from '../assets/images/project-eighth.webp'
import KarmicFirst from '../assets/images/karmic-first.webp'
import KarmicSecond from '../assets/images/karmic-second.webp'
import KarmicThird from '../assets/images/karmic-third.webp'
import { BlockchainIcon, ConsultationIcon, FacebookIcon, InstagramIcon, MarketingIcon, NftIcon, SmartContractIcon, TrustIcon, TwitterIcon, W3Icon, WebServicesIcon, YoutubeIcon } from './icons'

export const HEADER_LIST = [
    {
        title: "Home",
        link: "#home",
    },
    {
        title: "Services",
        link: "#services",
    },
    {
        title: "Projects",
        link: "#projects",
    },
    {
        title: "About",
        link: "#about",
    },
]

export const UPCOMING_PRODUCTS_LIST = [
    {
        image: UpcomingProjectfirst,
        title: "Nubbies",
        time: "15 : 54 : 12",
        description: "NFT"
    },
    {
        image: UpcomingProjectsecond,
        title: "Nekozuma",
        time: "15 : 54 : 12",
        description: "NFT"
    },
    {
        image: UpcomingProjectthird,
        title: "Galactium",
        time: "15 : 54 : 12",
        description: "NFT"
    },
    {
        image: UpcomingProjectfourth,
        title: "Frenz Forever",
        time: "15 : 54 : 12",
        description: "NFT"
    }
]

export const SERVICES_LIST = [
    {
        circle: CircleImage,
        icon: <SmartContractIcon />,
        title: 'Smart Contract ',
        description: 'Tailored smart contracts to fit your needs , no matter the size. No idea is too big, too small, or too degen... '
    },
    {
        circle: CircleImage,
        icon: <WebServicesIcon />,
        title: 'Web3 Services',
        list: [
            'Metmask integration', 'NFT s', 'Dapps', 'Tokenomics', 'Metaverse AR/VR', 'SDK Gaming Integration'
        ]
    },

    {
        circle: CircleImage,
        icon: <MarketingIcon />,
        title: 'Marketing / Media',
        description: 'We have worked with some of the spaces most reputable figures to drive audiences.',
    },

    {
        circle: CircleImage,
        icon: <ConsultationIcon />,
        title: 'Consultation',
        description: 'Have an idea but not sure where to start? Hop on a call with us and we will help you to put plans into action.',
    },

    {
        circle: CircleImage,
        icon: <NftIcon />,
        title: 'NFT Services',
        description: 'NFT solutions from start to finish. From Initial Concept to Secondary market listings, we will guide you every step of the way to ensure your project is a successfully and seemlessly delivered come mint day.',
    },
]

export const PROJECTS_LISTS = [
    {
        image: ProjectFirst,
        title: 'Nubbies'
    },
    {
        image: ProjectSecond,
        title: 'Nubbies'
    },
    {
        image: ProjectThird,
        title: 'Nubbies'
    },
    {
        image: ProjectFourth,
        title: 'Nubbies'
    },
    {
        image: ProjectFifth,
        title: 'Nubbies'
    },
    {
        image: ProjectSixth,
        title: 'Nubbies'
    },

    {
        image: ProjectSeventh,
        title: 'Nubbies'
    },
    {
        image: ProjectEighth,
        title: 'Nubbies'
    }
]

export const KARMIC_LIST = [
    {
        image: KarmicFirst,
        alt: "karmic-image"
    },
    {
        image: KarmicSecond,
        alt: "karmic-image"
    },
    {
        image: KarmicThird,
        alt: "karmic-image"
    },
]

export const VALUES_LIST = [
    {
        circle: CircleImage,
        icon: <W3Icon />,
        title: 'W3',
        description: 'Not your average degens. Karmic is lead by a team of Industry professionals with extensive backgrounds in web3 and web2. We are actively involved in all that we do. Boots on the ground. We know the ins and outs of the space, because we are building it.'
    },
    {
        circle: CircleImage,
        icon: <BlockchainIcon />,
        title: 'Blockchain Agnostic',
        description: 'Our team of seasoned developers will help you to launch your project on the network of your choosing- be it ethereum, solana, polygon, etc..'
    },
    {
        circle: CircleImage,
        icon: <TrustIcon />,
        title: 'Trust',
        description: 'Trustless and results driven development backed by a portfolio of success. Youre the captain of the ship, and the keys are always in your hands.'
    }
]

export const SOCIAL_LIST = [
    {
        icon: <InstagramIcon />,
        link: 'https://www.instagram.com/accounts/login/?hl=en'
    },
    {
        icon: <TwitterIcon />,
        link: 'https://x.com/i/flow/login?lang=en'
    },
    {
        icon: <FacebookIcon />,
        link: 'https://www.facebook.com/'
    },
    {
        icon: <YoutubeIcon />,
        link: 'https://www.youtube.com/'
    },
]