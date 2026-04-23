import { Card, Box, Typography } from "@mui/material";
type inputFieldProps = {
    label: string,
    type: "text" | "password" | "email" | "tel",
    placeholder: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    error: boolean | undefined,
    helperText: string | undefined,
    disabled: boolean,
    icon?: React.ReactNode,
    fixedString?: string,
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void,
    optional?: boolean,
}
export default function GeneralInputField({ label, type, placeholder, value, onChange, error, helperText, disabled, icon, fixedString, onBlur, optional = false }: inputFieldProps) {
    return (
        <Box width={"100%"} mt={"8px"}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <Typography variant="body1" sx={{ fontWeight: "500", color: "primary.main" }}>{label}</Typography>
                {optional && <Typography variant="body2" sx={{ fontWeight: "300", color: "gray" }}>(Optional)</Typography>}
            </Box>
            <Card sx={{ backgroundColor: disabled ? "#F5F5F5" : "#FFFFFF", padding: "10px", borderRadius: "7px", border: "1px solid ", borderColor: error ? "red" : "#0000001A", mb: "0px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                {fixedString && <Typography variant="body1" sx={{ fontWeight: "700", color: "gray", mr: "10px" }}>{fixedString}</Typography>}
                <input
                    onBlur={onBlur}
                    style={{
                        width: "100%", height: "100%", borderRadius: "7px",
                        border: "none",
                        outline: "none",
                        backgroundColor: "transparent",
                        color: "#000",
                        fontSize: "16px",
                        fontWeight: "500",
                    }} type={type} placeholder={placeholder} value={value} onChange={onChange} disabled={disabled} />
                {icon}
            </Card>
            {error && <Typography variant="body2" color="error" mt={"2px"}>{helperText}</Typography>}
        </Box>
    )
}