'use client'

import { ReactTyped } from 'react-typed';
import { SectionTitle } from 'components/SectionTitle';
import { LinkToSection } from 'components/Index/LinkToSection';
import { ProjectsList } from 'components/Index/ProjectsList';
import ThemeToggle from 'components/ThemeToggle';
import {
	containerClasses,
	linkClasses,
	sectionBodyClasses
} from 'components/styles';

export default function Home() {
	return (
		<div>
			<main className="theme-bg">
				<div className="min-h-screen flex flex-col justify-center relative">
					<div className={`${containerClasses} z-10`}>
						<div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
						</div>
						<SectionTitle big accentText="Nice to meet you! I'm">
							<ReactTyped
								strings={['Shayan Shabani.']}
								typeSpeed={50}
								backSpeed={50}
								loop={false}
							/>
						</SectionTitle>
						<div className="h-4 sm:h-0"></div>
						<div className={sectionBodyClasses}> <ThemeToggle />
							<LinkToSection title="About Me" href="about">
								I live in Los Angeles and currently study Computer Science and History at Northwestern.
							</LinkToSection>
							<LinkToSection title="Work Experience" href="experience">
								I have worked at Contrast, Holistic, and the Misericordia Home.
							</LinkToSection>
							<LinkToSection title="Projects" href="projects">
								I have built a production-grade DBMS, AI applications, and have led large-scale projects.
							</LinkToSection>
							<LinkToSection title="Contact Me" href="contact">
								Please don't hesitate to reach out &mdash; I would love to chat!
							</LinkToSection>
						</div>
					</div>
				</div>

				<div className={containerClasses} id="about">
					<SectionTitle big accentText="01">
						About Me
					</SectionTitle>
					<div className={sectionBodyClasses}>
					<p>
						I am interested in databases, startups, and AI, especially thread-safe OLTP designs, scalable distributed architectures, and AI-enhanced robotic process automation.
					</p>
					</div>
				</div>

				<div className={containerClasses} id="experience">
				<SectionTitle big accentText="02">
					Work Experience
				</SectionTitle>
				<div className="mb-6 lg:mb-10 text-slate-400 sm:text-lg lg:text-xl leading-relaxed max-w-prose">
					<h2 className="text-slate-800 dark:text-slate-200 text-lg md:text-xl lg:text-2xl font-bold pb-0.5">
						Contrast Healthcare &mdash; Engineering and Growth
					</h2>
					<p className="text-slate-400 dark:text-slate-400 mt-0">
						Built and scaled an EHR-integrated AI charting platform and an AI Scribe over the summer. Raised $4M from Newlands, Garage Ventures, Liquid 2 Ventures, and more.
					</p>
				</div>
				
				<div className="mb-6 lg:mb-10 text-slate-400 sm:text-lg lg:text-xl leading-relaxed max-w-prose">
					<h2 className="text-slate-800 dark:text-slate-200 text-lg md:text-xl lg:text-2xl font-bold pb-0.5">
						Holistic Index &mdash; Consulting and Operations
					</h2>
					<p className="text-slate-400 dark:text-slate-400 mt-0">
						Improved client management infrastructure for a consulting firm. Built file scrapers to increase client intake efficiency and redesigned the website UI.
					</p>
				</div>
				
				<div className="mb-6 lg:mb-10 text-slate-400 sm:text-lg lg:text-xl leading-relaxed max-w-prose">
					<h2 className="text-slate-800 dark:text-slate-200 text-lg md:text-xl lg:text-2xl font-bold pb-0.5">
						Misericordia Home &mdash; Software and Project Managment
					</h2>
					<p className="text-slate-400 dark:text-slate-400 mt-0">
						Led a team to create an educational device for adults with intellectual disabilities as well as a two-sided, foldable shower ramp to help 100+ residents with motor disabilities overcome shower curbs with ease.
					</p>
				</div>
			</div>
			<div className={containerClasses} id="projects">
					<SectionTitle big accentText="03">
						Projects
					</SectionTitle>
					<div className={sectionBodyClasses}>
						<p>Always looking for exciting things to work on!</p>
					</div>
					<div className="h-8 lg:h-12"></div>
					<ProjectsList />
				</div>
				<div className={containerClasses} id="contact">
					<SectionTitle big accentText="04">
						Contact Me
					</SectionTitle>
					<div className={sectionBodyClasses}>
						<p>Can't wait to meet you :)</p>
					</div>
					<div className="font-mono theme-text sm:text-lg md:text-xl mt-4 md:mt-6">
						<a className={linkClasses} href="mailto:shayanshabani@u.northwestern.edu" target="_blank">
							Email
						</a>{' '}
						·{' '}
						<a className={linkClasses} href="https://github.com/shayan-shabani" target="_blank">
							Github
						</a>{' '}
						·{' '}
						<a
							className={linkClasses}
							href="https://www.linkedin.com/in/shayan-shabani-618b32224/"
							target="_blank"
						>
							Linkedin
						</a>
					</div>
				</div>

				<div className="h-8 md:h-12 lg:h-16"></div>
					<div className="font-mono theme-text text-xs md:text-sm lg:text-base">
						Copyright {new Date().getFullYear()} Shayan Shabani.
				</div>
			</main>
		</div>
	);
}
