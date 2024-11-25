import { Button } from 'antd';

import useCounterStore from '@/store/counter';
import { useCountDown } from 'ahooks';

const Home = () => {
  const { counter, increase } = useCounterStore();

  const [, formattedRes] = useCountDown({
    targetDate: `${new Date().getFullYear()}-12-31 23:59:59`,
  });
  const { days, hours, minutes, seconds, milliseconds } = formattedRes;

  const handleClick = () => {
    increase(1);
  };

  return (
    <div>
      <div className="text-blue">Home Page</div>
      <button onClick={handleClick}>counter: {counter}</button>
      <br />
      <Button type="primary">Primary</Button>
      <p>
        There are {days} days {hours} hours {minutes} minutes {seconds} seconds {milliseconds} milliseconds until{' '}
        {new Date().getFullYear()}-12-31 23:59:59
      </p>
    </div>
  );
};

export default Home;
