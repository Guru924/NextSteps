import fs from 'fs/promises'
import Navbar from '@/components/Navbar';

export default function Home() {

  let a = fs.readFile(".gitignore")
  a.then(e=> (console.log(e.toString())))
  // const [count, setCount] = useState(0)

  return (
    <div>

      {/* bydefault it seversite components */}
      <Navbar/>
      {/* navbar is a client component */}
      i am component <br />
      {/* {count} */}
      {/* <br /> */}
      {/* <button onClick={()=> setCount(count+1)}>client me</button> */}
    </div>
  );
}
