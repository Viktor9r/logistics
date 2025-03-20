import { styled } from "@mui/material";

export const StyledResultsPage = styled('section')(() => ({
    margin: '0 auto',
    background: '#e3e3e3',
    height: 'calc(100vh - 170px)',
    marginTop: '30px',
    marginBottom: '30px',
    backgroundPosition: 'center',
    padding: '42px',
    borderRadius: '40px',
    display: 'flex',
    justifyContent: 'space-between',
    gap: '42px',

    ['@media (max-width: 1000px)']: {
        // height: "fit-content",
        height: 'fit-content',
        padding: '30px 16px 16px',
        flexDirection: 'column'
    }
}))

export const StyledResultContentCell = styled('div')(() => ({
    width: 'calc(50% - 84px)',
    maxWidth: 'calc(50% - 84px)',
    minWidth: 'calc(50% - 84px)',
    borderRadius: '40px',
    background: 'white',
    display: 'flex',

}));

export const StyledChartCell = styled('div')(() => ({
    width: '25%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    cursor: 'pointer',

    ['@media (max-width: 1000px)']: {
        // height: "fit-content",
        height: '55vh',
    }
}))

export const StyledChartDate = styled('div')(() => ({
    height: '30px',
    fontSize: '16px',
    color: '#000',
    fontWeight: 500,
    textAlign: 'center',

    ['@media (max-width: 1000px)']: {
        height: '30px',
        fontSize: '14px',
        marginBottom: '12px'
    }
}))

export const StyledChartCandles = styled('div')(() => ({
    height: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    borderBottom: '2px solid #000',
    padding: '0 24px',

    ['@media (max-width: 1000px)']: {
        padding: '0 12px',
    }
}))

export const StyledChartSingleCandle = styled('div')(() => ({
    width: '50%',
    background: '#e3e3e3'
}))

export const StyledChartCellTop = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    gap: '32px',
    alignItems: 'center',
}));

export const StyledChartCellTitle = styled('h2')(() => ({
    color: '#000',
    fontWeight: 600,
    fontSize: '32px',
}))

export const StyledChartCellSubTitle = styled('h3')(() => ({
    color: '#000',
    fontSize: '20px',
    fontWeight: 600,

    ['@media (max-width: 1000px)']: {
        textAlign: 'center',
    }
}))

export const StyledChartCellImage = styled('img')(() => ({
    width: 'calc(100% + 48px)',
    height: '100%',
}))

export const StyledResultsStatsCell = styled('div')(() => ({
    width: 'calc(100%)',
    padding: '24px',
    background: '#e3e3e3',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
}))

export const StyledChartCellBottom = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    gap: '32px',
    alignItems: 'center',

    ['@media (max-width: 1000px)']: {
        flexDirection: 'column',
        textAlign: 'center',
        gap: '12px'
    }
}));

export const StyledChartCellSumm = styled('div')(() => ({
    fontSize: '44px',
    fontWeight: 600,
    color: '#000',
    minWidth: 'fit-content'
}))

