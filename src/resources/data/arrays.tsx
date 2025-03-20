import { ReactComponent as FlatRateIcon } from '../icons/flatrate.svg';
import { ReactComponent as TrackingIcon } from '../icons/tracking.svg';
import { ReactComponent as OnTimeIcon } from '../icons/ontime.svg';
import { ReactComponent as ShieldIcon } from '../icons/shield.svg';
import { ReactComponent as MoneyIcon } from '../icons/money.svg';
import { ReactComponent as CalendarIcon } from '../icons/calendar.svg';
import { ReactComponent as ProfessionalIcon } from '../icons/professional.svg';
import { ReactComponent as UrgentIcon } from '../icons/urgent.svg';
import { ReactComponent as MonitoringIcon } from '../icons/monitoring.svg';
import { ReactComponent as CleanIcon } from '../icons/clean.svg';
import { ReactComponent as InfinityIcon } from '../icons/infinity.svg';
import { ReactComponent as RouteIcon } from '../icons/route.svg';
import { ReactComponent as TimeIcon } from '../icons/time.svg';
import { ReactComponent as MonitorIcon } from '../icons/monitor.svg';
import { ReactComponent as ScheduleIcon } from '../icons/schedule.svg';
import { ReactComponent as ToolsIcon } from '../icons/toolbox.svg';
import { ReactComponent as DispatchAndLoad } from '../icons/dispatchAndLoad.svg';
import { ReactComponent as SafetyAndCompliance } from '../icons/safetyAndCompliance.svg';
import { ReactComponent as AccountiongAndInvoicing } from '../icons/accountingAndInvoicing.svg';
import { ReactComponent as Support247 } from '../icons/247support.svg';
import { ReactComponent as HighLoads } from '../icons/highLoads.svg';
import { ReactComponent as ExperienceYears } from '../icons/experienceYears.svg';
import { ReactComponent as Communication } from '../icons/communication.svg';
import { ReactComponent as NoForced } from '../icons/noForced.svg';
import { ReactComponent as Transparency } from '../icons/transparency.svg';

import dispatchImage from '../images/dispatchImage.jpg'
import dispatchImage1 from '../images/dispatchImage1.jpg'

import invoicingImage from '../images/invoicingImage.jpg'

import safetyImage from '../images/safetyImage.jpg'

import supportImage from '../images/247supportImage.jpg'

export const trustList = [
    {
        id: 1,
        title: "High-Paying Loads",
        subTitle: "We secure top rates and loads that fit your routes and equipment.",
        icon: <HighLoads />
    },
    {
        id: 3,
        title: "Reliable Communication",
        subTitle: "Responsive, multilingual dispatchers available anytime.",
        icon: <Communication />
    },
    {
        id: 4,
        title: "24/7 Support",
        subTitle: "Help with broker issues, delays, and emergencies - anytime, anywhere.",
        icon: <Support247 />
    },
    {
        id: 5,
        title: "5+ Years of Industry Experience",
        subTitle: "We know trucking, rates, and how to keep you moving profitably.",
        icon: <ExperienceYears />
    },
    {
        id: 6,
        title: "Full Transparency",
        subTitle: "All load confirmations and invoices go straight to your email.",
        icon: <Transparency />
    },
    {
        id: 8,
        title: "No Forced Dispatch",
        subTitle: "You decide which loads to take. No pressure, no stress.",
        icon: <NoForced />
    },
]

