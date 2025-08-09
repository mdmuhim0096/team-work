import Nav from "../component/Nav";
import Footer from "../component/Footer";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'Boost your conversion rate',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          './image/team7.avif',
      },
    },
    {
      id: 2,
      title: 'How to use search engine optimization to drive sales',
      href: '#',
      description: 'Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.',
      date: 'Mar 10, 2020',
      datetime: '2020-03-10',
      category: { title: 'Sales', href: '#' },
      author: {
        name: 'Lindsay Walton',
        role: 'Front-end Developer',
        href: '#',
        imageUrl:
          './image/team4.avif',
      },
    },
    {
      id: 3,
      title: 'Improve your customer experience',
      href: '#',
      description:
        'Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis. Nostrud sint anim sunt aliqua. Nulla eu labore irure incididunt velit cillum quis magna dolore.',
      date: 'Feb 12, 2020',
      datetime: '2020-02-12',
      category: { title: 'Business', href: '#' },
      author: {
        name: 'Tom Cook',
        role: 'Director of Product',
        href: '#',
        imageUrl:
          './image/team5.avif',
      },
    }, {
      id: 1,
      title: 'Boost your conversion rate',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          './image/team3.avif',
      },
    },
    {
      id: 2,
      title: 'How to use search engine optimization to drive sales',
      href: '#',
      description: 'Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.',
      date: 'Mar 10, 2020',
      datetime: '2020-03-10',
      category: { title: 'Sales', href: '#' },
      author: {
        name: 'Lindsay Walton',
        role: 'Front-end Developer',
        href: '#',
        imageUrl:
          './image/team9.avif',
      },
    },
    {
      id: 3,
      title: 'Improve your customer experience',
      href: '#',
      description:
        'Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis. Nostrud sint anim sunt aliqua. Nulla eu labore irure incididunt velit cillum quis magna dolore.',
      date: 'Feb 12, 2020',
      datetime: '2020-02-12',
      category: { title: 'Business', href: '#' },
      author: {
        name: 'Tom Cook',
        role: 'Director of Product',
        href: '#',
        imageUrl:
          './image/team2.avif',
      },
    },
  ]
  return (
    <div>
      <Nav />
      <div className="w-full h-auto pt-20 text-white overflow-hidden">
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <motion.h2 
              initial={{y: 50, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              transition={{duration: 0.4}}
              className="text-pretty text-4xl font-semibold tracking-tight  sm:text-5xl"
              >From the blog</motion.h2>
              <p className="mt-2 text-lg/8 ">Learn how to grow your business with our expert advice.</p>
            </div>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {posts.map((post, index) => (
                <motion.article
                  key={index}
                  initial={{ rotate: 25, opacity: 0 }}
                  whileInView={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 200, delay: 0.1 * index }}
                  className="flex max-w-xl flex-col items-start justify-between p-3 rounded-md shadow-xl bg-zinc-800 ring-1"
                >
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} >
                      {post.date}
                    </time>
                    <a
                      href={post.category.href}
                      className="px-1 rounded-md bg-blue-400"
                    >
                      {post.category.title}
                    </a>
                  </div>
                  <div className="group relative grow">
                    <h3 className="mt-3 text-lg/6 font-semibold ">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm/6 text-slate-400">{post.description}</p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
                    <img alt="" src={post.author.imageUrl} className="size-10 rounded-full bg-gray-50" />
                    <div className="text-sm/6">
                      <p className="font-semibold text-orange-400">
                        <a href={post.author.href}>
                          <span className="absolute inset-0" />
                          {post.author.name}
                        </a>
                      </p>
                      <p className="">{post.author.role}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
          <div className="w-full h-24 flex justify-center items-end">
            <motion.div
              initial={{ scale: 1 }}
              whileTap={{ scale: 0.95 }}  // scales down a bit on tap
              transition={{ duration: 0.2, type: "spring", stiffness: 500 }}
              className="px-2 py-1 bg-zinc-800 border border-green-600 cursor-pointer flex gap-2 items-center"
            >
              <span>Load more</span> <MoveRight />
            </motion.div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Blog