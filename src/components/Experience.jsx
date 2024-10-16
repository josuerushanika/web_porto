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
          <h2 className="text-3xl font-bold  font-title mb-10 text-white  text-center">
            EXPERIENCE
          </h2>
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
                      <h3 className="text-lg font-medium">
                        {" "}
                        <span className="text-coding-color">
                          Full Stack Developer, Network Engineer and Cyber
                          Security Specialist Consultant{" "}
                        </span>
                      </h3>
                      <p className="mt-1  text-sm">August 2021 - Present</p>

                      <ul className="list-disc list-inside mt-3  text-base list-exp md:text-base/8">
                        Developed custom web solutions and dynamic websites
                        using various programming languages and frameworks,
                        enhancing client online presence. Integrated APIs,
                        optimized website performance, and deployed projects on
                        Netlify. Managed Windows, Linux servers, VMware ESXi,
                        Cisco Meraki, Mikrotik network devices, VPNs, and
                        cybersecurity tools. Conducted penetration testing,
                        IDS/IPS configuration, and SIEM management. Involved in
                        web development, network security, and IoT projects,
                        including GPS solutions and SQL Server maintenance.
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-4/5">
                <div className="space-y-4 pt-4 experience-2">
                  <div className="bg-gray-800 text-white shadow-lg rounded-lg overflow-hidden">
                    <div className="px-4 py-5 sm:p-6">
                      <h3 className="text-lg font-medium ">
                        {" "}
                        Network Engineer Intern at{" "}
                        <span className="text-coding-color">
                          Spidernet Burundi
                        </span>
                      </h3>
                      <p className="mt-1 text-base">January2021 - May 2021</p>
                   
                      <ul className="list-disc list-inside mt-3  text-base md:text-base/7">
                        Configured Cisco equipment, PBX systems, and server
                        hardware. Installed Nanostations, Rocket antennas,
                        AirFiber, Mikrotik, routers, switches (Cisco, Huawei,
                        D-Link, TP-Link), and GSM/GPRS systems. Provided
                        technical support and collaborated with teams. Managed
                        Windows and Linux servers, Active Directory, DHCP,
                        firewalls, and VPNs. Installed VOIP telephony systems
                        and conducted vulnerability assessments, penetration
                        testing, and cybersecurity management. Designed and
                        maintained responsive websites using HTML, CSS,
                        JavaScript, React, SQL, and Ruby on Rails.
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