interface Project {
    _id: string;
    slug: string;
    preview: string;
    title: string;
    description: string;
    client: string;
    date: string;
    price: string;
    tech?: string[]; // Optional
    link?: string; // Optional
}

const projects = [
    {
        _id: "1",
        slug: "anthrope-london",
        preview: "/anthrope-mock.webp",
        title: "Anthrope London Restaurant & Hotel Website",
        description: "Anthrope is a premium restaurant that redefines fine dining with an exquisite fusion of flavors, world-class service, and an ambiance of timeless elegance. Complementing its culinary mastery, Anthrope also offers luxurious 5-star hotels, providing guests with an unparalleled experience of sophistication, comfort, and hospitality. Whether indulging in a gourmet feast or unwinding in opulent accommodations, Anthrope promises an unforgettable journey of taste and luxury.",
        client: "Anthrope London",
        tech: ["React", "Next.js", "Tailwind CSS", "Sanity.io"],
        link: "https://anthrope-london.vercel.app/",
        date: "2021-09-01",
        price: '850'
    },
    {
        _id: "2",
        slug: "3d-helmet",
        preview: "/3d-mock.webp",
        title: "Futuristic 3D Helmet Showcase",
        description: "Explore a high-definition 3D helmet that rotates with your cursor, delivering a seamless, interactive showcase. Built with WebGL and Three.js, it offers realistic textures and smooth animations, making every detail come to life.",
        client: "Cyberpunk 2077",
        tech: ["React", "Tailwind CSS", "Three.js" ,"React Three Fiber"],
        link: "https://cyberpunk-2077-one.vercel.app/",
        date: "2021-09-01",
        price: '1199'
    },
    {
        _id: "3",
        slug: "clear-consent",
        preview: "/clear-consent.webp",
        title: "Professional Logo For Clear Consent",
        description: "I designed a professional and modern logo for Clear Consent, a cybersecurity company committed to digital safety and user privacy. The logo embodies security, trust, and transparency, using a sleek and minimalistic design that reflects the company's mission. With a strong yet clean typography and a shield-inspired icon, the design conveys protection and reliability. The color palette was carefully chosen to evoke a sense of authority and trustworthiness, making it a perfect fit for the cybersecurity industry.",
        client: "Jasmin Patel",
        date: "2025-01-05",
        price: '200'
    },
    {
        _id: "4",
        slug: "amul",
        preview: "/amul-mock.webp",
        title: "Amul Redesigned Website",
        description: "Experience a modern, sleek redesign of Amul&#39;s website, blending tradition with innovation. With an intuitive UI, engaging animations, and seamless navigation, this demo enhances user experience while celebrating Amul&#39;s legacy of quality dairy products.",
        client: "Amul",
        tech: ["HTML", "Javascript", "Tailwind CSS", "GSAP", "ScrollTrigger"],
        link: "https://amul-clone.netlify.app/",
        date: "2021-09-01",
        price: '1500'
    },
    {
        _id: "5",
        slug: "winmark",
        preview: "/winmark.webp",
        title: "Winmark Corporation – Powering Innovation, Ensuring Reliability",
        description: "Winmark Corporation is your trusted partner for all electrical services, from installations and maintenance to repairs and advanced electrical solutions. With a commitment to safety, efficiency, and innovation, we deliver high-quality electrical work for residential, commercial, and industrial projects. Whether it’s wiring, panel upgrades, lighting solutions, or custom electrical designs, our expert team ensures seamless execution and long-lasting performance. Choose Winmark Corporation for reliable, future-ready electrical solutions that power your world.",
        client: "SanjayBhai Parmar",
        tech: ["Next.js", "Typescript", "Tailwind CSS"],
        // link: "https://amul-clone.netlify.app/",
        date: "2024-09-01",
        price: '600'
    },
]

export default projects;