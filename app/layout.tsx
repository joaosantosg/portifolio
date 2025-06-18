import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'João Santos - Backend Java Developer | Desenvolvedor Backend Java',
	description:
		'Welcome to my portfolio! I am João Santos, a backend developer specializing in Java and Spring Boot. | Bem-vindo ao meu portfólio! Sou João Santos, desenvolvedor backend especializado em Java e Spring Boot.',
	keywords: [
		// English Keywords
		'Backend Developer',
		'Java Developer',
		'Spring Boot Developer',
		'Software Engineer',
		'Java Backend Developer',
		'Spring Boot Engineer',
		'Clean Code',
		'Simple Design',
		'Web Developer',
		'Next.js',
		'React',
		'TypeScript',
		'Problem Solving',
		'Scalable Architecture',
		'Developer Portfolio',
		'Effective Solutions',
		'Python Developer',
		'Java Programmer',
		'Web Development',

		// Portuguese Keywords
		'Desenvolvedor Backend',
		'Desenvolvedor Java',
		'Engenheiro de Software',
		'Java Spring Boot',
		'Código Limpo',
		'Design Simples',
		'Portfólio de Desenvolvedor',
		'Soluções Eficientes',
		'Programador Java',
		'Desenvolvedor Web',
		'Desenvolvimento Web',
		'Desenvolvedor React',
		'Desenvolvedor Next.js',
		'Resolução de Problemas',
		'João Victor Guimarães Santos',
		'João Santos',
	],
	authors: [{ name: 'João Santos' }],
	creator: 'João Santos',
	openGraph: {
		title: 'João Santos - Developer Portfolio | Portfólio de Desenvolvedor',
		description:
			'Passionate backend developer creating scalable and effective solutions. | Desenvolvedor apaixonado por criar soluções escaláveis e eficientes.',
		url: 'https://joaosantos.dev.br',
		siteName: 'João Santos - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'João Santos - Developer Portfolio',
			},
		],
		locale: 'pt_BR',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
									   children,
								   }: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
		<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
		{children}
		</body>
		</html>
	);
}
