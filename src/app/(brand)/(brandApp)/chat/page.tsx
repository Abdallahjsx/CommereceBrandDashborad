import React from "react";
import Breadcrumb from "@/components/layout/shared/breadcrumb/Breadcrumb";
import PageContainer from "@/components/ui/container/PageContainer";
import AppCard from "@/components/ui/shared/AppCard";
import ChatApp from "@/features/brand/chat/components";
import { ChatProvider } from '@/context/ChatContext/index'

const BCrumb = [
    {
        to: "/",
        title: "Dashboard",
    },
    {
        title: "Chat",
    },
];


const Chats = () => {
    return (
        <ChatProvider>
            <PageContainer title="Chat" description="this is Chat">
                {/* <Breadcrumb title="Chat" items={BCrumb} /> */}
                <AppCard>
                    <ChatApp />
                </AppCard>
            </PageContainer>
        </ChatProvider>
    );
};

export default Chats;
