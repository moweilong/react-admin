import { RouterProvider } from 'react-router-dom';
import {ConfigProvider} from 'antd';
import zhCN from 'antd/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';

import router from '@/router';
import useGloabalState from '@/store';

import 'antd/dist/reset.css';

dayjs.locale('zh-cn');

const App = () => {

  const { primaryColor }=useGloabalState();
  
  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          colorPrimary: primaryColor,
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
};

export default App
