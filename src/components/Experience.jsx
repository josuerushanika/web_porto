import React from "react";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
    return (
        <section id="experience" className="py-8 ">
            <div className="experience-container ">
                <div className="title">
                    <div className="icon-container flex justify-center text-4xl pb-3">
                    <FaBriefcase className=" text-4xl text-coding-color mb-2" />

                    </div>
                <h2 className="text-3xl font-bold  font-title mb-10 text-white  text-center">Experience</h2>

                        
                </div>
                </div>
            <div className="card-container  flex justify-center  ">  
            <div className="card md:pl-12">
                <div className="  md:items-center">
                    <div className="experience-card-container  md:flex  md:gap-8 md:p-8  px-1 md:text-left ">
                        
                    
                    <div className="md:w-4/5 md:pt-4">
                        <div className="space-y-4 experience-1">
                            <div className="bg-gray-800 text-white shadow-lg rounded-lg overflow-hidden">
                                <div className="px-4 py-5 sm:p-6">
                                    <h3 className="text-lg font-medium">Self employed <span className="text-coding-color">Full Stack Developer</span></h3>
                                    <p className="mt-1  text-sm">August 2021 - Present</p>
                                    <ul className="list-disc list-inside mt-3  text-base list-exp md:text-base/8">
                                        <li>Developed custom web solutions using a variety of programming languages and frameworks</li>
                                        <li>Created static and dynamic websites for clients that received positive feedback,  improved their online presence.</li>
                                        <li>Fixed bugs and optimized website performance, resulting in faster loading times and better user experience.</li>
                                        <li>Integrated various API services, such as GitHub and others API, to display project details.</li>
                                        <li>Deployed and maintained websites on Netlify, ensuring high availability and fast loading times.</li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-4/5">
                        <div className="space-y-4 pt-4 experience-2">
                            <div className="bg-gray-800 text-white shadow-lg rounded-lg overflow-hidden">
                                <div className="px-4 py-5 sm:p-6">
                                    <h3 className="text-lg font-medium "> Network  Engineer  Intern  at  <span className="text-coding-color">Spidernet Burundi</span></h3>
                                    <p className="mt-1 text-base">January2021 - May 2021</p>
                                    <ul className="list-disc list-inside mt-3  text-base md:text-base/7">
                                            <li>Configuration of CISCO equipment, PBX phone systems,Maintain server hardware and address technical
                                                problems.</li>
                                            <li>Installation and configuration of Nanostation ,Rocket antennaM5,AirFiber,Mikrotik,……</li>
                                            <li>Collaborated with other developers and designers on project teams</li>
                                            <li>Installation of Router and switch configuration CISCO,Huawei,MIKROTIK,D-LINK,TP-,LINK,VSat,. </li>
                                            <li>Provided technical support to clients as needed</li>
                                            <li>Installation and configuration DELL Server Windows server 2012 r2</li>
                                            <li>nstallation of VOIP Telephony, CME (Call Manager Express) and Integration with PSTN network.</li>
                                            <li>Created websites with great designs</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div> 
        </section>
    );
};

export default Experience;
