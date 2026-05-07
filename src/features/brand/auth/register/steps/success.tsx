import { Card, Typography, Box, Stack } from "@mui/material";
import IconBox from "@/components/ui/boxes/iconBox";
import { CompassIcon, MoneyIcon, ListIcon, LockIcon, WatchIcon, UploadIcon2, TimerIcon, AddMember } from "@/components/ui/icons/icons";
import { keyframes } from "@emotion/react";
import { Grow } from "@mui/material";

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

export default function Success() {
    return (
        <Box display={"flex"} flexDirection={"column"} gap={2} sx={{ width: "100%" }}>
            <Stack alignItems={"center"} justifyContent={"center"} flexDirection={"column"} gap={10} width={"100%"}>
                <Grow in={true} timeout={1000}>
                    <Box
                        display={"flex"}
                        flexDirection={"column"}
                        gap={2}
                        alignItems={"center"}
                        justifyContent={"center"}
                        mx={"auto"}
                    >
                        <Box sx={{ animation: `${pulse} 2s infinite ease-in-out` }}>
                            <TimerIcon />
                        </Box>
                        <Typography variant="h3" fontWeight={"800"} fontSize={{ xs: "24px", sm: "30px" }} color={"primary.main"}>Registration Is Under Review</Typography>
                        <Typography textAlign={"center"} lineHeight={"30px"} variant="body1" fontWeight={"400"} fontSize={{ xs: "14px", sm: "18px" }} color={"primary.main"}>Our curation team is currently reviewing your brand credentials. This
                            typically takes 24-48 business hours to ensure community standards
                            and data integrity.</Typography>
                    </Box>
                </Grow>

                <Stack flexDirection={"column"} gap={3} width={"100%"} justifyContent={"space-between"} px={{ sm: "7px", md: "30px" }}>
                    {/* first card  */}
                    <Card sx={{ p: "28px", borderRadius: "8px", bgcolor: "#F6F3EC" }}>
                        <Stack flexDirection={"row"} gap={2} justifyContent={"space-between"} alignItems={"center"}>
                            <Typography variant="h6" fontWeight={"700"} fontSize={"14px"} color={"primary.main"}>WHAT CAN YOU DO</Typography>

                            <Typography width={"fit-content"} p={"10px"} borderRadius={"5px"} bgcolor={"#1b23512d"} variant="body2" fontWeight={"500"} color={"primary.main"}>Active Now</Typography>
                        </Stack>
                        <Stack mt={"20px"} flexDirection={"column"} gap={2} alignItems={"flex-start"}>
                            <WhatCanYou head="Browse Marketplace" label="Explore trends and competitor benchmarks." icon={<CompassIcon />} />
                            <WhatCanYou head="Watch Brand Reels" label="Learn from curated industry success stories." icon={<WatchIcon />} />
                            <WhatCanYou head="Draft Content" label="Prepare your assets while you wait.." icon={<ListIcon />} />

                        </Stack>
                    </Card>
                    {/* second card  */}
                    <Card sx={{ p: "28px", borderRadius: "8px", bgcolor: "#E5E2DB66" }}>
                        <Stack flexDirection={"row"} gap={2} justifyContent={"space-between"} alignItems={"center"}>
                            <Typography variant="h6" fontWeight={"700"} fontSize={"14px"} color={"#46464F"}>Pending Approval</Typography>

                            <LockIcon />
                        </Stack>
                        <Stack mt={"20px"} flexDirection={"column"} gap={2} alignItems={"flex-start"}>
                            <PendingApproval head="Publish Content" label="Visibility is locked until verification is complete." icon={<UploadIcon2 />} />
                            <PendingApproval head="Manage Transactions" label="Financial services require full brand approval." icon={<MoneyIcon />} />
                            <PendingApproval head="Add Team Members" label="Permission management is disabled." icon={<AddMember />} />

                        </Stack>
                    </Card>

                </Stack>
            </Stack>
        </ Box>
    );
}


function WhatCanYou({ head, label, icon }: { head: string, label: string, icon: React.ReactNode }) {
    return (
        <Stack flexDirection={"row"} gap={1} alignItems={"flex-start"}>
            <IconBox color={"#1b23514d"} >
                {icon}
            </IconBox>
            <Box display={"flex"} flexDirection={"column"} gap={0}>
                <Typography m={"0px"} variant="h5" fontWeight={"700"} color={"black"}>{head}</Typography>
                <Typography m={"0px"} variant="body1" fontWeight={"400"} fontSize={"12px"} color={"#46464F"}>{label}</Typography>
            </Box>
        </Stack>
    );
}

function PendingApproval({ head, label, icon }: { head: string, label: string, icon: React.ReactNode }) {
    return (
        <Stack flexDirection={"row"} gap={1} alignItems={"flex-start"}>
            <IconBox color={"#46464F1A"} >
                {icon}
            </IconBox>
            <Box display={"flex"} flexDirection={"column"} gap={0}>
                <Typography m={"0px"} variant="h5" fontWeight={"700"} color={"black"}>{head}</Typography>
                <Typography m={"0px"} variant="body1" fontWeight={"400"} fontSize={"12px"} color={"#46464F"}>{label}</Typography>
            </Box>
        </Stack>
    );
}
