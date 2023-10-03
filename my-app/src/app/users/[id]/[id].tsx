'use client'

interface PostProps {
  id: number;
  title: string;
  body: string;
}
export default function Post() {

  const myPost: PostProps = {
    id: 1,
    title: "Sample Blog Post",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam totam distinctio amet, odio reiciendis, sint autem obcaecati voluptatem doloribus necessitatibus cumque aliquid sapiente fugit voluptatibus deserunt iste vel veritatis natus!",
    
  };  

  return (
    <div className="flex flex-col bg-gray-200 items-center justify-center px-6 py-8 mx-auto md:h-screen dark:bg-gray-800">
      <div className="flex flex-row items-center justify-around w-full bg-blue-950 text-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-2 dark:bg-gray-800 dark:border-gray-700 mb-4">
        <h1>Blog:</h1>
        <h2>{myPost.title}</h2>
      </div>

      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen">
        <p className="text-xl">{myPost.body}</p>
      </div>

      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen">
        <p className="text-xl">{myPost.body}</p>
      </div>
      
    </div>
  )
}