export const servicesList = [
    {
        id: 1,
        title: 'Dispatch & Load Booking',
        icon: <DispatchAndLoad />,
        about: 'The Core of Your Business – Your Earnings Depend on It\n \n Dispatching is the most critical service because it directly impacts how much money you make. With the right dispatcher, you get better-paying loads, fewer empty miles, and stronger broker relationships.\n\n   Why Our Dispatching Stands Out:\n\n • Experience That Works for You – With 5+ years in the industry, we understand market trends, lane fluctuations, and the best-paying routes.\n • Negotiation Experts – Our team fights for the highest rates, ensuring you get paid what you deserve.\n• Strong Broker Connections – We work only with reliable brokers, securing steady, high-quality freight.\n • Smart Route Planning – We minimize deadhead miles and optimize your trips for maximum efficiency.\n• Personalized Approach – Every driver gets a dedicated dispatcher who learns their preferences, ensuring loads fit your equipment and schedule.\n \n The right dispatcher means more money in your pocket. Let us handle the negotiations and planning—you just drive.',
        link: '/services',
        subTitle: 'High-paying loads, less empty miles, and full route optimization.',
        subTitle2: 'Dispatch & Load Booking',
        gallery: [
            {
                id: 1,
                photo: dispatchImage1
            },
            {
                id: 2,
                photo: dispatchImage1
            },
        ],
    },
    {
        id: 2,
        title: 'Accounting & Invoicing',
        icon: <AccountiongAndInvoicing />,
        about: 'Get Paid Fast & Stay Tax Compliant \n \n Managing invoices and fuel taxes can be a headache, but we make it easy and error-free. Our team ensures you get paid on time and never overpay on IFTA. \n\n What We Handle:\n\n • Error-Free Invoices – We create and submit invoices to brokers quickly and accurately.\n• Payment Tracking – We monitor all payments, following up on any outstanding invoices.\n• Factoring Coordination – We work directly with your factoring company to speed up payouts.\n • IFTA Filing Made Easy – We track your fuel purchases and mileage, ensuring compliance and saving you money.\n• Transparent Financial Reports – Know exactly how much you’re making and where your money is going.\n \n No more late payments, no more financial headaches. We handle the numbers while you handle the road.',
        link: '/services',
        subTitle: 'Fast, error-free invoicing and payment tracking for steady cash flow.',
        subTitle2: 'Billing & Invoicing + IFTA Filing',
        gallery: [
            {
                id: 1,
                photo: invoicingImage
            },
            {
                id: 2,
                photo: invoicingImage
            },
        ],
        benefits: [
            {
                id: 1,
                title: 'Transparent pricing',
                subtitle: 'Our estimates are proven to be 91% accurate',
                icon: <MoneyIcon />
            },
            {
                id: 2,
                title: '24 / 7 / 365 service',
                subtitle: 'Our team is ready to help regardless of day and time',
                icon: <CalendarIcon />
            },
            {
                id: 3,
                title: 'Professional service',
                subtitle: 'High-skilled team and premium moving supplies',
                icon: <ProfessionalIcon />
            },
            {
                id: 4,
                title: 'Last minute bookings',
                subtitle: 'We provide same or next day moves for customers who need to relocate with urgency',
                icon: <UrgentIcon />
            },
        ]
    },
    {
        id: 3,
        title: 'Safety & Compliance',
        icon: <SafetyAndCompliance />,
        about: 'Stay Legal, Stay Safe, and Keep Moving\n \n DOT and FMCSA compliance isn’t optional—it’s what keeps your business running smoothly. We ensure that your documents, logs, and safety records are always up to date.\n\n How We Keep You Safe & Compliant:\n\n • DOT & FMCSA Compliance – We manage all required paperwork to prevent fines and violations.\n• HOS (Hours of Service) Monitoring – Avoid costly logbook mistakes and drive within legal limits.\n• Audit & Inspection Prep – We help you stay ready for DOT inspections and safety audits.\n• Required Maintenance Scheduling – We track your truck’s inspection and maintenance deadlines.\n• Risk Management – We reduce your chances of violations, fines, and unnecessary downtime.\n \n Stay compliant, avoid penalties, and keep your truck moving.',
        link: '/services',
        subTitle: 'DOT/FMCSA compliance, record keeping, and risk management.',
        subTitle2: 'Safety & Compliance Support',
        gallery: [
            {
                id: 1,
                photo: safetyImage
            },
            {
                id: 2,
                photo: safetyImage
            },
        ],
        benefits: [
            {
                id: 1,
                title: '24 / 7 Video Surveillance',
                subtitle: '24 / 7 Security through personnel and video monitoring',
                icon: <MonitoringIcon />
            },
            {
                id: 2,
                title: 'Dry & Clean Space',
                subtitle: 'Only dry and clean storage spaces for the most sensitive items',
                icon: <CleanIcon />
            },
            {
                id: 3,
                title: 'Long & Short Term Solutions',
                subtitle: 'No matter is it 1 day or 10 years',
                icon: <InfinityIcon />
            },
            {
                id: 4,
                title: 'Easy Access',
                subtitle: 'Minutes away of your current or future home',
                icon: <RouteIcon />
            },
        ]
    },
    {
        id: 4,
        title: '24/7 Support',
        icon: <Support247 />,
        about: 'Help Anytime, Anywhere – Because Trucking Never Stops\n \n Trucking isn’t a 9-to-5 job, and neither is our support. Whether it’s a broker issue, emergency, or last-minute load change, we’re always here to help.\n\nHow Our 24/7 Support Helps You\n\n • Load Changes & Route Optimization – Need a better load or new route? We’ve got you covered.\n• Broker & Payment Issues – We handle disputes and delays so you don’t have to.\n• Permits & Documentation – Quick assistance with logbooks, paperwork, and load permits.\n• Emergency Help – We arrange towing, repairs, and urgent solutions when you need them most.\n \nWhenever you need us, we’re here.',
        link: '/services',
        subTitle: 'Help with broker issues, load changes, and emergencies anytime.',
        subTitle2: '24/7 Support',
        gallery: [
            {
                id: 1,
                photo: supportImage
            },
            {
                id: 2,
                photo: supportImage
            },
        ],
    },
]

