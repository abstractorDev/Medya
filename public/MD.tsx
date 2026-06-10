'use cilent';
import React from 'react';
// import { createRoot } from 'react-dom/client';
import Markdown from 'react-markdown';

const markdown = '# Hi, *Pluto*!';

export default function MD() {
	return <div>{markdown}</div>;
}
