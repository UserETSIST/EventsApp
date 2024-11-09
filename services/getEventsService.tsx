// src/services/getEventsService.tsx
export const getAllEvents = () => {
    return [
      { id: '1', title: 'Festival de Música Electrónica', date: '15 Nov 2024', image: 'https://via.placeholder.com/150' },
      { id: '2', title: 'Exposición de Arte Moderno', date: '20 Nov 2024', image: 'https://via.placeholder.com/150' },
      { id: '3', title: 'Maratón de la Ciudad', date: '25 Nov 2024', image: 'https://via.placeholder.com/150' },
      { id: '4', title: 'Conferencia de Tecnología', date: '10 Dec 2024', image: 'https://via.placeholder.com/150' },
      { id: '5', title: 'Torneo de Ajedrez', date: '5 Jan 2025', image: 'https://via.placeholder.com/150' },
      { id: '6', title: 'Exposición de Fotografía', date: '18 Feb 2025', image: 'https://via.placeholder.com/150' },
      { id: '7', title: 'Cine al Aire Libre', date: '25 Mar 2025', image: 'https://via.placeholder.com/150' },
    ];
  };
  
  export const getRandomEvents = () => {
    const allEvents = getAllEvents();
    const randomEvents = allEvents.sort(() => 0.5 - Math.random()).slice(0, 3);
    return randomEvents;
  };
  

