import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Form } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { useTranslation } from 'react-i18next';
import { ILoginForm } from '.';
import Paper from '../../components/Paper';
import useUserConfig from '../../hooks/useUserConfig';
import LoginInput from './LoginInput';

const Login: React.FC = () => {
  const { t } = useTranslation();
  const [form] = useForm<ILoginForm>();
  const { setLoginUserInfo } = useUserConfig();

  const handleLogin = async () => {
    const { username } = await form.validateFields();
    setLoginUserInfo({
      username,
      token: 'df3fd3',
      isLogin: true,
      getUserInfoLoading: false,
    });
  };

  return (
    <div className="bg-gradient-to-r from-pink-300 via-purple-300 to-sky-500 w-screen min-h-screen min-w-full flex flex-col">
      <div className="mt-6 ml-6 flex items-center ">
        <img src="/static/images/logo.svg" className="mr-3" />
        <span className="text-2xl text-white">{t('login.loginHeader.title')}</span>
      </div>
      <div className="flex justify-center items-center mt-8 ">
        <Paper className="sm:w-2/5 md:w-2/5 lg:w-1/4 dark:bg-white">
          <div className="text-center text-xl font-black my-8">{t('login.loginTitle')}</div>
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
                <div className="text-end mt-1">
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
                  className="bg-gradient-to-r from-pink-300 via-purple-300 to-sky-500 text-white w-full py-2 rounded-xl text-base relative after:water-wave-hide active:after:water-wave-show"
                >
                  {t('login.loginForm.submitText')}
                </button>
              </div>
            </Form.Item>
          </Form>

          <div className="mt-10 text-center">
            <span className="text-xs">{t('login.otherWayLogin')}</span>

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

            <a className="">{t('login.signUpTips')}</a>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default Login;
