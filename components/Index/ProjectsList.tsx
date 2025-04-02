import { Card } from 'components/CardGrid/Card';
import { CardGrid } from 'components/CardGrid/CardGrid';

export const ProjectsList = () => (
	<CardGrid>
		<Card
		title="Differentiable Simulator"
		link="https://github.com/shayan-shabani/DiffTaichi-Jumping-Robot"
		tags={['Python', 'DiffTaichi', 'Simulation']}
		>
			DiffTaichi physics simulator that generates a jumping robot 
			with gradient-optimized spring stiffness parameters and sinusoidal open-loop control for stable motion.
		</Card>
		<Card
			title="Database Management System"
			tags={['C++']}
		>
			Thread-safe DBMS featuring an LRU‑K buffer pool manager, a B+ tree index with latch 
			crabbing for concurrent access, and optimized query execution through hash joins and Top‑N operators.
		</Card>
		<Card
			title="Spark Teen"
			link="https://www.sparkteen.org/"
			tags={['Volunteering']}
		>
			Built one of the world's largest entrepreneurship education nonprofits. 
			Backed by We Are Family Foundation, Techstars, the City of Portland, and REAP.
		</Card>
		<Card
			title="TEDx Talk - Creating Inclusive Communities for Refugees"
			link="https://www.youtube.com/watch?v=hZuc_vgFh-g"
			tags={['Public Speaking']}
		>
			Presented before 300+ people at Walters Arts Center and published 
			on TEDx YouTube channel with 42M+ subscribers
		</Card>
		<Card
			title="Transfer Learning Image Classifier"
			link="https://github.com/shayan-shabani/BasicImageClassifier"
			tags={['Python', 'PyTorch', 'Computer Vision']}
		>
			ResNet-18 transfer learning pipeline with feature extraction, fine-tuning capabilities, 
			and integrated data augmentation for multi-class image classification.
		</Card>
		<Card
			title="Unbeatable Tic-Tac-Toe AI"
			link="https://github.com/shayan-shabani/ImpossibleTicTacToe"
			tags={['Python', 'Pygame']}
			>
			Minimax implementation with alpha-beta pruning that creates an optimal 
			Tic-Tac-Toe opponent using recursive game tree traversal and state evaluation.
		</Card>
		<Card
			title="Personal Website"
			link="https://github.com/shayan-shabani/shayan_shabani_website"
			tags={['React', 'Next.js', 'Tailwind']}
		>
			Everything you're seeing!
		</Card>
	</CardGrid>
);
