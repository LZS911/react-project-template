module.exports = {
  page: (name, cssProcessor = 'css') => {
    return {
      parentName: 'pages',
      routerDir: 'router/router.config.tsx',
      routerPathFormat: () => name.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase(),
      // addRouterAfter: () => {
      // axios.get('https://api.github.com/users/LZS911').then((res) => {
      //   console.log(res);
      // });
      // },
      [`${name}.tsx`]: () => {
        return `
          const ${name}:React.FC = () => {
            return (
              <div>
                ${name}
              </div>
            )
          }
          export default ${name};
        `;
      },
      'index.ts': () => {
        return `
          import ${name} from './${name}';
          
          export default ${name}
        `;
      },
      'docs.md': () => {
        return `# Generate ${name} page by gl-cli`;
      },
      [`__test__/${name.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase()}.test.tsx`]: () => {
        return `
          import ${name} from '..';
          import { render } from '@testing-library/react';
          describe('test ${name}', () => {
            it('should render ${name} to match snapshot', () => {
              const { container } = render(<${name} />);
              expect(container).toMatchSnapshot();
            })
          })
        `;
      },
    };
  },
  component: (name, cssProcessor = 'css') => {
    return {
      parentName: 'components',
      'index.tsx': () => {
        return `
          import React from 'react';
          import { I${name}Props } from './index.d';
          import './index.${cssProcessor}';
  
          const ${name}:React.FC<I${name}Props> = (props) => {
            return <h1>${name}</h1>;
          }
          export default ${name};
        `;
      },
      [`index.${cssProcessor}`]: () => {
        return `
          .${name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}-wrapper{
          }
        `;
      },
      'index.d.ts': () => {
        return `export interface I${name}Props {
          className?: string;
        }`;
      },
      'docs.md': () => {
        return `# Generate ${name} component by gl-cli`;
      },
      [`__test__/${name.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase()}.test.tsx`]: () => {
        return `
          import ${name} from '..';
          import { render } from '@testing-library/react';
          describe('test ${name}', () => {
            it('should render ${name} to match snapshot', () => {
              const { container } = render(<${name} />);
              expect(container).toMatchSnapshot();
            })
          })
        `;
      },
    };
  },
};
