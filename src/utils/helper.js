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
import { ConsultationIcon, MarketingIcon, NftIcon, SmartContractIcon, WebServicesIcon } from './icons'

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