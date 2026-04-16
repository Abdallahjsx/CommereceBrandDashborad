import { Card, Typography, Box, Stack } from "@mui/material";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function InterestCard({ id, name, setSelectedInterests, selectedInterests }: { id: number, name: string, setSelectedInterests: any, selectedInterests: any }) {
    const isSelected = selectedInterests.includes(id);

    const handleToggle = () => {
        if (isSelected) {
            setSelectedInterests((prev: any) => prev.filter((item: any) => item !== id));
        } else {
            setSelectedInterests((prev: any) => [...prev, id]);
        }
    };

    return (
        <Box
            onClick={handleToggle}
            sx={{
                position: "relative",
                width: "100%",
                maxWidth: "300px",
                height: "300px",
                borderRadius: "16px",
                overflow: "hidden",
                cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                transform: isSelected ? "scale(1.05)" : "scale(1)",
                boxShadow: isSelected
                    ? "0px 10px 25px rgba(0, 104, 116, 0.5)"
                    : "0px 4px 12px rgba(0, 0, 0, 0.1)",
                border: isSelected ? "3px solid #006874" : "3px solid transparent",
                "&:hover": {
                    transform: isSelected ? "scale(1.07)" : "scale(1.03)",
                    boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.2)",
                    "& .interest-image": {
                        filter: "brightness(1.05) saturate(1.1)",
                    }
                },
            }}
        >
            <Image
                fill
                src="/images/backgrounds/Gaming.png"
                alt={name}
                className="interest-image"
                style={{
                    filter: isSelected ? "brightness(1.1)" : "brightness(0.85)",
                    transition: "filter 0.3s ease",
                    objectFit: "cover"
                }}
            />
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: isSelected
                        ? "linear-gradient(to top, rgba(0, 104, 116, 0.7) 0%, transparent 60%)"
                        : "linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, transparent 50%)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    paddingBottom: "24px",
                    transition: "background 0.3s ease",
                }}
            >
                <Typography
                    sx={{
                        textShadow: "2px 4px 8px rgba(0, 0, 0, 0.8), 0px 0px 20px rgba(0, 0, 0, 0.3)",
                        textAlign: "center"
                    }}
                    variant="h2"
                    fontSize={"32px"}
                    fontWeight={"800"}
                    color={"white"}
                >
                    {name}
                </Typography>
            </Box>
        </Box>
    );
}
