import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { bgGradient } from 'src/theme/css';

import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function HomeForDesigner() {
  const theme = useTheme();

  return (
    <Box
      component={MotionViewport}
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.grey[900], 0.8),
          imgUrl: '/assets/images/home/for_designer.jpg',
        }),
        textAlign: 'center',
        color: 'common.white',
        py: { xs: 10, md: 15 },
      }}
    >
      <m.div variants={varFade({ distance: 40 }).inUp}>
        <Typography variant="overline" sx={{ opacity: 0.48 }}>
          Professional Kit
        </Typography>
      </m.div>

      <m.div variants={varFade({ distance: 40 }).inUp}>
        <Typography variant="h2" sx={{ mt: 2, mb: 5 }}>
          For Designer
        </Typography>
      </m.div>
    </Box>
  );
}
