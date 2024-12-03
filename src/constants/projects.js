const projects = [
    {
      id: "emplifai",
      title: "Emplifai",
      category: "Development",
      client: "Analog Mutations",
      location: "Pakistan",
      duration: "2 Months",
      year: "2023",
      bgColor: "#333841",
      liveSite: 'https://emplifai.mrhb.network/',
      coverImage: "/images/emplifai_2.png",
      techStack: "Solidity, EVM, Foundry, React, & JavaScript",
      description: [
        {
          type: "img",
          imageSrc: "/images/emplifai_1.png"
        },
        {
          type: "p",
          text: "Emplifai is a DeFi protocol focused on liquidity harvesting and yield farming across EVM-compatible chains. I served as the Lead Blockchain Developer on this project, working alongside a team of blockchain developers at Analog Mutations to create secure, high-performance smart contracts. My role involved developing, testing, and integrating yield farming vaults that allowed users to maximize rewards through Allbridge pools and other protocols."
        },
        {
          type: "p",
          text: "As part of my responsibilities, I conducted thorough testing using the Foundry framework to ensure that each smart contract functioned securely and met all performance standards. I collaborated closely with the team to maintain consistent code quality and align on deployment strategies, ultimately delivering all assigned smart contract tasks on time."
        },
        {
          type: "h4",
          text: "Key Features"
        },
        {
          type: "li",
          list: [
            ["Custom Yield Farming Vaults", "Developed smart contracts to create custom vaults, providing users access to yield farming opportunities from diverse protocols, allowing seamless diversification and optimized returns."],
            ["Foundry Framework Testing", "Utilized Foundry for extensive unit and integration testing, simulating a range of staking and reward scenarios to ensure each smart contract’s robustness and accuracy."],
            ["Cross-Protocol Integration", "Designed solutions to integrate with multiple protocols, including Allbridge pools, while collaborating with other blockchain developers to handle unique staking and reward mechanisms from various sources."]            
          ]
        },
        {
          type: "h4",
          text: "Here are some visuals from the Emplifai platform:"
        },
        {
          type: "imageLaptop",
          srcType: 'video', // or 'image'
          srcLink: "/videos/emplifai_1.mp4",
          bgColor: "#f1f2f6"
        },
        {
          type: "h4",
          text: "Challenges & Solutions"
        },
        {
          type: "p",
          text: "One of the main challenges was that each protocol had unique reward structures and mechanisms, which required close analysis. I worked with the team to ensure seamless integration into Emplifai’s architecture, applying custom logic as needed."
        },
        
        {
          type: "h4",
          text: "Outcome"
        },
        {
          type: "p",
          text: "I successfully completed and submitted the assigned tasks on time, providing thoroughly tested, production-ready smart contracts for team deployment. Code was maintained in a GitHub repository, allowing team members to access and deploy as needed."
        },
        {
          type: "imageTriplets",
          images: ['/images/emplifai-mobile-screen-1.jpg','/images/emplifai-mobile-screen-2.jpg','/images/emplifai-mobile-screen-3.jpg']
        },
      ]
    },
    {
      id: "ethicalnode",
      title: "Ethical Node",
      category: "Design & Development",
      client: "Analog Mutations",
      location: "Pakistan",
      duration: "11 Months",
      year: "2023",
      bgColor: "rebeccapurple",
      liveSite: 'https://ethicalnode.com/',
      coverImage: "/images/ethicalnode_1.png",
      techStack: "NodeJs, ExpressJs, MongoDB, Cosmos SDK, HTML, CSS, & Vanilla JS",
      description: [
        {
          type: "img",
          imageSrc: "/images/ethicalnode_1.png"
        },
        {
          type: "p",
          text: "EthicalNode is a multi-chain staking platform built on the Cosmos ecosystem, designed to empower users to stake tokens seamlessly across multiple blockchain networks. As the technical co-founder at Analog Mutations, I played a pivotal role in gathering client requirements and designing the project's architecture. I collaborated closely with our UI/UX developer, providing initial layouts and ongoing feedback to ensure the platform's design aligned with our vision and the client’s needs."
        },
        {
          type: "p",
          text: "I led the development as Project Manager and Product Manager, overseeing the frontend team, managing the backend and blockchain components, and handling regular client meetings to keep the project on track. The project’s complexity stemmed from the unique constraints of the Cosmos ecosystem, where some chains lacked EVM compatibility and smart contract functionality. To address these challenges, we developed a robust backend solution to replicate essential smart contract behaviors while maintaining security and transaction consistency."
        },
        {
          type: "p",
          text: "Additionally, we developed a custom Chrome wallet extension to simplify user interactions with the platform, enabling users to manage their wallets and perform transactions seamlessly within the browser."
        },
        {
          type: "h4",
          text: "Key Features"
        },
        {
          type: "li",
          list: [
            ["Multi-Chain Staking", "Designed a secure, backend-driven staking system that interacts with various Cosmos chains using RPC connections, allowing users to stake across multiple chains with a unified interface."],
            ["Backend Smart Contract Emulation", "Developed a backend system that mimics smart contract functionality for chains lacking native support, ensuring accurate transaction tracking and consistency across the platform."],
            ["Custom Chrome Wallet Extension", "Built a Chrome extension for easy wallet management, enabling users to connect their wallets, view balances, and sign transactions directly from their browser."],          
            ["UI/UX Collaboration", "Created initial layouts and collaborated with the UI/UX developer to refine the design, ensuring it met both client and technical requirements."],           
          ]
        },
        {
          type: "h4",
          text: "Here are some visuals from the EthicalNode platform:"
        },
        {
          type: "imageLaptop",
          srcType: 'video', // or 'image'
          srcLink: "/videos/ethicalnode_1.mp4",
          bgColor: "#f1f2f6"
        },
        {
          type: "h4",
          text: "Challenges & Solutions"
        },
        {
          type: "p",
          text: "One of the main challenges was integrating with Cosmos chains that lacked smart contract support. To solve this, I architected a backend system that leveraged RPC connections to maintain a secure and consistent staking experience, mimicking smart contract functions when necessary."
        },
        
        {
          type: "h4",
          text: "Outcome"
        },
        {
          type: "p",
          text: "The EthicalNode platform successfully launched, providing a cutting-edge staking experience across multiple blockchain networks. Our innovative backend solution addressed the limitations of non-EVM chains, offering a smooth, secure, and efficient user experience. The custom Chrome wallet extension enhanced user accessibility and convenience, making staking and wallet management seamless, with continuous support and updates from the EthicalNode team."
        },
        {
          type: "imageTriplets",
          images: ['/images/en-mobile-screen-1.jpg','/images/en-mobile-screen-2.jpg','/images/en-mobile-screen-3.jpg']
        },
      ]
    },
    {
      id: "decentrai",
      title: "DecentrAI",
      category: "Design & Project Management",
      client: "Analog Mutations",
      location: "Pakistan",
      duration: "7 Months",
      year: "2023",
      bgColor: "#5a458dc7",
      liveSite: 'https://decentr.ai/',
      coverImage: "/images/decentrai_1.png",
      techStack: "React, Web3, Solidity, Filecoin, Python, & Machine Learning",
      description: [
        {
          type: "img",
          imageSrc: "/images/decentrai_1.png"
        },
        {
          type: "p",
          text: "DecentrAI is an innovative AI model training platform designed to leverage decentralized and distributed computing for high-performance AI and machine learning tasks. As an internal product of Analog Mutations, DecentrAI aimed to revolutionize AI model training by distributing computational workloads across multiple nodes, ensuring efficient data parallelism and model parallelism. The platform combines blockchain technology with zero-knowledge proofs (ZKPs) to maintain data integrity, privacy, and transparency across all transactions. Key features include a marketplace for AI applications, decentralized computation, and distributed storage for secure, scalable AI model training."
        },
        {
          type: "p",
          text: "As the Technical Co-Founder, I played a critical role in the design, planning, and development of DecentrAI, overseeing the project’s progress from conception to MVP. I also represented DecentrAI in multiple incubation programs to help secure funding and broaden its reach."
        },
        {
          type: "h4",
          text: "Main Offerings"
        },
        {
          type: "li",
          list: [
            ["Decentralized AI Model Training", "Enables verified, decentralized AI model training using model parallelism across multiple nodes, ensuring scalability and cost-efficiency."],
            ["Distributed Storage and Data Integrity", "Offers a secure, decentralized storage environment powered by blockchain, preserving data integrity and privacy through zero-knowledge proofs."],
            ["AI Application Marketplace", "Facilitates a marketplace for AI applications, where users can publish, buy, and sell AI services and products."]
          ]
        },
        {
          type: "h4",
          text: "Here are some visuals from the DecentrAI platform:"
        },
        {
          type: "imageSingle",
          srcType: 'video', // or 'image'
          srcLink: "/videos/decentrai_1.mp4",
          bgColor: "#f1f2f6"
        },
        {
          type: "imageLaptop",
          srcType: 'video', // or 'image'
          srcLink: "/videos/decentrai_2.mp4",
          bgColor: "#f1f2f6"
        },
        {
          type: "h4",
          text: "Challenges"
        },
        {
          type: "p",
          text: "Despite strong initial development, DecentrAI was paused post-MVP as the project was unable to secure the necessary funding to advance to the next stage."
        },
        
        {
          type: "h4",
          text: "Outcome"
        },
        {
          type: "p",
          text: "The DecentrAI MVP successfully demonstrated a decentralized approach to AI model training, high-performance computing, and a user-driven marketplace. Although the project was paused due to funding constraints, it showcased the potential of blockchain-integrated AI training and has laid the groundwork for future innovation."
        },
        {
          type: "imageTriplets",
          images: ['/images/decentrai-mobile-screen-1.jpg','/images/decentrai-mobile-screen-2.jpg','/images/decentrai-mobile-screen-3.jpg']
        },
      ]
    },
    {
      id: "throughput",
      title: "Throughput",
      category: "Development",
      client: "Analog Mutations",
      location: "Pakistan",
      duration: "8 Months",
      year: "2022",
      bgColor: "#626D6E",
      liveSite: 'https://throughput.network/',
      coverImage: "/images/throughput_1.png",
      techStack: "RUST Language, React, & JavaScript",
      description: [
        {
          type: "img",
          imageSrc: "/images/throughput_1.png"
        },
        {
          type: "p",
          text: "Throughput is a custom blockchain network engineered to achieve high transaction throughput using an innovative proof-of-scheduling consensus protocol. Developed as an internal product by Analog Mutations, Throughput supports a network of interconnected blockchains, enabling efficient data flow and transaction processing across multiple chains. The unique consensus mechanism was designed to optimize network scalability and performance without compromising security."
        },
        {
          type: "p",
          text: "As a Blockchain Developer, I was instrumental in implementing the initial version of the proof-of-scheduling protocol based on specifications from the project’s white paper, created by our research team. This custom consensus protocol helped Throughput achieve the high transaction performance and scalability objectives required for the MVP."
        },
        {
          type: "h4",
          text: "Main Offerings"
        },
        {
          type: "li",
          list: [
            ["Proof-of-Scheduling Consensus", "Implemented the initial version of the custom proof-of-scheduling protocol, enhancing transaction throughput and efficiency across the network."],
            ["High Scalability and Throughput", "Optimized for consistent transaction processing, allowing multiple chains to operate simultaneously within the network framework."],
            ["Interoperability", "Designed for seamless inter-blockchain compatibility, enabling efficient data and transaction sharing across the network."]
          ]
        },
        {
          type: "h4",
          text: "Challenges"
        },
        {
          type: "p",
          text: "Translating the white paper's theoretical design into a functional MVP was a significant challenge. Collaborating with the research and development team, I contributed to creating a testable proof-of-scheduling protocol that aligned with the project’s performance goals."
        },
        
        {
          type: "h4",
          text: "Outcome"
        },
        {
          type: "p",
          text: "The MVP was successfully completed, showcasing Throughput's ability to deliver high-performance blockchain interactions. Following the MVP phase, the project was transitioned to a team in Saudi Arabia through an incubation and VC program, enabling continued development and growth."
        },
        {
          type: "imageLaptop",
          srcType: 'video', // or 'image'
          srcLink: "/videos/throughput.mp4",
          bgColor: "#626D6E"
        },
      ]
    },
    {
      id: "cobe",
      title: "Cobe",
      category: "Development & Project Management",
      client: "Freelance Work",
      location: "Pakistan",
      duration: "4 Months",
      year: "2022",
      bgColor: "#ef9975",
      liveSite: 'https://cobe.network/',
      coverImage: "/images/cobe_1.png",
      techStack: "",
      description: [
        {
          type: "img",
          imageSrc: "/images/cobe_2.png"
        },
        {
          type: "p",
          text: "The Cobe Token Vesting Platform was developed as a secure, role-based system designed to facilitate token vesting and distribution for multiple types of users. The platform enables administrators to mint and burn tokens, create vesting schedules, and manage approvals to ensure streamlined and secure operations. Based on the client-provided Software Requirements Specification (SRS), Cobe’s multi-tiered user roles include Superadmin, Admin, Approver, Auditor, and Investor, each with distinct access levels and permissions for seamless management of vesting activities."
        },
        {
          type: "p",
          text: "As the Lead Developer and Project Manager, I was responsible for implementing smart contracts, coordinating with a frontend developer, and ensuring that the project aligned with the client’s specifications. The platform utilized Solidity and Hardhat for smart contract deployment and testing, Firebase for off-chain data storage, and Next.js (React) for the frontend interface. Web3.js was used to handle wallet and smart contract integrations, providing a seamless user experience."
        },
        {
          type: "h4",
          text: "Key Features"
        },
        {
          type: "li",
          list: [
            ["Role-Based Permissions", "The platform's role-based system ensured secure management, with Superadmins, Admins, Approvers, Auditors, and Investors each having distinct permissions for streamlined token vesting and claims."],
            ["Minting and Vesting Management", "Developed secure flows for minting and burning tokens, creating vesting schedules for investors, and managing these actions through a structured approval process."],
            ["Investor Dashboard", "Created an investor interface where users can easily connect their wallet, monitor their vesting schedule, and claim tokens once they are unlocked."],
          ]
        },
        {
          type: "h4",
          text: "Here are some visuals from the Cobe Vesting Platform:"
        },
        {
          type: "imageSingle",
          srcType: 'video', // or 'image'
          srcLink: "/videos/cobe_1.mp4",
          bgColor: "#f1f2f6"
        },
        {
          type: "imageLaptop",
          srcType: 'video', // or 'image'
          srcLink: "/videos/cobe_2.mp4",
          bgColor: "#f1f2f6"
        },
        {
          type: "h4",
          text: "Challenges"
        },
        {
          type: "p",
          text: "Implementing a secure, multi-layer approval process for token minting and vesting required a structured flow to ensure compliance and prevent unauthorized actions. We achieved this by integrating strict role-based permissions and multi-signature requirements."
        },
        
        {
          type: "h4",
          text: "Outcome"
        },
        {
          type: "p",
          text: "The project code and comprehensive guide were delivered to the client on time, and the client was fully satisfied with the development process. Although the project was not launched online, the code was completed as specified, and the platform was ready for either internal deployment or a branded release according to the client’s future plans."
        },
        {
          type: "imageLaptop",
          srcType: 'video', // or 'image'
          srcLink: "/videos/cobe_3.mp4",
          bgColor: "#f1f2f6"
        },
      ]
    },
    {
      id: "niprm",
      title: "NIPRM",
      category: "Design & Development",
      client: "Freelance Work",
      location: "Pakistan",
      duration: "3 Months",
      year: "2021",
      bgColor: "#333841",
      liveSite: 'https://niprm.edu.pk/',
      coverImage: "/images/niprm_1.png",
      techStack: "React, Redux, NodeJs, ExpressJs, Material-UI, Bootstrap & PostgreSQL",
      description: [
        {
          type: "img",
          imageSrc: "/images/niprm_1.png"
        },
        {
          type: "p",
          text: "I was the sole developer responsible for designing and building the official website for NIPRM, one of Pakistan's leading institutes for physiotherapy and rehabilitation education. The goal of the project was to create a dynamic, user-friendly website that reflected the institute's mission and made information easily accessible for students, faculty, and the public."
        },
        {
          type: "p",
          text: "The project included implementing a custom Content Management System (CMS), enabling the client to update content seamlessly without requiring any technical expertise. The website's design and layout were created to ensure that important information, such as academic programs, admissions details, and faculty profiles, could be managed efficiently."
        },
        {
          type: "h4",
          text: "Key Features"
        },
        {
          type: "li",
          list: [
            ["Dynamic Content Management", "Developed a custom CMS to allow NIPRM to update their website content without requiring technical knowledge, offering full control over the website's structure and information."],
            ["Responsive Design", "Designed a fully responsive website that functions seamlessly on both desktop and mobile devices."],
            ["User Experience (UX) Optimization", "Focused on delivering an intuitive navigation structure that enhances user engagement. The goal was to make it easy for students and faculty to find key information with minimal effort."]            
          ]
        },
        {
          type: "h4",
          text: "Here are some visuals from the NIPRM website:"
        },
        {
          type: "imageSingle",
          srcType: 'video', // or 'image'
          srcLink: "/videos/niprm-1.mp4",
          bgColor: "#f1f2f6"
        },
        {
          type: "imageLaptop",
          srcType: 'video', // or 'image'
          srcLink: "/videos/niprm-2.mp4",
          bgColor: "#f1f2f6"
        },
        {
          type: "h4",
          text: "Challenges & Solutions"
        },
        {
          type: "p",
          text: "One of the primary challenges was creating a platform that allowed frequent updates while maintaining the website's overall structure and visual appeal. I tackled this by building a custom CMS tailored specifically to NIPRM’s needs, ensuring the team could easily manage content without altering the website's design."
        },
        
        {
          type: "h4",
          text: "Outcome"
        },
        {
          type: "p",
          text: "The website successfully went live and continues to serve as an informative platform for students, faculty, and other visitors. By incorporating a user-friendly CMS and responsive design, the institute has been able to manage and update its site with ease, providing up-to-date information on their programs and activities."
        },
        {
          type: "imageTriplets",
          images: ['/images/niprm-mobile-screen-2.jpg','/images/niprm-mobile-screen-1.jpg','/images/niprm-mobile-screen-3.jpg']
        },
      ]
    },
]
  
export default projects;