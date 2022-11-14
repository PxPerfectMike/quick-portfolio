import React from 'react';
import './App.css';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import CodeIcon from '@mui/icons-material/Code';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

function App() {
	const stuffArr = [
		<>
			<ColorLensIcon sx={{ fontSize: '40px' }} />
			<h2>Designer</h2>
			<p>
				I value simple and meaningful experiences, clean design patterns, and
				thoughtful interactions. Everything I create has thought and purpose
				behind it and I strive to make the best possible user experience across
				all projects.
			</p>
			<a
				href='https://pxperfect-quick-chat.herokuapp.com/'
				target='_blank'
				rel='noreferrer'
				style={{ fontFamily: 'pacifico', fontSize: '3rem' }}
			>
				Quick Chat App
			</a>
		</>,
		<>
			<CodeIcon sx={{ fontSize: '40px' }} />
			<h2>Frontend Developer</h2>
			<p>
				I like to create things from scratch (especially in React), and enjoy
				bringing interactive ideas to life in the browser using modern
				techniques. Beautiful and functional design is my passion.
			</p>
			<p
				style={{
					fontSize: '3rem',
					fontFamily: "'Bebas Neue', cursive",
					margin: 0,
					color: 'red',
				}}
			>
				Netflix Helper
			</p>
			<ul style={{ listStyleType: 'none', paddingInlineStart: 0 }}>
				<li className='blockList'>
					<a
						href='https://play.google.com/store/apps/details?id=com.netflix_helper_app.www.twa&hl=en_US&gl=US&pli=1'
						target='_blank'
						rel='noreferrer'
					>
						(Google Play Store)
					</a>
				</li>
				{'or'}
				<li className='blockList'>
					<a
						href='https://www.netflix-helper-app.com/'
						target='_blank'
						rel='noreferrer'
					>
						(PWA Website)
					</a>
				</li>
			</ul>
		</>,
		<>
			<LightbulbIcon sx={{ fontSize: '40px', marginTop: '3vh' }} />
			<h2>Naturally Curious</h2>
			<p>
				One of my favorite things about programming is learning new concepts and
				practices. I am genuinely interested in learning new things and I am
				always looking for new opportunities to grow. The best thing about tech
				is that the pool of knowledge is endless.
			</p>

			<a
				href='https://pxperfect-quick-chat.herokuapp.com/'
				target='_blank'
				rel='noreferrer'
				style={{
					textDecoration: 'none',
					fontSize: '40px',
					color: 'lightgreen',
					fontFamily: '"Roboto", cursive',
					marginBottom: '10px',
				}}
			>
				<h1
					style={{
						fontSize: '22px',
						color: 'green',
						fontFamily: 'roboto',
					}}
				>
					S.E.P.C.
				</h1>
			</a>
			<p style={{ fontSize: '14px', margin: 0 }}>(Super Easy Programmed CSS)</p>
		</>,
	];
	return (
		<Grid
			sx={{ flexGrow: 1 }}
			color={'#f5f5f5'}
			textAlign={'center'}
			container
			spacing={2}
		>
			<Grid item xs={12}>
				<h1>Michael Baker - Web Developer</h1>
			</Grid>
			<Grid item xs={12} md={12}>
				<Grid
					flexDirection={'column'}
					container
					alignItems='center'
					spacing={'2vw'}
				>
					{[0, 1, 2].map((value) => (
						<Grid key={value} item>
							<Paper
								sx={{
									height: '40vh',
									width: '90vw',
									backgroundColor: '#f5f5f5',
									padding: '1vw',
								}}
							>
								{stuffArr[value]}
							</Paper>
						</Grid>
					))}
				</Grid>
			</Grid>
		</Grid>
	);
}

export default App;
