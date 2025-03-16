import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Link from 'next/link';
import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Post({ post }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);
  
  // Check if user is admin
  useEffect(() => {
    if (session) {
      setIsAdmin(true); // In a real app, you would check if the user has admin role
    }
  }, [session]);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{post.title} | Keerthana Govindaraj</title>
        <meta name="description" content={post.excerpt} />
      </Head>

      <div className="flex flex-col min-h-screen">
        {/* Navigation */}
        <nav className="bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/" className="text-2xl font-bold text-indigo-600">KG</Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link href="/" className="inline-flex items-center px-1 pt-1 text-gray-500 hover:text-indigo-600">
                    Home
                  </Link>
                  <Link href="/portfolio" className="inline-flex items-center px-1 pt-1 text-gray-500 hover:text-indigo-600">
                    Portfolio
                  </Link>
                  <Link href="/blog" className="inline-flex items-center px-1 pt-1 border-b-2 border-indigo-500 text-indigo-600 font-medium">
                    Blog
                  </Link>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                {!session ? (
                  <button 
                    onClick={() => signIn()}
                    className="mr-4 text-indigo-600 hover:text-indigo-800 font-medium"
                  >
                    Sign In
                  </button>
                ) : (
                  <div className="mr-4 text-gray-700">Welcome, Admin</div>
                )}
                <a href="mailto:keerthanajiva@gmail.com" className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                  Contact Me
                </a>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Article */}
        <article className="bg-gray-50 py-12 flex-grow">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden p-8">
              <div className="flex justify-between items-center mb-6">
                <Link href="/blog" className="text-indigo-600 hover:text-indigo-800 inline-block">
                  ← Back to all posts
                </Link>
                
                {isAdmin && (
                  <div className="flex space-x-3">
                    <Link href={`/blog/edit/${post.slug}`} className="text-blue-600 hover:text-blue-800 font-medium">
                      Edit Post
                    </Link>
                    <button className="text-red-600 hover:text-red-800 font-medium">
                      Delete Post
                    </button>
                  </div>
                )}
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mt-4 mb-4">{post.title}</h1>
              <div className="text-gray-500 mb-8">{post.date}</div>
              
              <div 
                className="prose prose-indigo max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </article>

        {/* Back to Top Button */}
        <div className="fixed bottom-8 right-8">
          <a href="#" className="bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </a>
        </div>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 mt-auto">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Keerthana Govindaraj</h3>
                <p className="text-gray-300 mb-4">Chemist | Researcher | Electrochemical Scientist</p>
                <p className="text-gray-300"> 2025 All rights reserved</p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <a href="mailto:keerthanajiva@gmail.com" className="hover:text-indigo-300">keerthanajiva@gmail.com</a>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Connect</h4>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/in/kiirthana" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827a4.996 4.996 0 01-2.212.085a4.936 4.936 0 004.604 3.417a9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white">
                    <span className="sr-only">GitHub</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                    </svg>
                  </a>
                </div>
                <div className="mt-4">
                  <Link href="/" className="text-indigo-300 hover:text-white">Home</Link> | 
                  <Link href="/portfolio" className="text-indigo-300 hover:text-white mx-2">Portfolio</Link> | 
                  <Link href="/blog" className="text-white font-medium">Blog</Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join(process.cwd(), 'posts'));
  
  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.md', '')
    }
  }));
  
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(path.join(process.cwd(), 'posts', `${slug}.md`), 'utf-8');
  
  const { data, content } = matter(markdownWithMeta);
  const htmlContent = marked(content);
  
  return {
    props: {
      post: {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        content: htmlContent,
      }
    }
  };
}
