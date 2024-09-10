import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import type { ACMEvent } from '../../../../../public/data/events'; 

const EventCard = ({ event }: { event: ACMEvent }) => {
  return (
    <Card 
      sx={{
        width: 350,
        height: 320, // Slightly taller to improve spacing
        backgroundColor: '#ffffff', // White background
        borderRadius: '12px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)', // Subtle modern shadow
        m: 2, // Margin between cards
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        '&:hover': {
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', // More pronounced shadow on hover
        }
      }}
    >
      <CardContent sx={{ padding: '20px', flexGrow: 1 }}> {/* Adjusted padding for better spacing */}
        <Typography variant="h5" component="div" sx={{ color: '#1e3a8a', fontWeight: 'bold', marginBottom: '9px' }}>
          {event.name}
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ marginBottom: '30px' }}>
          {event.tagline}
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '30px' }}>
          {event.description}
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#1e3a8a', marginBottom: '4px' }}>
          When: <span style={{ fontWeight: 'normal' }}>{event.datetime ?? 'TBD'}</span>
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#1e3a8a' }}>
          Where: <span style={{ fontWeight: 'normal' }}>{event.location ?? 'TBD'}</span>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EventCard;
