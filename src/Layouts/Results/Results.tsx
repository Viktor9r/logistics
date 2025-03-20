import { StyledChartCandles, StyledChartCell, StyledChartCellBottom, StyledChartCellImage, StyledChartCellSubTitle, StyledChartCellSumm, StyledChartCellTitle, StyledChartCellTop, StyledChartDate, StyledChartSingleCandle, StyledResultContentCell, StyledResultsPage, StyledResultsStatsCell } from "./styled"
import resultsImage from '../../resources/images/results.png';
import { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@mui/x-date-pickers";
import { useMediaQuery } from "@mui/material";

export const ResultsPage: React.FC = () => {
    const mobile = useMediaQuery('(max-width:1000px)');

    const [selectedCell, setSelectedCell] = useState(4);
    return (
        <>
            <StyledResultsPage>
                <StyledResultContentCell
                    sx={{
                        gap: '0',
                        justifyContent: 'center',
                        padding: mobile ? '0 10px' : '24px 24px',
                        alignItems: 'center',
                        width: !mobile ? 'calc(50% - 84px)' : 'calc(100% - 20px)',
                        maxWidth: !mobile ? 'calc(50% - 84px)' : 'calc(100% - 20px)',
                        minWidth: !mobile ? 'calc(50% - 84px)' : 'calc(100% - 20px)',
                    }}
                >
                    <StyledChartCell
                        onClick={() => setSelectedCell(1)}

                    >
                        <StyledChartCandles>
                            <StyledChartSingleCandle sx={{ height: '40%' }} />
                            <StyledChartSingleCandle
                                sx={{
                                    height: '55%',
                                    background: selectedCell === 1 ? '#00302E' : 'rgba(0, 48, 46, 0.65)',
                                }}
                            />
                        </StyledChartCandles>
                        <StyledChartDate
                            sx={{
                                fontWeight: selectedCell === 1 ? 600 : 400,
                                fontSize: selectedCell === 1 ? '18px' : '16px'
                            }}
                        >
                            Sep 2024
                        </StyledChartDate>
                    </StyledChartCell>

                    <StyledChartCell onClick={() => setSelectedCell(2)}>
                        <StyledChartCandles>
                            <StyledChartSingleCandle sx={{ height: '50%' }} />
                            <StyledChartSingleCandle sx={{
                                height: '65%',
                                background: selectedCell === 2 ? '#00302E' : 'rgba(0, 48, 46, 0.65)',
                            }} />
                        </StyledChartCandles>
                        <StyledChartDate
                            sx={{
                                fontWeight: selectedCell === 2 ? 600 : 400,
                                fontSize: selectedCell === 2 ? '18px' : '16px'
                            }}
                        >
                            Oct 2024
                        </StyledChartDate>
                    </StyledChartCell>

                    <StyledChartCell onClick={() => setSelectedCell(3)}>
                        <StyledChartCandles>
                            <StyledChartSingleCandle sx={{ height: '60%' }} />
                            <StyledChartSingleCandle sx={{
                                height: '75%',
                                background: selectedCell === 3 ? '#00302E' : 'rgba(0, 48, 46, 0.65)',
                            }} />
                        </StyledChartCandles>
                        <StyledChartDate
                            sx={{
                                fontWeight: selectedCell === 3 ? 600 : 400,
                                fontSize: selectedCell === 3 ? '18px' : '16px'
                            }}
                        >
                            Nov 2024
                        </StyledChartDate>
                    </StyledChartCell>

                    <StyledChartCell onClick={() => setSelectedCell(4)}>
                        <StyledChartCandles>
                            <StyledChartSingleCandle sx={{ height: '70%' }} />
                            <StyledChartSingleCandle sx={{
                                height: '85%',
                                background: selectedCell === 4 ? '#00302E' : 'rgba(0, 48, 46, 0.65)',
                            }} />
                        </StyledChartCandles>
                        <StyledChartDate
                            sx={{
                                fontWeight: selectedCell === 4 ? 600 : 400,
                                fontSize: selectedCell === 4 ? '18px' : '16px'
                            }}
                        >
                            Dec 2024
                        </StyledChartDate>
                    </StyledChartCell>
                </StyledResultContentCell>

                <StyledResultContentCell
                    sx={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        padding: mobile ? '16px' : '24px 24px',
                        gap: '32px',
                        alignItems: 'flex-start',
                        width: !mobile ? 'calc(50% - 84px)' : 'calc(100% - 32px)',
                        maxWidth: !mobile ? 'calc(50% - 84px)' : 'calc(100% - 32px)',
                        minWidth: !mobile ? 'calc(50% - 84px)' : 'calc(100% - 32px)',
                    }}
                >
                    <StyledChartCellTop>
                        <StyledChartCellTitle>Our Results Prove Our Success.</StyledChartCellTitle>

                        {/* <StyledChartCellImage
                            src={resultsImage}
                        /> */}
                        <StyledResultsStatsCell>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '32px',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <StyledChartCellSubTitle>Stats based on:</StyledChartCellSubTitle>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '16px'
                                    }}
                                >
                                    <ArrowLeftIcon
                                        sx={{
                                            cursor: 'pointer'
                                        }}
                                        onClick={() => setSelectedCell(prev => (prev === 1 ? 4 : prev - 1))}
                                    />
                                    <StyledChartCellSubTitle sx={{ fontWeight: 400 }}>
                                        {selectedCell === 1 && "September 2024"}
                                        {selectedCell === 2 && "October 2024"}
                                        {selectedCell === 3 && "November 2024"}
                                        {selectedCell === 4 && "December 2024"}
                                    </StyledChartCellSubTitle>
                                    <ArrowRightIcon
                                        sx={{
                                            cursor: 'pointer'
                                        }}
                                        onClick={() => setSelectedCell(prev => (prev === 4 ? 1 : prev + 1))}
                                    />
                                </div>
                            </div>

                            <div
                                style={{
                                    width: 'calc(100% + 64px)',
                                    height: '2px',
                                    transform: 'translateX(-32px)',
                                    background: '#fff'
                                }}
                            />

                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: mobile ? 'center' : 'flex-end',
                                    justifyContent: 'space-between',
                                    flexDirection: mobile ? 'column' : 'row',
                                    gap: '32px'
                                }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        gap: mobile ? '32px' : '10px',
                                    }}
                                >
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '10px',
                                            alignItems: mobile ? 'center' : 'start'
                                        }}
                                    >
                                        <StyledChartCellSubTitle
                                            sx={{
                                                fontWeight: 400
                                            }}
                                        >
                                            Average
                                        </StyledChartCellSubTitle>
                                        <StyledChartCellTitle
                                            sx={{
                                                fontSize: '50px'
                                            }}
                                        >
                                            {selectedCell === 1 && "$1.98"}
                                            {selectedCell === 2 && "$2.04"}
                                            {selectedCell === 3 && "$2.09"}
                                            {selectedCell === 4 && "$2.17"}
                                        </StyledChartCellTitle>
                                    </div>
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '10px',
                                            alignItems: mobile ? 'center' : 'start'
                                        }}
                                    >
                                        <StyledChartCellSubTitle
                                            sx={{
                                                fontWeight: 400
                                            }}
                                        >
                                            Our result
                                        </StyledChartCellSubTitle>
                                        <StyledChartCellTitle
                                            sx={{
                                                fontSize: '50px',
                                                color: 'rgba(3, 150, 83, 1)',
                                            }}
                                        >
                                            {selectedCell === 1 && "$2.62"}
                                            {selectedCell === 2 && "$2.71"}
                                            {selectedCell === 3 && "$2.84"}
                                            {selectedCell === 4 && "$2.99"}
                                        </StyledChartCellTitle>
                                    </div>
                                </div>

                                <div
                                    style={{
                                        display: 'flex',
                                        gap: '32px',
                                    }}
                                >
                                    <StyledChartCellSubTitle
                                        sx={{
                                            fontWeight: 500,
                                            color: 'rgba(3, 150, 83, 1)',
                                            fontSize: '30px'
                                        }}
                                    >
                                        {selectedCell === 1 && "+$0.64"}
                                        {selectedCell === 2 && "+$0.67"}
                                        {selectedCell === 3 && "+$0.73"}
                                        {selectedCell === 4 && "+$0.82"}
                                    </StyledChartCellSubTitle>
                                    <StyledChartCellSubTitle
                                        sx={{
                                            fontWeight: 500,
                                            color: 'rgba(3, 150, 83, 1)',
                                            fontSize: '30px'
                                        }}
                                    >
                                        {selectedCell === 1 && "-23.88"}
                                        {selectedCell === 2 && "-24.12"}
                                        {selectedCell === 3 && "-24.33"}
                                        {selectedCell === 4 && "-24.94"}
                                    </StyledChartCellSubTitle>
                                </div>
                            </div>
                        </StyledResultsStatsCell>
                    </StyledChartCellTop>

                    <StyledChartCellBottom>
                        <StyledChartCellSubTitle>
                            Result Average Gross per Truck
                            <br />
                            <span
                                style={{
                                    fontSize: '14px',
                                    fontWeight: 400
                                }}
                            >
                                Based on more then 30 active trucks
                            </span>
                        </StyledChartCellSubTitle>

                        <StyledChartCellSumm>$32 895</StyledChartCellSumm>
                    </StyledChartCellBottom>
                </StyledResultContentCell>
            </StyledResultsPage>
        </>
    )
}