export const questionsList = [
    {
        "id": 1,
        "question": "What services does Easy Dispatch provide?",
        "answer": "We offer dispatch services, accounting, after-hours support, operations management, safety, and compliance assistance to keep your trucking business running smoothly.",
        "type": 1
    },
    {
        "id": 2,
        "question": "Is your dispatch available 24/7? Do you book loads at all hours or just provide support?",
        "answer": "Our 24/7 team is always available to assist drivers and also books loads overnight and on weekends.",
        "type": 1
    },
    {
        "id": 3,
        "question": "Do you have your own broker MC?",
        "answer": "No, but we work with reliable brokers and have strong connections to secure the best loads.",
        "type": 1
    },
    {
        "id": 4,
        "question": "Do you operate under your own Carrier MC?",
        "answer": "No, we dispatch under your MC, handling all logistics and load coordination on your behalf.",
        "type": 1
    },
    {
        "id": 5,
        "question": "What types of trailers do you dispatch for?",
        "answer": "We specialize in Dry Vans, Reefers, Flatbeds, and Step Decks, ensuring the best load matches for your equipment.",
        "type": 1
    },
    {
        "id": 6,
        "question": "Do you offer discounts for fleets with multiple trucks?",
        "answer": "Yes, we provide custom pricing for larger fleets. Discounts are discussed individually with your account manager.",
        "type": 1
    },
    {
        "id": 7,
        "question": "Do you manage invoicing and billing? How do I get paid for loads?",
        "answer": "Yes, we take care of invoicing and billing, submitting invoices directly to brokers. Payments go straight to you, with processing times depending on your factoring provider.",
        "type": 1
    },
    {
        "id": 8,
        "question": "How does my MC’s reputation affect my earnings?",
        "answer": "Brokers prefer working with trusted, well-established carriers, which can impact your access to high-paying loads. A strong reputation leads to better rates, consistent freight, and long-term partnerships. We help you build and maintain a solid MC reputation from day one, ensuring steady growth and better opportunities.",
        "type": 1
    },
    {
        "id": 9,
        "question": "How do you ensure your dispatchers deliver top results?",
        "answer": "We set clear performance goals based on 8+ key metrics, adjust KPIs as needed, and offer bonuses for exceeding expectations.",
        "type": 2
    },
    {
        "id": 10,
        "question": "How do you secure the best rates on the spot market?",
        "answer": "Our dispatchers have 3+ years of experience, strong negotiation skills, and deep market knowledge, allowing them to get the highest possible rates.",
        "type": 2
    },
    {
        "id": 11,
        "question": "Where can I check the current spot market rates for different trailer types?",
        "answer": "We use trusted platforms like Sonar, DAT, and Truckstop to provide the most accurate spot market rate insights.",
        "type": 2
    },
    {
        "id": 12,
        "question": "How can I track the performance of my assigned dispatchers?",
        "answer": "You’ll have real-time online access to monitor your fleet, assigned dispatchers, and their performance at any time.",
        "type": 2
    },
    {
        "id": 13,
        "question": "Will having a new MC impact my company’s performance?",
        "answer": "Yes, newer MCs may have limited access to premium loads since brokers prefer experienced carriers. However, we help you secure steady freight and build a strong reputation quickly.",
        "type": 2
    },
    {
        "id": 14,
        "question": "Does my insurance coverage affect my earnings?",
        "answer": "Yes, having comprehensive insurance allows you to haul a wider variety of loads, increasing your earning potential.",
        "type": 2
    },
    {
        "id": 15,
        "question": "What does your service include?",
        "answer": "We provide full dispatch and back-office support, including load booking, invoicing, safety & compliance, and 24/7 assistance to keep your business running smoothly.",
        "type": 3
    },
    {
        "id": 16,
        "question": "Do you require long-term contracts?",
        "answer": "No, our service is contract-free. We believe in earning your business with great service, not locking you into commitments.",
        "type": 3
    },
    {
        "id": 17,
        "question": "Do you offer dispatching for owner-operators and fleets?",
        "answer": "Yes, we work with both single truck owner-operators and fleets of all sizes.",
        "type": 3
    },
    {
        "id": 18,
        "question": "Do you dispatch only power-only trucks?",
        "answer": "No, we work with Dry Vans, Reefers, Flatbeds, and Step Decks.",
        "type": 3
    },
    {
        "id": 19,
        "question": "How do you find loads?",
        "answer": "We use a combination of load boards, broker networks, and direct shipper connections to find the highest-paying loads for your equipment.",
        "type": 4
    },
    {
        "id": 20,
        "question": "Do I have to take every load you offer?",
        "answer": "No, we provide load options, but you always have the final say. No forced dispatch.",
        "type": 4
    },
    {
        "id": 21,
        "question": "How do you negotiate rates?",
        "answer": "Our dispatchers have 5+ years of experience in negotiating with brokers to secure the best rates for your loads.",
        "type": 4
    },
    {
        "id": 22,
        "question": "How do you minimize deadhead miles?",
        "answer": "We plan your loads strategically, booking return freight and optimizing routes to reduce empty miles and increase earnings.",
        "type": 4
    },
    {
        "id": 23,
        "question": "Do you work with brokers or direct shippers?",
        "answer": "We work with both. Our goal is to build long-term relationships with reliable brokers and shippers for consistent, high-paying freight.",
        "type": 4
    },
    {
        "id": 24,
        "question": "What if a broker refuses to pay?",
        "answer": "We handle all follow-ups on your behalf. If necessary, we help with collections and legal escalation.",
        "type": 4
    },
    {
        "id": 25,
        "question": "Do you handle invoicing and billing?",
        "answer": "Yes, we create and submit invoices directly to brokers, track payments, and follow up on outstanding balances.",
        "type": 5
    },
    {
        "id": 26,
        "question": "How do I get paid for booked loads?",
        "answer": "All payments go directly to you. If you use a factoring company, we coordinate with them for faster payouts.",
        "type": 5
    },
    {
        "id": 27,
        "question": "Do you help with IFTA filing?",
        "answer": "Yes, we track fuel purchases and mileage and prepare IFTA reports to keep you compliant.",
        "type": 5
    },
    {
        "id": 28,
        "question": "What happens if a broker delays payment?",
        "answer": "We handle all payment follow-ups to ensure you get paid as fast as possible.",
        "type": 5
    },
    {
        "id": 29,
        "question": "How do you help with DOT & FMCSA compliance?",
        "answer": "We manage all necessary paperwork, track Hours of Service (HOS), and prepare you for DOT inspections and audits.",
        "type": 6
    },
    {
        "id": 30,
        "question": "Can you help prevent violations and fines?",
        "answer": "Yes, we monitor safety records, logbooks, and required maintenance, reducing the risk of fines and penalties.",
        "type": 6
    },
    {
        "id": 31,
        "question": "Do you provide support for new MCs?",
        "answer": "Yes, we help build your MC’s reputation by ensuring clean compliance records and securing loads from trusted brokers.",
        "type": 6
    },
    {
        "id": 32,
        "question": "Is your dispatch truly available 24/7?",
        "answer": "Yes, we provide full support around the clock, including nights, weekends, and holidays.",
        "type": 7
    },
    {
        "id": 33,
        "question": "What kind of help can I get after hours?",
        "answer": "We assist with load changes, broker issues, route adjustments, permits, documentation, and emergency situations like breakdowns or delays.",
        "type": 7
    },
    {
        "id": 34,
        "question": "Do you provide emergency assistance?",
        "answer": "Yes, we can arrange towing, repairs, and urgent on-the-road support when needed.",
        "type": 7
    },
    {
        "id": 35,
        "question": "Does my MC’s reputation affect my earnings?",
        "answer": "Yes, brokers prefer working with trusted, established carriers, which impacts load quality and rates. We help you build and maintain a strong MC reputation for better opportunities.",
        "type": 8
    },
    {
        "id": 36,
        "question": "I have a new MC. Can I still get good loads?",
        "answer": "Yes, but a new MC may face limitations in accessing premium loads. We help secure steady freight and establish credibility with brokers as quickly as possible.",
        "type": 8
    },
    {
        "id": 37,
        "question": "How do I sign up for your service?",
        "answer": "Simply fill out our contact form or call us, and we’ll walk you through the setup process.",
        "type": 9
    },
    {
        "id": 38,
        "question": "What documents do I need to start?",
        "answer": "You’ll need:\n\n• Your MC Authority\n\n• Active Insurance\n\n• W9 Form\n\n• Carrier Packet (we help with this process)",
        "type": 9
    },
    {
        "id": 39,
        "question": "How soon can I start getting loads?",
        "answer": "Once onboarding is complete, we start booking loads immediately.",
        "type": 9
    }
]