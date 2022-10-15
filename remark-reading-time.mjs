import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

export function remarkReadingTime() {
	return function (tree, { data }) {
		const stringNode = toString(tree);
		const readingTime = getReadingTime(stringNode);
		data.astro.frontmatter.minutesRead = readingTime.text;
	};
}
