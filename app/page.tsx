'use client'

import { ReactTyped } from 'react-typed';
import { SectionTitle } from 'components/SectionTitle';
import { LinkToSection } from 'components/Index/LinkToSection';
import { ProjectsList } from 'components/Index/ProjectsList';
import ThemeToggle from 'ThemeToggle.tsx';
import {
	containerClasses,
	fancyLinkClasses,
	linkClasses,
	sectionBodyClasses
} from 'components/styles';

export default function Home() {
	return (
		<div>
			<main className="bg-slate-950 dark:bg-gray-900">
				<div className="min-h-screen flex flex-col justify-center relative">
					<div className={`${containerClasses} z-10`}>
						<div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
						{/* SVG background remains unchanged */}
						</div>
						<SectionTitle big accentText="Hi there! I'm">
						<ReactTyped
							strings={['Shayan Shabani.']} // Include the period here
							typeSpeed={50}
							backSpeed={50}
							loop={false}
						/> 
						</SectionTitle>
						<div className="h-4 sm:h-0"></div>
						<div className={sectionBodyClasses}> <ThemeToggle />
							<LinkToSection title="About Me" href="about">
								I'm a Northwestern sophomore studying Computer Science, Statistics, and History. I write code, read the WSJ, and enjoy philosophical conversations with my friends.
							</LinkToSection>
							<LinkToSection title="Work Experience" href="experience">
								I've worked at Contrast, Holistic, and the Misericordia Home.
							</LinkToSection>
							<LinkToSection title="Projects" href="projects">
								I've given a TEDx Talk, built various AI applications, and worked on large-scale initiatives.
							</LinkToSection>
						</div>
						<div className="h-6 md:h-8 xl:h-16"></div>
						<div className="font-mono uppercase text-slate-400 text-sm sm:text-base">
							<a className={fancyLinkClasses} href="mailto:shayanshabani@u.northwestern.edu" target="_blank">
								Email
							</a>{' '}
							·{' '}
							<a
								className={fancyLinkClasses}
								href="https://github.com/shayan-shabani"
								target="_blank"
							>
								Github
							</a>{' '}
							·{' '}
							<a
								className={fancyLinkClasses}
								href="https://linkedin.com/in/https://www.linkedin.com/in/shayan-shabani-618b32224/"
								target="_blank"
							>
								Linkedin
							</a>
						</div>
					</div>
				</div>

				<div className={containerClasses} id="about">
					<SectionTitle big accentText="01">
						About Me
					</SectionTitle>
					<div className={sectionBodyClasses}>
						<p>
							I love solving complex problems. I'm fascinated by the intersection of technology, data, and human experiences. My goal is to use my skills to tackle challenges and make meaningful contributions to the world.
						</p>
					</div>
				</div>

				<div className={containerClasses} id="experience">
					<SectionTitle big accentText="02">
						Work Experience
					</SectionTitle>
					<div className="text-slate-400 sm:text-lg lg:text-xl leading-relaxed max-w-prose">
						<h2 className="text-slate-200 font-medium pb-1 lg:pb-1.5">
							Contrast Healthcare &mdash; Present
						</h2>
						<p>
							Contrast is an AI healthcare startup backed by Garage Ventures, Liquid 2 Ventures, Jan Kaum, founder of WhatsApp, and more. As the first growth hire, I have led our business development, analytics, and sales pipeline development. I pioneered a go-to-market strategy that took our company from $0 to $10M in deal flow. I scaled this GTM strategy by hiring, training, and managing five interns, leading to an additional $100M in our sales pipeline. I created a seamless lead-gen process utilizing HubSpot and Mailchimp automations, Zapier webhooks, and Gong to automatically analyze calls, reducing time-per-lead from 20 minutes to 1 minute.
						</p>

						<div className="h-6 lg:h-10"></div>

						<h2 className="text-slate-200 font-medium pb-1 lg:pb-1.5">
							Holistic Index &mdash; Winter 2024
						</h2>
						<p>
							Holistic is a DEI and people management advisory firm. As an Operations Intern, I completed 6 projects in 9 weeks, building file scrapers to increase client intake efficiency, redesigning the website UI to increase session duration, and much more.
						</p>

						<div className="h-6 lg:h-10"></div>

						<h2 className="text-slate-200 font-medium pb-1 lg:pb-1.5">
							Misericordia Home &mdash; Fall 2023 and Spring 2024
						</h2>
						<p>
							Led a team to create an educational device for adults with intellectual disabilities. We designed a Learning Box device for 20 users, incorporating rewards (song snippets) to facilitate engagement and prompt long-term learning. I wrote API endpoints to play song snippets from Spotify playlists at the press of a button using an Arduino microcontroller. I also built a two-sided, foldable shower ramp to help 100+ residents with motor impairments overcome shower ledge thresholds.
						</p>
					</div>
				</div>

				<div className={containerClasses} id="projects">
					<SectionTitle big accentText="03">
						Projects
					</SectionTitle>
					<div className={sectionBodyClasses}>
						<p>
							I've worked on things like teen startup incubation, non-profit work for refugees, AI medical scribes, and much more.
						</p>
					</div>
					<div className="h-8 lg:h-12"></div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						<a
							href="https://your-project-1-link.com"
							target="_blank"
							className="group"
						>
							<img src="/path-to-image1.jpg" alt="Project 1" className="rounded-lg shadow-md group-hover:opacity-80" />
							<h3 className="mt-2 text-lg font-bold text-slate-200 group-hover:text-blue-400">Project 1</h3>
							<p className="text-slate-400">Brief description of the project.</p>
						</a>
						<a
							href="https://your-project-2-link.com"
							target="_blank"
							className="group"
						>
							<img src="/path-to-image2.jpg" alt="Project 2" className="rounded-lg shadow-md group-hover:opacity-80" />
							<h3 className="mt-2 text-lg font-bold text-slate-200 group-hover:text-blue-400">Project 2</h3>
							<p className="text-slate-400">Brief description of the project.</p>
						</a>
						{/* Add more project cards as needed */}
					</div>
				</div>

				<div className={containerClasses} id="contact">
					<SectionTitle big accentText="04">
						Contact Me
					</SectionTitle>
					<div className={sectionBodyClasses}>
						<p>I love meeting new people! Please feel free to reach out.</p>
					</div>
					<div className="font-mono text-slate-400 sm:text-lg md:text-xl mt-4 md:mt-6">
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

				<div className={`${containerClasses} pb-6 md:pb-12 lg:pb-24`}>
					<div className="font-mono text-slate-400 text-xs md:text-sm lg:text-base">
						Copyright {new Date().getFullYear()} Shayan Shabani.
						<br />
						This site is built with{' '}
						<a className={linkClasses} href="https://nextjs.org/" target="_blank">
							Next.js
						</a>{' '}
						and{' '}
						<a className={linkClasses} href="https://tailwindcss.com/" target="_blank">
							Tailwind CSS
						</a>
						. View the source code on{' '}
						<a
							className={linkClasses}
							href="https://github.com/your-repo-link"
							target="_blank"
						>
							Github
						</a>
						.
					</div>
				</div>
			</main>
		</div>
	);
}
