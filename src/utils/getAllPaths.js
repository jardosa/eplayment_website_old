import fs from 'fs';
import path from 'path';

export const faqsDirectory = path.resolve(process.cwd(), 'src', 'db', 'faqs');
export default function getAllPaths() {
  const subDirectories = fs.readdirSync(faqsDirectory);

  const paths = [];
  subDirectories.forEach((subdir) => {
    fs.readdirSync(`${faqsDirectory}/${subdir}`).forEach((file) => {
      const link = file.replace('.md', '');
      paths.push({
        params: {
          slug: [subdir, link],
          filePath: path.resolve(faqsDirectory, subdir, file),
        },
      });
    });
  });

  return paths;
}
