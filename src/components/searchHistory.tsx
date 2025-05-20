'use client';

import { IconButton, List, ListItem, Typography, Box, Tooltip } from '@mui/material';
import { Delete, Search } from '@mui/icons-material';
import { HistoryItem } from '@/hooks/useSearchHistory';
import CONSTANTS from '@/constants/text';
import LoadingSpinner from './loadingSpinner';

interface Props {
    history: HistoryItem[]
    onSelect: (city: string, country: string) => void;
    onDelete: (index: number) => void;
    loading?: boolean;
}

export default function SearchHistory({ history, onSelect, onDelete, loading }: Props) {

    return (
        <Box
            sx={{
                backgroundColor: 'history.bg',
                borderRadius: 5,
                p: {
                    xs: 2,
                    sm: 3,
                },
                backdropFilter: 'blur(10px)',
            }}
        >
            {loading ? (
                <Box display="flex" flexDirection="column" alignItems="center" py={4}>
                    <LoadingSpinner />
                    <Typography color="text.secondary" fontSize="0.9rem" mt={2}>
                        {CONSTANTS.HISTORY.LOADING}
                    </Typography>
                </Box>
            ) : history.length === 0 && !loading ? (<Box textAlign="center" py={3}>
                    <Search fontSize="medium" sx={{ color: 'text.secondary' }} />
                    <Typography color="text.secondary" fontSize="0.9rem" mt={1}>
                    {CONSTANTS.HISTORY.EMPTY_STATE}
                </Typography>
            </Box>
            ) : (
                <>
                    <Typography variant="subtitle2" color='text.primary' fontWeight={400} mb={2}>
                        {CONSTANTS.HISTORY.TITLE}
                    </Typography>
                    <List disablePadding>
                        {history.map((item, index) => (
                            <ListItem
                                key={index}
                                sx={{
                                    backgroundColor: 'history.searchCard',
                                    borderRadius: { xs: 4, sm: 3 },
                                    mb: 1.5,
                                    px: { xs: 1.5, sm: 2 },
                                    py: { xs: 1, sm: 1 },
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: { xs: 'column', sm: 'row' },
                                        alignItems: { xs: 'flex-start', sm: 'center' },
                                        justifyContent: 'space-between',
                                        flex: 1,
                                        gap: { xs: 0.5, sm: 1.5 },
                                        minWidth: 0,
                                    }}
                                >
                                    <Typography
                                        variant="subtitle1"
                                        color="text.primary"
                                        sx={{
                                            fontSize: { xs: '0.9rem', sm: '1rem' },
                                            lineHeight: 1.2,
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                        }}
                                    >
                                        {item.city}, {item.country}
                                    </Typography>

                                    <Typography
                                        variant="caption"
                                        color="custom.timestamp"
                                        sx={{
                                            fontSize: { xs: '0.75rem', sm: '0.8rem' },
                                            whiteSpace: 'nowrap',
                                        }}
                                    >
                                        {item.timestamp}
                                    </Typography>
                                </Box>

                                <Box sx={{ display: 'flex', gap: 1, ml: { sm: 1.5 } }}>
                                    <Tooltip title={CONSTANTS.HISTORY.VIEW_TOOLTIP} arrow>
                                        <IconButton
                                            onClick={() => onSelect(item.city, item.country)}
                                            sx={{
                                                width: 36,
                                                height: 36,
                                                backgroundColor: 'history.buttonBg',
                                                border: '2px solid',
                                                borderColor: 'history.buttonBorder',
                                                boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.15)',
                                                '&:hover': {
                                                    backgroundColor: 'history.hover',
                                                },
                                            }}
                                        >
                                            <Search fontSize="small" sx={{ color: 'history.buttonIcon' }} />
                                        </IconButton>
                                    </Tooltip>

                                    <Tooltip title={CONSTANTS.HISTORY.DELETE_TOOLTIP} arrow>
                                        <IconButton
                                            onClick={() => onDelete(index)}
                                            sx={{
                                                width: 36,
                                                height: 36,
                                                backgroundColor: 'history.buttonBg',
                                                border: '2px solid',
                                                borderColor: 'history.buttonBorder',
                                                boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.15)',
                                                '&:hover': {
                                                    backgroundColor: 'history.hover',
                                                },
                                            }}
                                        >
                                            <Delete fontSize="small" sx={{ color: 'history.buttonIcon' }} />
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                            </ListItem>
                        ))}
                    </List>
                </>
            )}
        </Box>
    );
}
