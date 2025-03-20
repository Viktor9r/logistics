import { styled } from "@mui/material";

export const StyledEquipmentPageCellTitle = styled('h4')(() => ({
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: '1.25',
    textTransform: 'uppercase',
    textAlign: 'center',

    ['@media (max-width: 1000px)']: {
        // height: "fit-content",
        fontSize: '14px',
    }
}))