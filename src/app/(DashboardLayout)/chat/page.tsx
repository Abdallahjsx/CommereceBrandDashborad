import React from "react";
import Breadcrumb from "@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb";
import PageContainer from "@/components/container/PageContainer";
import AppCard from "@/components/shared/AppCard";
import ChatApp from "@/features/chat/components";
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
                <Breadcrumb title="Chat" items={BCrumb} />
                <AppCard>
                    <ChatApp />
                </AppCard>
            </PageContainer>
        </ChatProvider>
    );
};

export default Chats;
