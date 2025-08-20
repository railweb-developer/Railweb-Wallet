import React from 'react';
import { Text } from '@components/Text/Text';
import styles from '../App.module.scss';

type Props = {};

export const AppBrowserNotSupportedView: React.FC<Props> = () => {
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
          <Text className={styles.mobileTitle}>RAIL WEB</Text>
          <Text className={styles.mobileDescription}>
            The Rail Web app is not available on this browser. Please use
            either Chrome or Brave.
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
