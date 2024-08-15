import React from 'react';
import Image from 'next/image';
import SkillBar from '../skill/page';

const About = ({ percentage }: any) => {
    const skills = [
        { skill: "HTML", percentage: 90 },
        { skill: "CSS", percentage: 85 },
        { skill: "Tailwind CSS", percentage: 80 },
        { skill: "JavaScript", percentage: 75 },
        { skill: "Next.js", percentage: 70 },
        { skill: "TypeScript", percentage: 80 },
    ];
    return (
        <div className="bg-gradient-to-tr from-[#e9e1e4] to-[#140e5c] p-8 sm:p-12 lg:p-20">
            <div className="flex flex-col lg:flex-row items-center">
                <div className="flex-shrink-0 mb-6 lg:mb-0 lg:mr-12">
                    <Image
                        src="/MyImage.jpeg"
                        width={300}
                        height={300}
                        className="brightness-100 contrast-200 saturate-100 rounded-lg"
                        alt="image"
                    />
                </div>
                <div className="text-white max-w-2xl">
                    <h1 className="text-3xl font-bold mb-6">About Me</h1>
                    <p className="text-lg">
                        Hey there! I'm Alex Thompson, a passionate web developer and UI/UX designer with a knack for turning complex ideas into sleek, user-friendly interfaces. With over 5 years of experience in the tech industry, I've honed my skills in both frontend and backend development, specializing in JavaScript, React, and Tailwind CSS.
                    </p>
                    <p className="text-lg mt-4">
                        I love creating dynamic and engaging websites that not only look great but also provide a seamless experience for users. My journey into the world of web development started out of sheer curiosity, and it quickly turned into a full-blown passion. Whether it's building responsive designs or optimizing the performance of web applications, I always strive for perfection and innovation.
                    </p>
                    <p className="text-lg mt-4">
                        When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or dabbling in photography. I'm a firm believer in continuous learning, and I enjoy sharing my knowledge with others through blogs and workshops.
                    </p>
                    <p className="text-lg mt-4">
                        Let's connect and build something amazing together!
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8 mt-10">
                <h1 className="text-3xl font-bold mb-6 text-white">My Skills</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((item, index) => (
                        <SkillBar key={index} skill={item.skill} percentage={item.percentage} />
                    ))}
                </div>
            </div>

            <div className="text-center mt-10">
                <a href="cv_9_1723143531472.pdf">
                <button className="glow-on-hover">
                    Download CV
                </button>
                </a>
            </div>

            <div className="py-8 px-6 bg-white shadow-lg rounded-lg mt-16 mx-4 lg:mx-auto max-w-4xl">
                <div className="text-center">
                    <h2 className="text-3xl font-semibold text-gray-800">My Story</h2>
                    <p className="mt-4 text-gray-600">
                        Ever since I was a child, I have been fascinated by technology. My journey started with exploring the ins and outs of basic HTML and CSS. Over time, my passion grew, leading me to delve deeper into web development, mastering tools like Tailwind CSS and frameworks like Next.js. Today, I continue to refine my skills in JavaScript and TypeScript, building dynamic and responsive web applications. My story is one of continuous learning and unwavering curiosity, always eager to embrace the next challenge.
                    </p>
                </div>
                <div className="flex justify-end mt-4">
                    <a href="#" className="text-xl font-medium text-indigo-500">Read More</a>
                </div>
            </div>
        </div>
    );
};

export default About;
