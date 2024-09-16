import React, { useState } from 'react';
import styles from './Tab.module.css';

interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabProps {
  tabs: TabItem[];
  defaultActiveTab?: string;
}

export function Tab({ tabs, defaultActiveTab }: TabProps) {
  const [activeTab, setActiveTab] = useState(defaultActiveTab || tabs[0].id);

  return (
    <div className={styles.tabContainer}>
      <div className={styles.tabHeader}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`font-tag-1 ${styles.tabButton} ${activeTab === tab.id ? styles.active : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.tabContent}>
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}
