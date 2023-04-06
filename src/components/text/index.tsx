import classNames from 'classnames'
import localFont from 'next/font/local'

import styles from './index.module.css'

const robotoFont = localFont({
  src: [
    {
      path: './fonts/Roboto-Light.ttf',
      weight: '300'
    },
    {
      path: '../../../public/fonts/Roboto-Regular.ttf',
      weight: '400'
    }
  ],
})

export const Text = () => {
  const text1 = "This is next/font from 'src/components/text/fonts' folder."
  const text2 = "This is next/font from 'public/fonts' folder."
  const text3 = "This is @font-face from 'public/fonts' folder."

  return (
    <>
      <p className={classNames(robotoFont.className, styles.light)}>{text1}</p>
      <p className={classNames(robotoFont.className, styles.regular)}>{text2}</p>
      <p className={classNames(styles.bold)}>{text3}</p>
    </>
  );
};
