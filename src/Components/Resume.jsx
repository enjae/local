import React from "react";
import "../App.css";
import Navbar from "./Navbar";
import Nandini from "../assets/Nandini Jaryal - enjae.jpeg";
import { Link } from "react-router-dom";

const Resume = () => {
  return (
    <div className="md:container md:mx-auto ">
      <header className="sticky top-0 z-50 sm:px-16 px-6 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <Navbar />
        </div>
      </header>
      {/*<Link to="/Components/Home" className='fixed px-5 py-4 '>
    <svg className="h-8 w-4 text-gray-400"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />  <polyline points="9 22 9 12 15 12 15 22" /></svg>
  </Link>*/}
      <div className="mt-6 max-w-screen-lg md:flex mx-auto bg-white">
        <div className="md:w-1/3 p-2">
          <div className=" md:fixed">
            <div className="md:block ">
              <img className="h-20 w-20 mx-auto rounded-lg " src={Nandini} />
              <div className="mb-12 text-center mt-4 justify-center items-left mx-4">
                <h1 className="text-xl text-gray-700 font-bold">
                  Nandini Jaryal
                </h1>
                <div className="md:text-sm text-gray-600">
                  Software Engineer
                </div>
                <div className="text-gray-600 md:hidden mt-1">
                  (jarialnandini1911@gmail.com)
                </div>
              </div>
            </div>
            <div className="mx-4 my-4 hidden md:block">
              <div className="my-5 text-sm text-gray-600 flex">
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path d="M20,4H6C4.897,4,4,4.897,4,6v5h2V8l6.4,4.8c0.178,0.133,0.389,0.2,0.6,0.2s0.422-0.067,0.6-0.2L20,8v9h-8v2h8 c1.103,0,2-0.897,2-2V6C22,4.897,21.103,4,20,4z M13,10.75L6.666,6h12.668L13,10.75z" />
                    <path d="M2 12H9V14H2zM4 15H10V17H4zM7 18H11V20H7z" />
                  </svg>
                </div>
                jarialnandini1911@gmail.com
              </div>
              <div className="my-5 text-sm text-gray-600 flex">
                <div className="mr-2">
                  <svg
                    className="text-gray-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,14c2.206,0,4-1.794,4-4s-1.794-4-4-4s-4,1.794-4,4S9.794,14,12,14z M12,8c1.103,0,2,0.897,2,2s-0.897,2-2,2 s-2-0.897-2-2S10.897,8,12,8z" />
                    <path d="M11.42,21.814C11.594,21.938,11.797,22,12,22s0.406-0.062,0.58-0.186C12.884,21.599,20.029,16.44,20,10 c0-4.411-3.589-8-8-8S4,5.589,4,9.995C3.971,16.44,11.116,21.599,11.42,21.814z M12,4c3.309,0,6,2.691,6,6.005 c0.021,4.438-4.388,8.423-6,9.73C10.389,18.427,5.979,14.441,6,10C6,6.691,8.691,4,12,4z" />
                  </svg>
                </div>
                Shimla, Himachal Pradesh
              </div>
              <a
                href="https://www.linkedin.com/in/nandinijaryal/"
                className="my-5  text-sm text-gray-600 flex"
              >
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h16c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z M8.339,18.337H5.667	v-8.59h2.672V18.337z M7.003,8.574c-0.856,0-1.548-0.694-1.548-1.548s0.691-1.548,1.548-1.548c0.854,0,1.548,0.693,1.548,1.548	S7.857,8.574,7.003,8.574z M18.338,18.337h-2.669V14.16c0-0.996-0.018-2.277-1.388-2.277c-1.39,0-1.601,1.086-1.601,2.207v4.248	h-2.667v-8.59h2.56v1.174h0.037c0.355-0.675,1.227-1.387,2.524-1.387c2.704,0,3.203,1.778,3.203,4.092V18.337z" />
                  </svg>
                </div>
                LinkedIn
              </a>
            </div>
            <div className="mx-4 hidden md:block">
              <Link
                to="/components/projects"
                className="inline-flex items-center justify-center bg-gray-600 hover:bg-gray-500 focus:outline-none focus:border-gray-700 focus:shadow-outline-blue active:bg-gray-700 transition duration-150 ease-in-out w-full py-2 text-white rounded text-sm"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
        <div className="md:w-2/3 p-2 w-full sm:border-l-2 bg-white">
          <div className="mx-4 mb-6">
            <h1 className="mb-4 text-2xl text-gray-700 font-bold">Summary</h1>
            <p className="text-md">
              I enjoy turning abstract ideas into tangible solutions through
              coding. Forever on the hunt for the most streamlined solutions to
              problems, while keeping the elegance of code a top priority.
            </p>
          </div>
          <div className="mx-4">
            <h1 className="mb-4 text-2xl text-gray-700 font-bold">Education</h1>
            <ul>
              <li className="mb-4">
                <h2 className="text-xl font-medium text-gray-700">
                  Dr BR Ambedkar National Institute of Technology Jalandhar
                </h2>
                <div className="mt-1">
                  <div>
                    <i className="bx bx-buildings" style={{ color: "#666" }} />
                    <small className="text-base text-gray-700">
                      B.Tech Computer Science and Engineering
                    </small>
                  </div>
                  <div>
                    <i
                      className="bx bx-calendar text-sm"
                      style={{ color: "#666" }}
                    />
                    <small className="text-sm text-gray-600">
                      Aug 2019 - June 2023
                    </small>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="mx-4">
            <h1 className="mb-4 text-2xl text-gray-700 font-bold">
              Experience
            </h1>
            <ul>
              <li className="mb-4">
                <h2 className="text-xl font-medium text-gray-700">
                  Software Engineer
                </h2>
                <div className="mt-1">
                  <div>
                    <i className="bx bx-buildings" style={{ color: "#666" }} />
                    <small className="text-base text-gray-700">
                      Samsung Bangalore (SRIB)
                    </small>
                  </div>

                  <div>
                    <i
                      className="bx bx-calendar text-sm"
                      style={{ color: "#666" }}
                    />
                    <small className="text-sm text-gray-600">
                      June 2022 - August 2022
                    </small>
                  </div>
                  <div className="text-gray-500">
                    <small>
                      <ul className="list-disc">
                        <li>
                          Part of the PM and Big data as a Service - Networking
                          Team.
                        </li>
                        <li>
                          Automated and optimised the log file analysis process
                          for log files, working with python, putty did shell
                          scripting, and employed Linux tools.
                        </li>
                        <li>
                          Significantly reduced the model’s time complexity by
                          60% and developed algorithms for error detection,
                          archive extraction from scratch
                        </li>
                      </ul>
                    </small>
                  </div>
                </div>
              </li>
              <li className="mb-4">
                <h2 className="text-xl font-medium text-gray-700">
                  Core Team Member
                </h2>
                <div className="mt-1">
                  <div>
                    <i className="bx bx-buildings" style={{ color: "#666" }} />
                    <small className="text-base text-gray-700">
                      Core Team Member
                    </small>
                  </div>

                  <div>
                    <i
                      className="bx bx-calendar text-sm"
                      style={{ color: "#666" }}
                    />
                    <small className="text-sm text-gray-600">
                      June 2020 – Aug 2022
                    </small>
                  </div>
                  <div className="text-gray-500">
                    <small>
                      <ul className="list-disc">
                        <li>
                          Organising and Maintaining Workshops, coding sessions
                          and webinars
                        </li>
                        <li>
                          Worked as a Mentor in HackMol 3.0, a 36-hour long
                          virtual hackathon by DSC NIT Jalandhar for people
                          across the nation.
                        </li>
                        <li>
                          Worked on Projects in collaboration with other service
                          providers like Github, Microsoft Azure etc.
                        </li>
                      </ul>
                    </small>
                  </div>
                </div>
              </li>
              <li className="mb-4">
                <h2 className="text-xl font-medium text-gray-700">
                  Project Management Intern
                </h2>
                <div className="mt-1">
                  <div>
                    <i className="bx bx-buildings" style={{ color: "#666" }} />
                    <small className="text-base text-gray-700">
                      FreeCo Pvt Ltd
                    </small>
                  </div>
                  <div className="">
                    <i className="bx bx-calendar" style={{ color: "#666" }} />
                    <small className="text-sm text-gray-600">
                      Jan 2020 - Mar 2020
                    </small>
                  </div>
                  <div className="text-gray-500">
                    <small>
                      <ul className="list-disc">
                        <li>
                          Worked as a Project Manager for an NIT Jalandhar
                          incubated ed-TECH start-up
                        </li>
                        <li>
                          Single-handedly handled projects for leading ed-Tech
                          companies as Doubtnut, Embibe etc
                        </li>
                        <li>
                          Worked with multi-disciplinary teams to build
                          solutions to problems.
                        </li>
                      </ul>
                    </small>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="mx-4">
            <h1 className="mb-4 text-2xl text-gray-700 font-bold">Skill</h1>
            <ul>
              <li className="mb-6 flex flex-wrap">
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  C++
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Python
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  ReactJS
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Data Structures
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Web Development
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Database Design
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  MySql
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Docker
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Object Oriented Programming
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Operating Systems
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Code Principles
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Design Pattern
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Tailwind css/Bootstrap
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Sass/Scss
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Networking
                </span>
              </li>
            </ul>
          </div>
          <div className="mx-4">
            <h1 className="mb-4 text-2xl text-gray-700 font-bold">
              Positon Of Responsibilty
            </h1>
            <ul className="list-disc text-md">
              <li className="mb-2">
                <div className="mt-1">
                  <div>
                    <i className="bx bx-buildings" style={{ color: "#666" }} />
                    <small className="text-base text-gray-700">
                      Student Head, OpenGeest (Official Society of Department of
                      Computer Science and Engineering, NIT Jalandhar).
                    </small>
                  </div>
                </div>
              </li>
              <li className="mb-2">
                <div className="mt-1">
                  <div>
                    <i className="bx bx-buildings" style={{ color: "#666" }} />
                    <small className="text-base text-gray-700">
                      Student Head, SARC (Student Alumni Relation Cell, NIT
                      Jalandhar).
                    </small>
                  </div>
                </div>
              </li>
              <li className="mb-2">
                <div className="mt-1">
                  <div>
                    <i className="bx bx-buildings" style={{ color: "#666" }} />
                    <small className="text-base text-gray-700">
                      Head, Reverie (Official Fashion Society of NIT Jalandhar).
                    </small>
                  </div>
                </div>
              </li>
              <li className="mb-2">
                <div className="mt-1">
                  <div>
                    <i className="bx bx-buildings" style={{ color: "#666" }} />
                    <small className="text-base text-gray-700">
                      Student Co-ordinator, HackNITJ 2022, NIT Jalandhar.
                    </small>
                  </div>
                </div>
              </li>
              <li className="mb-2">
                <div className="mt-1">
                  <div>
                    <i className="bx bx-buildings" style={{ color: "#666" }} />
                    <small className="text-base text-gray-700">
                      Co-ordinator, TechNITi 2023, NIT Jalandhar.
                    </small>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
