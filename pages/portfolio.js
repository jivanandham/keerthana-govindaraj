import Head from "next/head";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Portfolio() {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Keerthana Govindaraj - Portfolio</title>
        <meta name="description" content="Portfolio and CV of Keerthana Govindaraj - Chemist, Researcher, and Electrochemical Scientist" />
      </Head>
      
      <div className="flex flex-col min-h-screen">
        {/* Navigation */}
        <nav className="bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/" className="text-2xl font-bold text-indigo-600">KG</Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link href="/" className="inline-flex items-center px-1 pt-1 text-gray-500 hover:text-indigo-600">
                    Home
                  </Link>
                  <Link href="/portfolio" className="inline-flex items-center px-1 pt-1 border-b-2 border-indigo-500 text-indigo-600 font-medium">
                    Portfolio
                  </Link>
                  <Link href="/blog" className="inline-flex items-center px-1 pt-1 text-gray-500 hover:text-indigo-600">
                    Blog
                  </Link>
                </div>
              </div>
              
              <div className="-mr-2 flex items-center sm:hidden">
                <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Keerthana Govindaraj</h1>
                <h2 className="text-2xl md:text-3xl font-medium mb-6 text-indigo-100">Chemist & Electrochemical Scientist</h2>
                <p className="text-lg mb-8 max-w-lg text-indigo-100">
                  Passionate about exploring the intersection of chemistry and electrochemistry to develop innovative solutions for energy and environmental challenges.
                </p>
                <div className="flex space-x-4">
                  <a href="mailto:keerthanajiva@gmail.com" className="bg-white text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-md text-lg font-medium shadow-lg transition-all">
                    Contact Me
                  </a>
                  <a href="https://www.linkedin.com/in/kiirthana" target="_blank" rel="noopener noreferrer" className="bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-3 rounded-md text-lg font-medium shadow-lg transition-all">
                    LinkedIn
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="w-64 h-64 rounded-full bg-white p-2 shadow-xl">
                  <div className="w-full h-full rounded-full bg-indigo-100 flex items-center justify-center">
                    <span className="text-6xl font-bold text-indigo-600">KG</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="bg-white shadow-md py-4 sticky top-16 z-40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-3 md:gap-6">
              <Link href="#education" className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm md:text-base flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0"></path>
                </svg>
                Education
              </Link>
              <Link href="#experience" className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm md:text-base flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                Experience
              </Link>
              <Link href="#projects" className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm md:text-base flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
                Projects
              </Link>
              <Link href="#publications" className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm md:text-base flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
                Publications
              </Link>
              <Link href="#skills" className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm md:text-base flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                Skills
              </Link>
              <Link href="#conferences" className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm md:text-base flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0"></path>
                </svg>
                Conferences
              </Link>
              <Link href="#honors" className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm md:text-base flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
                Honors
              </Link>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-gray-50 py-12 flex-grow">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {/* Education Section */}
              <section id="education">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-indigo-200 pb-2 inline-block">Education and Training</h2>
                <div className="space-y-8">
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-indigo-500">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">Master of Science (Chemistry)</h3>
                        <p className="text-indigo-600 font-medium">University of Pittsburgh</p>
                      </div>
                      <div className="text-gray-600 mt-2 md:mt-0 bg-indigo-50 px-3 py-1 rounded-full text-sm">08/2022 – Current</div>
                    </div>
                    <div className="mt-4 text-gray-700">
                      <p><span className="font-medium">Country:</span> United States</p>
                      <p><span className="font-medium">Website:</span> <a href="https://www.pitt.edu/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">https://www.pitt.edu/</a></p>
                      <p><span className="font-medium">Field(s) of study:</span> Chemistry</p>
                      <p><span className="font-medium">Final grade:</span> 3.875/4</p>
                      <p><span className="font-medium">Thesis:</span> Fundamental Studies on Chiral Induced Spin Selectivity using Magnetic Conductive Atomic Force Microscopy</p>
                      <p><span className="font-medium">Course work:</span> Electroanalytical Chemistry, Descriptive Inorganic Chemistry, Chemical Separations and Chemical Symmetry</p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-indigo-500">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">Bachelor of Technology (Chemical and Electrochemical Engineering)</h3>
                        <p className="text-indigo-600 font-medium">CSIR-Central Electrochemical Research Institute</p>
                      </div>
                      <div className="text-gray-600 mt-2 md:mt-0 bg-indigo-50 px-3 py-1 rounded-full text-sm">08/2017 – 04/2021</div>
                    </div>
                    <div className="mt-4 text-gray-700">
                      <p><span className="font-medium">Country:</span> India</p>
                      <p><span className="font-medium">Website:</span> <a href="https://www.cecri.res.in/Default.aspx" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">https://www.cecri.res.in/Default.aspx</a></p>
                      <p><span className="font-medium">Field(s) of study:</span> Chemical and Electrochemical Engineering</p>
                      <p><span className="font-medium">Final grade:</span> 8.76/10</p>
                      <p><span className="font-medium">Thesis:</span> Electrospun ZIF based Fibrous Materials for Electrocatalytic Water Splitting</p>
                      <p><span className="font-medium">Course Work:</span> Electrodics and Electrocatalysis, Electrochemical Material Science, Electrochemical Energy Conversion and Storage, Corrosion Science and Engineering, Cathodic Protection and Electrophoretic Coating, Electrometallurgy, Electrochemical Process Technology</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Work Experience Section */}
              <section id="experience">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-indigo-200 pb-2 inline-block">Work Experience</h2>
                <div className="space-y-8">
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-indigo-500">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">Graduate Student Researcher</h3>
                        <p className="text-indigo-600 font-medium">University of Pittsburgh</p>
                      </div>
                      <div className="text-gray-600 mt-2 md:mt-0 bg-indigo-50 px-3 py-1 rounded-full text-sm">01/2023 – Current</div>
                    </div>
                    <div className="mt-4 text-gray-700">
                      <p><span className="font-medium">Country:</span> United States</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Project planning and designing and performing experiments</li>
                        <li>Writing and review of manuscript</li>
                        <li>Project update/journal club presentation in group meetings</li>
                        <li>Instrument (Rotating Disk Electrode-ALS Japan) maintainance and training people when needed</li>
                        <li>Managing chemical inventory and ordering of chemicals</li>
                        <li>Trained user of Nanoscale Fabrication Characterization Facility Cleanroom at University of Pittsburgh</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-indigo-500">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">Graduate Teaching Fellow</h3>
                        <p className="text-indigo-600 font-medium">University of Pittsburgh</p>
                      </div>
                      <div className="text-gray-600 mt-2 md:mt-0 bg-indigo-50 px-3 py-1 rounded-full text-sm">07/2022 – 04/2024</div>
                    </div>
                    <div className="mt-4 text-gray-700">
                      <p><span className="font-medium">Country:</span> United States</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Supervised and conducted laboratory experiments, guiding students in their hands-on learning experiences</li>
                        <li>Instructed students on fundamental chemistry concepts and emphasized safety protocols during pre-lab sessions</li>
                        <li>Assessed student performance through experiments and post-lab assignments, providing constructive feedback to enhance their understanding and skills</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Projects Section */}
              <section id="projects">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-indigo-200 pb-2 inline-block">Projects</h2>
                <div className="space-y-8">
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">Impact of Chiral Additives on Catalyst Performance in Bifunctional Oxygen Electrocatalysis</h3>
                    <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-700">
                      <li>Investigated the effect of chiral additives on bifunctional oxygen electrocatalysis to evaluate their impact on catalytic performance, understanding the kinetics of the reaction using rotating ring-disk electrode analysis</li>
                      <li>Conducted experiments using rotating ring-disk electrode (RRDE) measurement and performed cyclic voltammetry (CV), electrochemical surface area (ECSA), and electrochemical impedance spectroscopy (EIS) to analyze chiral catalyst activity</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">Enantioselective response of chiral biomolecules on chiral composite electrode surfaces</h3>
                    <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-700">
                      <li>Investigated the enantioselective sensing of chiral molecules on inorganic organic composite and electropolymerized chiral polyaniline films as electrode materials</li>
                      <li>Applied the electrochemical pulse potential method to reduce the chiral self-assembled monolayers formation time on gold electrodes from 24–48 hours to 15–20 minutes, significantly improving experimental efficiency</li>
                      <li>Utilized cyclic voltammetry (CV) and pulse voltammetry techniques (DPV,SWV) to analyze the electrochemical behavior of chiral biomolecules and their interactions with chiral electrode surfaces</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">Measurement Platform for Quantifying Longitudinal Spin Polarization of Chiral Materials</h3>
                    <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-700">
                      <li>Applied magnetic conductive Atomic Force Microscopy (mc-AFM) to investigate longitudinal versus transverse spin transport in single chiral polyaniline fibers</li>
                      <li>Collaborated within the research group and with external research group to study spin transport on a single chiral polyaniline fiber, contributed to the manuscript writing and review</li>
                      <li>Coordinated within the team to ensure maintaining experimental protocols and data consistency</li>
                      <li>Used python programming to reduce data analysis time</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">Electron Spin Polarization facilitates the Urea Oxidation and Oxygen Evolution Reaction</h3>
                    <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-700">
                      <li>Prepared electropolymerized chiral polyaniline films and developed procedure to maintain consistent film thickness across different trials</li>
                      <li>Applied magnetic conductive atomic force microscopy (mc-AFM) to investigate the electron spin polarization in chiral polyaniline film morphology</li>
                      <li>Results contributed to the understanding of electron spin filtering ability of chiral polyaniline films and their impact for urea oxidation and oxygen evolution reactions</li>
                      <li>Contributed to the manuscript writing and review</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">Electrospinning of transition metal incorporated ZIF based Fibrous Materials for Electrocatalytic Water Splitting</h3>
                    <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-700">
                      <li>Fabricated mono and bimetallic transition metal-incorporated ZIF-based fibers using a wet chemical and electrospinning approach and electrochemical characterization</li>
                      <li>Conducted electrochemical characterization for water splitting studies using Linear Sweep Voltammetry (LSV), Cyclic Voltammetry (CV), Electrochemical Impedance Spectroscopy (EIS), Tafel analysis, and Chronoamperometry to assess the catalytic performance and efficiency of the fabricated materials for water splitting</li>
                      <li>Results demonstrated improved catalytic activity in transition metal-incorporated ZIF-based fibers in comparison with noble metal catalyst for enhanced electrochemical water splitting reaction</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Publications Section */}
              <section id="publications">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-indigo-200 pb-2 inline-block">Publications</h2>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">Manuscripts in Preparation</h3>
                    <ul className="list-disc pl-5 mt-4 space-y-3 text-gray-700">
                      <li>
                        <p className="font-medium">Measurement Platform for Quantifying Longitudinal Spin Polarization of Chiral Materials</p>
                      </li>
                      <li>
                        <p className="font-medium">Electron Spin Polarization facilitates the Urea Oxidation Reaction</p>
                      </li>
                      <li>
                        <p className="font-medium">Chiral Spin Filtering Layer Mediated Electrocatalyst for Oxygen Evolution Reaction</p>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">Published Papers</h3>
                    <ul className="list-disc pl-5 mt-4 space-y-3 text-gray-700">
                      <li>
                        <p className="font-medium">[2021] Electrospun Fe-Incorporated ZIF-67 Nanofibers for Effective Electrocatalytic Water Splitting</p>
                      </li>
                      <li>
                        <p className="font-medium">[2021] Highly Stable Trimetallic (Co, Ni, and Fe) Zeolite Imidazolate Framework Microfibers: An Excellent Electrocatalyst for Water Oxidation</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Skills Section */}
              <section id="skills">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-indigo-200 pb-2 inline-block">Skills</h2>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">Instrumentation</h3>
                    <div className="mt-4 text-gray-700">
                      <p>Rotating Ring Disk Electrode, Bipotentiostat, pH meter, UV-Vis and Circular Dichroism Spectroscopy, Bruker Dimension Icon Atomic Force Microscopy, Plassys E-Beam Evaporation, Plasma Enhanced Atomic Layer Deposition (PE-ALD), Bruker DektakXT Surface Profiler, Spin Coater, Contact Angle Goniometer</p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">Electrochemical Techniques</h3>
                    <div className="mt-4 text-gray-700">
                      <p>Voltammetry, Electrochemical Impedance Spectroscopy, Chronoamperometry, Tafel Analysis</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Conferences Section */}
              <section id="conferences">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-indigo-200 pb-2 inline-block">Conferences and Seminars</h2>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Gordon Research Conference on Electron Spin Interactions with Chiral Molecules and Materials</h3>
                    </div>
                    <div className="text-gray-600 mt-2 md:mt-0 bg-indigo-50 px-3 py-1 rounded-full text-sm">30/07/2023 – 04/08/2023</div>
                  </div>
                  <div className="mt-2 text-gray-700">
                    <p>New Hampshire, United States of America</p>
                  </div>
                </div>
              </section>

              {/* Honors and Awards Section */}
              <section id="honors">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-indigo-200 pb-2 inline-block">Honors and Awards</h2>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">A & S Fellowship for Excellence in classroom learning and research</h3>
                        <p className="text-indigo-600 font-medium">University of Pittsburgh</p>
                      </div>
                      <div className="text-gray-600 mt-2 md:mt-0 bg-indigo-50 px-3 py-1 rounded-full text-sm">04/2024</div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">Ashe Merit Award</h3>
                        <p className="text-indigo-600 font-medium">University of Pittsburgh</p>
                      </div>
                      <div className="text-gray-600 mt-2 md:mt-0 bg-indigo-50 px-3 py-1 rounded-full text-sm">07/2022</div>
                    </div>
                    <div className="mt-2 text-gray-700">
                      <p>Provided for early stage graduate students for excellent academic achievement</p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">University Gold Medalist</h3>
                        <p className="text-indigo-600 font-medium">Anna University</p>
                      </div>
                      <div className="text-gray-600 mt-2 md:mt-0 bg-indigo-50 px-3 py-1 rounded-full text-sm">04/2021</div>
                    </div>
                    <div className="mt-2 text-gray-700">
                      <p>Awarded to the top-ranking student in the undergraduate program</p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">Hariprakash Memorial Most Promising Student Award</h3>
                        <p className="text-indigo-600 font-medium">CSIR - Central Electrochemical Research Institute</p>
                      </div>
                      <div className="text-gray-600 mt-2 md:mt-0 bg-indigo-50 px-3 py-1 rounded-full text-sm">03/2020</div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">Second Prize with cash award for Poster Presentation of Undergraduate Research work</h3>
                        <p className="text-indigo-600 font-medium">National Institute of Technology -Trichy, India</p>
                      </div>
                      <div className="text-gray-600 mt-2 md:mt-0 bg-indigo-50 px-3 py-1 rounded-full text-sm">10/2019</div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="fixed bottom-8 right-8">
          <a href="#" className="bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </a>
        </div>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 mt-auto">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Keerthana Govindaraj</h3>
                <p className="text-gray-300 mb-4">Chemist | Researcher | Electrochemical Scientist</p>
                <p className="text-gray-300"> 2024 All rights reserved</p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <a href="mailto:keerthanajiva@gmail.com" className="hover:text-indigo-300">keerthanajiva@gmail.com</a>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Connect</h4>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/in/kiirthana" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827a4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417a9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white">
                    <span className="sr-only">GitHub</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                    </svg>
                  </a>
                </div>
                <div className="mt-4">
                  <Link href="/" className="text-indigo-300 hover:text-white">Home</Link> | 
                  <Link href="/portfolio" className="text-white font-medium mx-2">Portfolio</Link> | 
                  <Link href="/blog" className="text-indigo-300 hover:text-white">Blog</Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
