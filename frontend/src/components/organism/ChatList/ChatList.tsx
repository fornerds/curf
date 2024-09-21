import React from 'react';
import styles from './ChatList.module.css';
import { ChatListItem } from '@/components/molecule';

interface ChatData {
  id: string;
  curatorImage: {
    curatorimage: string;
  };
  curatorName: string;
  lastMessage: string;
  lastMessageDate: string;
}

export type ChatListProps = {
  chats: ChatData[];
};

export function ChatList({ chats }: ChatListProps) {
  return (
    <div className={styles.chatList}>
      {chats.map((chat) => (
        <ChatListItem
          key={chat.id}
          curatorImage={chat.curatorImage.curatorimage}
          curatorName={chat.curatorName}
          lastMessage={chat.lastMessage}
          lastMessageDate={chat.lastMessageDate}
          chatLink={`/chat/${chat.id}`}
        />
      ))}
    </div>
  );
}
