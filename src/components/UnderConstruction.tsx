import EngineeringIcon from '@mui/icons-material/Engineering';
import { Stack, Typography } from '@mui/material';
import { useTranslate } from '@refinedev/core';

export default function UnderConstruction() {
  const translate = useTranslate();

  return (
    <Stack
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography variant='h4'>{translate('underConstruction.title')}</Typography>
      <EngineeringIcon sx={{ width: 100, height: 100, mb: 2 }} />
    </Stack>
  );
}
