import { Button } from "@mui/material";

type gradientButtonProps = {
    onClick: () => void,
    disabled: boolean,
    borderRadius?: string,
    children?: React.ReactNode,
    width?: string,
    height?: string,
}
export default function GradientButton({ onClick, disabled, borderRadius, children, width, height }: gradientButtonProps) {
    return (
        <Button
            disableRipple
            variant="contained"
            onClick={onClick}
            disabled={disabled}
            sx={{
                width: width || "100%",
                height: height || "100%",
                borderRadius: borderRadius || "10px",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                cursor: disabled ? "not-allowed" : "pointer",
                position: "relative",
                zIndex: 1,
                overflow: "hidden",
                background: "linear-gradient(90deg, #1B2351 0%, #47C0D2 100%)",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                textTransform: "none",
                fontWeight: "600",
                fontSize: "16px",
                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(90deg, #47C0D2 0%, #1B2351 100%)",
                    opacity: 0,
                    zIndex: -1,
                    transition: "opacity 0.4s ease",
                },
                "&:hover": {
                 
                    boxShadow: disabled ? "none" : "0px 8px 20px rgba(71, 192, 210, 0.4)",
                    "&::before": {
                        opacity: disabled ? 0 : 1,
                    },
                },
                "&:active": {
                    transform: "translateY(0) scale(0.98)",
                },
                "&:disabled": {
                    background: "#D1D1D1",
                    color: "#999",
                    boxShadow: "none",
                    opacity: 0.7,
                }
            }}
        >
            {children}
        </Button>
    )
}
