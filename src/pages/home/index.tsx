import { Button } from "antd";

import useCounterStore from "@/store/counter";

const Home = () => {

  const {counter,increase}=useCounterStore();

  const handleClick =()=>{
    increase(1)
  }

  return (
    <div>
      <div>Home Page</div>
      <button onClick={handleClick}>counter: {counter}</button>
      <br />
      <Button type="primary">Primary</Button>
    </div>
  );
};

export default Home;