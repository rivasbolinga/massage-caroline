import { createSlice } from '@reduxjs/toolkit'
import img1 from '../../../assets/images/massage1.jpeg'
import img2 from '../../../assets/images/massage2.jpeg'
import img3 from '../../../assets/images/massage3.jpeg'

const initialState = {
  massagesData: [
    {
      id: 0,
      title: 'wellness-massage',
      description: 'wellness-massage',
      prices: [10, 20, 30],
      time: ['30 min', '1 hour', '2 hour'],
      image: img1,
      type: 'Sports',
    },
    {
      id: 1,
      title: 'customized',
      description: 'customized',
      prices: [10, 20, 30],
      time: ['30 min', '1 hour', '2 hour'],
      image: img2,
      type: 'Sports',
    },
    {
      id: 2,
      title: 'ayurvedic',
      description: 'ayurvedic',
      prices: [10, 20, 30],
      time: ['30 min', '1 hour', '2 hour'],
      image: img3,
      type: 'Sports',
    },
  ],

  detailsTypeId: null,
}

const massagesSlice = createSlice({
  name: 'redux/massagesSlice',
  initialState,
  reducers: {
    setDetails: (state, { payload }) => ({
      ...state,
      detailsTypeId: payload,
    }),
  },
})

export const { setDetails } = massagesSlice.actions
export default massagesSlice.reducer
