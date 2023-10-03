import { useRouter } from "next/navigation"
import { useQuery } from '@tanstack/react-query'


const fetchData = async () => {
    const response = await fetch('http://localhost:3000/users');
    const data = await response.json();
    return data;
  }
export default function Buttons() {
    const router = useRouter()

    const getUsername = () => {
        const username = localStorage.getItem('username');
        console.log(username);
        return username;
      }

      const { data } = useQuery({
        queryKey: ['users'],
        queryFn: fetchData,
      })

    const handleClick = () => {
        localStorage.removeItem('token');
        if(localStorage.getItem('token') === null) {
          alert('Loggout Successful!');
          router.push('/login');
        } 
      }
        
      const editUser = async () => {
        const token = localStorage.getItem('token');
    
        if(token) {
          router.push(`/users/${data.reduce((user: any) => getUsername())}/edit`);
          return token;
        }
      }


    return (
        <div className="flex flex-col">
          
            <div className="flex justify-around items-center w-full px-6 py-8 mx-auto">
              <button className="bg-blue-950 text-white text-xl p-2 rounded-full w-1/4" onClick={handleClick}>LOGOUT</button>
              <button className="bg-blue-950 text-white text-xl p-2 rounded-full w-1/4" onClick={editUser}>Edit</button>
            </div>
          
        </div>
      )
}