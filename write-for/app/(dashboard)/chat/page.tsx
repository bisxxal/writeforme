'use client'
import React from 'react'
import Charts from '../_components/chartsList'
import { useQuery } from '@tanstack/react-query'
import { getChatUsers } from '@/actions/chat.action'

const ChatPage = () => {

  const { data, isLoading } = useQuery({
    queryKey: ['chatUsers'],
    queryFn: async () => {
      return await getChatUsers();
    },
  });

  return (
    <div className=' w-full px-10 max-md:px-4'>
      <Charts userId={data?.userId} chats={data?.chats} isLoading={isLoading} />
    </div>
  )
}

export default ChatPage