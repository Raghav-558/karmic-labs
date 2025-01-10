import Projectfirst from '../assets/images/project-first.webp'
import Projectsecond from '../assets/images/project-second.webp'
import Projectthird from '../assets/images/project-third.webp'
import Projectfourth from '../assets/images/project-fourth.webp'
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

export const PRODUCTS_LIST = [
    {
        image: Projectfirst,
        title: "Nubbies",
        time: "15 : 54 : 12",
        description: "NFT"
    },
    {
        image: Projectsecond,
        title: "Nekozuma",
        time: "15 : 54 : 12",
        description: "NFT"
    },
    {
        image: Projectthird,
        title: "Galactium",
        time: "15 : 54 : 12",
        description: "NFT"
    },
    {
        image: Projectfourth,
        title: "Frenz Forever",
        time: "15 : 54 : 12",
        description: "NFT"
    }
]

export const SERVICES_LIST = [
    {
        icon: <SmartContractIcon />,
        title: 'Smart Contract ',
        description: 'Tailored smart contracts to fit your needs , no matter the size. No idea is too big, too small, or too degen... '
    },
    {
        icon: <WebServicesIcon />,
        title: 'Web3 Services',
        list: [
            'Metmask integration', 'NFT s', 'Dapps', 'Tokenomics', 'Metaverse AR/VR', 'SDK Gaming Integration'
        ]
    },

    {
        icon: <MarketingIcon />,
        title: 'Marketing / Media',
        description: 'We have worked with some of the spaces most reputable figures to drive audiences.',
    },

    {
        icon: <ConsultationIcon />,
        title: 'Consultation',
        description: 'Have an idea but not sure where to start? Hop on a call with us and we will help you to put plans into action.',
    },

    {
        icon: <NftIcon />,
        title: 'NFT Services',
        description: 'NFT solutions from start to finish. From Initial Concept to Secondary market listings, we will guide you every step of the way to ensure your project is a successfully and seemlessly delivered come mint day.',
    },
]