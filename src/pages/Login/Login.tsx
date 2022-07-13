import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Form, Typography } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { useTranslation } from 'react-i18next';
import { ILoginForm } from '.';
import LoginInput from './LoginInput';

const Login: React.FC = () => {
  const { t } = useTranslation();
  const [form] = useForm<ILoginForm>();

  const handleLogin = async () => {
    const values = await form.validateFields();
    console.log(values);
  };

  return (
    <div className="bg-gradient-to-r from-pink-300 via-purple-300 to-sky-500 w-screen min-h-screen min-w-full flex flex-col">
      <div className="mt-6 ml-6 flex items-center">
        <img src="/static/images/logo.svg" className="mr-3" />
        <span className="text-2xl text-white">{t('login.loginHeader.title')}</span>
        <Button>123321</Button>
      </div>
      <div className="flex justify-center items-center mt-8 ">
        <Card className="rounded-md pt-6 sm:w-2/5  md:w-1/3 lg:w-1/4 bg-white">
          <div className="text-center text-xl font-black mb-10">{t('login.loginTitle')}</div>
          <Form<ILoginForm> form={form} onFinish={handleLogin}>
            <Form.Item
              rules={[
                {
                  required: true,
                },
              ]}
              name="username"
              initialValue="demo@gamil.com"
            >
              <LoginInput
                label={t('login.loginForm.usernameLabel')}
                placeholder={t('login.loginForm.usernamePlaceholder')}
                prefix={<UserOutlined />}
              />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                },
              ]}
              name="password"
              initialValue="6666"
              extra={
                <div className="text-end mt-1 text-xs">
                  <a>{t('login.loginForm.forgotPassword')}</a>
                </div>
              }
            >
              <LoginInput
                label={t('login.loginForm.passwordLabel')}
                placeholder={t('login.loginForm.passwordPlaceholder')}
                prefix={<LockOutlined />}
                type="password"
              />
            </Form.Item>

            <Form.Item>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-pink-300 via-purple-300 to-sky-500 text-white w-full py-2 rounded-xl text-base relative after:test-demo active:after:test-demo2"
                >
                  {t('login.loginForm.submitText')}
                </button>
              </div>
            </Form.Item>
          </Form>

          <div className="mt-10 text-center">
            <Typography.Text className="text-gray-500 text-xs">
              {t('login.otherLogin')}
            </Typography.Text>

            <div className="text-center mt-4 flex justify-center mb-20">
              <a>
                <img src="/static/images/qq.svg" className="mr-3" />
              </a>
              <a>
                <img src="/static/images/wechat.svg" className="mr-3" />
              </a>
              <a>
                <img src="/static/images/weibo.svg" className="mr-3" />
              </a>
            </div>

            <a className="text-xs text-gray-500">{t('login.signUpTips')}</a>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;
