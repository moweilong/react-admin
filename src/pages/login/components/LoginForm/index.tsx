import { Form, Input, Row, Button, Checkbox } from 'antd';

import { FormPageProps } from '../../useLogin';
import { LOGIN_STATE_ENUM } from '../../useLogin';

import { validateUsername, validatePassword } from '@/utils/validate';

import useGoto from '@/hooks/useGoto';

type FieldType = {
  username: string;
  password: string;
  captcha: string;
  remember?: string;
};

const FormItem = Form.Item;
const Password = Input.Password;

const LoginForm = ({ switchPage }: FormPageProps) => {
  const { goHome } = useGoto();
  const [form] = Form.useForm<FieldType>();
  const onFinish = (values: FieldType) => {
    console.log('Success:', values);
    goHome();
  };

  return (
    <Form form={form} onFinish={onFinish} size="large">
      <FormItem<FieldType>
        name="username"
        rules={[
          {
            required: true,
            message: '请输入用户名',
          },
          {
            validator: validateUsername,
          },
        ]}
        className="enter-y"
      >
        <Input placeholder="用户名" />
      </FormItem>
      <FormItem<FieldType>
        name="password"
        rules={[
          {
            required: true,
            message: '请输入密码',
          },
          {
            validator: validatePassword,
          },
        ]}
        className="enter-y"
      >
        <Password placeholder="密码" />
      </FormItem>
      <Row className="mb-0 enter-y">
        <FormItem<FieldType>
          name="captcha"
          rules={[
            {
              required: true,
              message: '请输入验证码',
            },
          ]}
          className="inline-block w[60%]"
        >
          <Input placeholder="验证码" />
        </FormItem>
        <Button
          type="primary"
          size="large"
          className="inline-block  ml[8px]"
          style={{ width: 'calc(40% - 8px)' }}
        >
          图形验证码
        </Button>
      </Row>
      <Row className="enter-y mb-[16px]" align="middle">
        <FormItem
          name="remember"
          valuePropName="checked"
          className="inline-block w[50%] mb-0"
        >
          <Checkbox>7天内免登录</Checkbox>
        </FormItem>
        <a
          className="inline-block w[50%] p-0 text-right border-none"
          onClick={() => switchPage(LOGIN_STATE_ENUM.RESET_PASSWORD)}
        >
          忘记密码？
        </a>
      </Row>
      <Row className="enter-y">
        <Button block type="primary" htmlType="submit">
          登录
        </Button>
      </Row>
    </Form>
  );
};

export default LoginForm;
