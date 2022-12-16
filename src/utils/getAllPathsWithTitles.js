import fs, { readFileSync } from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { faqsDirectory } from './getAllPaths';

export default function getAllPathsWithTitles() {
  const subDirectories = fs.readdirSync(faqsDirectory);

  const paths = [];
  subDirectories.forEach((subdir) => {
    fs.readdirSync(`${faqsDirectory}/${subdir}`).forEach((file) => {
      const link = file.replace('.md', '');
      const resolvedPath = path.resolve(faqsDirectory, subdir, file);
      const fileContents = readFileSync(resolvedPath, 'utf-8');
      paths.push({
        title: `${matter(fileContents).data.title}?`,
        category: subdir.charAt(0).toUpperCase() + subdir.slice(1),
        slug: `/faq/${subdir}/${link}`,
        filePath: path.resolve(faqsDirectory, subdir, file),
      });
    });
  });

  return paths;
}
