import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Form } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { useTranslation } from 'react-i18next';
import { ILoginForm } from '.';
import ThemeBase from '../../components/ThemeBase';
import useUserConfig from '../../hooks/useUserConfig';
import LoginInput from './LoginInput';

const Login: React.FC = () => {
  const { t } = useTranslation();
  const [form] = useForm<ILoginForm>();
  const { setLoginUserInfo, setLoginState } = useUserConfig();

  const handleLogin = async () => {
    const { emailAddress } = await form.validateFields();
    setLoginUserInfo({
      username: 'Gll Ly',
      emailAddress,
    });
    setLoginState({
      token: 'df3fd3',
      isLogin: true,
    });
  };

  return (
    <div className="bg-gradient-to-r from-pink-300 via-purple-300 to-sky-500 w-screen min-h-screen min-w-full flex flex-col dark:from-slate-900 dark:to-stone-900">
      <div className="mt-6 ml-6 flex items-center ">
        <img src="/static/images/logo.svg" className="mr-3" />
        <span className="text-2xl text-white">{t('login.loginHeader.title')}</span>
      </div>
      <div className="flex justify-center items-center mt-8 ">
        <ThemeBase.Paper className="rounded-md sm:w-[280px] md:w-[300px] lg:w-[350px] p-6 ">
          <div className="text-center text-xl font-black my-8">{t('login.loginTitle')}</div>
          <Form<ILoginForm> form={form} onFinish={handleLogin}>
            <Form.Item
              rules={[
                {
                  required: true,
                },
              ]}
              name="emailAddress"
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
                  <a className="text-black opacity-90 hover:!text-sky-500 text-xs dark:text-white">
                    {t('login.loginForm.forgotPassword')}
                  </a>
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
                  className="bg-gradient-to-r from-pink-300 via-purple-300 to-sky-500 text-white w-full py-2 rounded-xl text-base relative after:water-wave-hide active:after:water-wave-show dark:from-slate-900 dark:to-stone-900"
                >
                  {t('login.loginForm.submitText')}
                </button>
              </div>
            </Form.Item>
          </Form>

          <div className="mt-10 text-center">
            <span className="text-xs text-black opacity-90 dark:text-white">
              {t('login.otherWayLogin')}
            </span>

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

            <a className="text-black opacity-90 hover:!text-sky-500 text-xs dark:text-white">
              {t('login.signUpTips')}
            </a>
          </div>
        </ThemeBase.Paper>
      </div>
    </div>
  );
};

export default Login;
