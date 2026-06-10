import path from 'node:path';
import type { NextConfig } from 'next';
const createMDX = require('@next/mdx');

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
	// turbopack configs
	turbopack: {
		root: path.join(__dirname),
	},
	// Configure `pageExtensions` to include markdown and MDX files
	pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
	// Add markdown plugins here, as desired
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
