import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { RouterProvider } from 'react-router-dom';

import { ConfigProvider, App as AntApp } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';

import AppLoading from './components/AppLoading';
import Error500 from './components/Error/500';

import router from '@/router';
import useGloabalState from '@/store';

import 'antd/dist/reset.css';

dayjs.locale('zh-cn');

const App = () => {
  const { primaryColor } = useGloabalState();

  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          colorPrimary: primaryColor,
          borderRadius: 4,
        },
        components: {
          Form: {
            itemMarginBottom: 16,
          },
          Layout: {
            headerHeight: 48,
          },
          Menu: {
            collapsedWidth: 48,
          },
        },
      }}
    >
      <AntApp className="w-full h-full">
        <ErrorBoundary
          fallbackRender={({ error }) => {
            return <Error500 subTitle={error?.message} />;
          }}
        >
          <Suspense fallback={<AppLoading showText />}>
            <RouterProvider router={router} />
          </Suspense>
        </ErrorBoundary>
      </AntApp>
    </ConfigProvider>
  );
};

export default App;
