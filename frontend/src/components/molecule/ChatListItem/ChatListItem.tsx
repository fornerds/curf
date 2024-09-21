import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ChatListItem.module.css';
import LinkIcon from '@/assets/icons/link.svg?react';

interface ChatListItemProps {
  curatorImage: string;
  curatorName: string;
  lastMessage: string;
  lastMessageDate: string;
  chatLink: string;
}

export function ChatListItem({
  curatorImage,
  curatorName,
  lastMessage,
  lastMessageDate,
  chatLink,
}: ChatListItemProps) {
  return (
    <Link to={chatLink} className={styles.chatListItem}>
      <div className={styles.curatorImageContainer}>
        <img
          src={curatorImage}
          alt={curatorName}
          className={styles.curatorImage}
        />
      </div>
      <div className={styles.chatInfo}>
        <h3 className={`${styles.curatorName} font-button-2`}>{curatorName}</h3>
        <p className={`${styles.lastMessage} font-text-4`}>{lastMessage}</p>
        <span className={`${styles.lastMessageDate} font-tag-2`}>
          {lastMessageDate}
        </span>
      </div>
      <div className={styles.arrowIcon}>
        <LinkIcon />
      </div>
    </Link>
  );
}
