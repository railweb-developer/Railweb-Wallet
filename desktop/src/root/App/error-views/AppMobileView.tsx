import React from 'react';
import { Text } from '@components/Text/Text';
import styles from '../App.module.scss';

type Props = {};

export const AppMobileView: React.FC<Props> = () => {

  return (
    <>
      <div className={styles.appContainer}>
        <div className={styles.mobileContent}>
          <img
            className={styles.mobileLogo}
            src="/CHANGE_TODO-circle.png"
            alt="CHANGE_TODO-logo-railgun-app"
            width={108}
            height={108}
          />
          <Text className={styles.mobileTitle}>RAILWEB</Text>
          <Text className={styles.mobileDescription}>
            The Rail Web app is only available on desktop browsers. Use a
            larger screen size to access on desktop.
          </Text>
        </div>
        <div className={styles.mobileFooter}>
          <Text className={styles.mobileFooterText}>
            © All rights reserved.
          </Text>
        </div>
      </div>
    </>
  );
};
