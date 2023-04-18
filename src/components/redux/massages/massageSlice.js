import { createSlice } from '@reduxjs/toolkit';
import img1 from '../../../assets/customer.png';

const initialState = {
  massagesData: [
    {
      id: 0,
      title: 'Massage Title',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dignissimos aut, eius nulla rerum perferendis quidem eligendi, tempora, consequuntur ab obcaecati doloribus aliquid eos recusandae ipsum repellat sed vel facilis!',
      prices: [10, 20, 30],
      time: ['30 min', '1 hour', '2 hour'],
      image: img1,
      type: 'Sports',
    },
    {
      id: 1,
      title: 'Massage Title',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dignissimos aut, eius nulla rerum perferendis quidem eligendi, tempora, consequuntur ab obcaecati doloribus aliquid eos recusandae ipsum repellat sed vel facilis!',
      prices: [10, 20, 30],
      time: ['30 min', '1 hour', '2 hour'],
      image: img1,
      type: 'Sports',
    },
    {
      id: 2,
      title: 'Massage Title',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dignissimos aut, eius nulla rerum perferendis quidem eligendi, tempora, consequuntur ab obcaecati doloribus aliquid eos recusandae ipsum repellat sed vel facilis!',
      prices: [10, 20, 30],
      time: ['30 min', '1 hour', '2 hour'],
      image: img1,
      type: 'Sports',
    },
    {
      id: 3,
      title: 'Massage Title',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dignissimos aut, eius nulla rerum perferendis quidem eligendi, tempora, consequuntur ab obcaecati doloribus aliquid eos recusandae ipsum repellat sed vel facilis!',
      prices: [10, 20, 30],
      time: ['30 min', '1 hour', '2 hour'],
      image: img1,
      type: 'Sports',
    },

    {
      id: 4,
      title: 'Massage Title',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dignissimos aut, eius nulla rerum perferendis quidem eligendi, tempora, consequuntur ab obcaecati doloribus aliquid eos recusandae ipsum repellat sed vel facilis!',
      prices: [10, 20, 30],
      time: ['30 min', '1 hour', '2 hour'],
      image: img1,
      type: 'Beautify',
    },
    {
      id: 5,
      title: 'Massage Title',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dignissimos aut, eius nulla rerum perferendis quidem eligendi, tempora, consequuntur ab obcaecati doloribus aliquid eos recusandae ipsum repellat sed vel facilis!',
      prices: [10, 20, 30],
      time: ['30 min', '1 hour', '2 hour'],
      image: img1,
      type: 'Beautify',
    },
    {
      id: 6,
      title: 'Massage Title',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dignissimos aut, eius nulla rerum perferendis quidem eligendi, tempora, consequuntur ab obcaecati doloribus aliquid eos recusandae ipsum repellat sed vel facilis!',
      prices: [10, 20, 30],
      time: ['30 min', '1 hour', '2 hour'],
      image: img1,
      type: 'Beautify',
    },

    {
      id: 7,
      title: 'Massage Title',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dignissimos aut, eius nulla rerum perferendis quidem eligendi, tempora, consequuntur ab obcaecati doloribus aliquid eos recusandae ipsum repellat sed vel facilis!',
      prices: [10, 20, 30],
      time: ['30 min', '1 hour', '2 hour'],
      image: img1,
      type: 'ayurvedic',
    },
    {
      id: 8,
      title: 'Massage Title',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dignissimos aut, eius nulla rerum perferendis quidem eligendi, tempora, consequuntur ab obcaecati doloribus aliquid eos recusandae ipsum repellat sed vel facilis!',
      prices: [10, 20, 30],
      time: ['30 min', '1 hour', '2 hour'],
      image: img1,
      type: 'ayurvedic',
    },
  ],

  detailsTypeId: null,
};

const massagesSlice = createSlice({
  name: 'redux/massagesSlice',
  initialState,
  reducers: {
    setDetails: (state, { payload }) => ({
      ...state,
      detailsTypeId: payload,
    }),
  },
});

export const { setDetails } = massagesSlice.actions;
export default massagesSlice.reducer;
