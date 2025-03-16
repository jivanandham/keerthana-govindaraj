import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
  const session = await getSession({ req });
  
  if (!session || !session.user.isAdmin) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  
  const { title, content } = req.body;
  
  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required' });
  }
  
  try {
    const slug = title
      .toLowerCase()
      .replace(/[^\w\s]/g, '')
      .replace(/\s+/g, '-');
    
    const date = new Date().toISOString().split('T')[0];
    
    const excerpt = content.substring(0, 150) + '...';
    
    const frontmatter = {
      title,
      date,
      excerpt,
    };
    
    const fileContent = matter.stringify(content, frontmatter);
    
    fs.writeFileSync(path.join(process.cwd(), 'posts', `${slug}.md`), fileContent);
    
    return res.status(200).json({ message: 'Post created successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error creating post' });
  }
}
