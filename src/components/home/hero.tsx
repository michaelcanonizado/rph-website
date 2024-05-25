'use client';

import Image from 'next/image';
import React, { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
	return (
		<section className="w-screen ">
			<div className=" relative h-[145vh]">
				<HeroStickyImage />
				<HeroOverlay />
			</div>
		</section>
	);
};

const HeroStickyImage = () => {
	const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ['start start', '20% start'],
	});

	const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 0]);

	return (
		<motion.div className="w-full h-[90vh] sticky overflow-hidden inset-0">
			<Image
				src="/home/cover-image.jpg"
				fill
				alt="Catanduanes"
				style={{
					objectFit: 'cover',
					objectPosition: 'center',
				}}
			></Image>
			<motion.div
				className="bg-black absolute inset-0 z-10"
				style={{ opacity: opacity }}
			/>
			<div className="w-full h-[100px] absolute bottom-0 z-20">
				<Image
					src="/home/wave.svg"
					fill
					alt="Wave"
					style={{
						objectFit: 'cover',
						objectPosition: 'left',
					}}
				></Image>
			</div>
		</motion.div>
	);
};

const HeroOverlay = () => {
	const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ['end 40%', 'end start'],
	});

	const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

	return (
		<motion.div
			className="absolute left-0 top-0 h-[90vh] w-full flex flex-col items-center justify-center text-center text-background z-20 "
			style={{ opacity }}
		>
			<div className="">
				<p className="">Discover</p>
			</div>
			<div className="">
				<h1 className="text-5xl font-bold tracking-widest">CATANDUANES</h1>
			</div>
			<div className="max-w-[500px]">
				<p className="">
					A charming island province in the Philippines, is located east of
					the Mainland Bicol area of the Luzon Archipelago. Known for its
					natural beauty and rich cultural legacy, provides an
					unforgettable experience for travelers seeking both action and
					relaxation.
				</p>
			</div>
		</motion.div>
	);
};

export default Hero;
