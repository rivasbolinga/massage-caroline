import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  massages: {
    ayurvedic: [
      {
        id: 1,
        title: "Massage Title",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dignissimos aut, eius nulla rerum perferendis quidem eligendi, tempora, consequuntur ab obcaecati doloribus aliquid eos recusandae ipsum repellat sed vel facilis!",
        prices: [10, 20, 30],
        time: ["30 min", "1 hour", "2 hour"],
        image: "../../assets/customer.png",
        type: "ayurvedic",
      },
      {
        id: 1,
        title: "Massage Title",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dignissimos aut, eius nulla rerum perferendis quidem eligendi, tempora, consequuntur ab obcaecati doloribus aliquid eos recusandae ipsum repellat sed vel facilis!",
        prices: [10, 20, 30],
        time: ["30 min", "1 hour", "2 hour"],
        image: "../../assets/customer.png",
        type: "ayurvedic",
      },
      {
        id: 1,
        title: "Massage Title",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dignissimos aut, eius nulla rerum perferendis quidem eligendi, tempora, consequuntur ab obcaecati doloribus aliquid eos recusandae ipsum repellat sed vel facilis!",
        prices: [10, 20, 30],
        time: ["30 min", "1 hour", "2 hour"],
        image: "../../assets/customer.png",
        type: "ayurvedic",
      },
    ],
    sports: [
      {
        id: 1,
        title: "Massage Title",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dignissimos aut, eius nulla rerum perferendis quidem eligendi, tempora, consequuntur ab obcaecati doloribus aliquid eos recusandae ipsum repellat sed vel facilis!",
        prices: [10, 20, 30],
        time: ["30 min", "1 hour", "2 hour"],
        image: "../../assets/customer.png",
        type: "ayurvedic",
      },
      {
        id: 1,
        title: "Massage Title",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dignissimos aut, eius nulla rerum perferendis quidem eligendi, tempora, consequuntur ab obcaecati doloribus aliquid eos recusandae ipsum repellat sed vel facilis!",
        prices: [10, 20, 30],
        time: ["30 min", "1 hour", "2 hour"],
        image: "../../assets/customer.png",
        type: "ayurvedic",
      },
      {
        id: 1,
        title: "Massage Title",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dignissimos aut, eius nulla rerum perferendis quidem eligendi, tempora, consequuntur ab obcaecati doloribus aliquid eos recusandae ipsum repellat sed vel facilis!",
        prices: [10, 20, 30],
        time: ["30 min", "1 hour", "2 hour"],
        image: "../../assets/customer.png",
        type: "ayurvedic",
      },
    ],
    beauty: [
      {
        id: 1,
        title: "Massage Title",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dignissimos aut, eius nulla rerum perferendis quidem eligendi, tempora, consequuntur ab obcaecati doloribus aliquid eos recusandae ipsum repellat sed vel facilis!",
        prices: [10, 20, 30],
        time: ["30 min", "1 hour", "2 hour"],
        image: "../../assets/customer.png",
        type: "ayurvedic",
      },
      {
        id: 1,
        title: "Massage Title",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dignissimos aut, eius nulla rerum perferendis quidem eligendi, tempora, consequuntur ab obcaecati doloribus aliquid eos recusandae ipsum repellat sed vel facilis!",
        prices: [10, 20, 30],
        time: ["30 min", "1 hour", "2 hour"],
        image: "../../assets/customer.png",
        type: "ayurvedic",
      },
      {
        id: 1,
        title: "Massage Title",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dignissimos aut, eius nulla rerum perferendis quidem eligendi, tempora, consequuntur ab obcaecati doloribus aliquid eos recusandae ipsum repellat sed vel facilis!",
        prices: [10, 20, 30],
        time: ["30 min", "1 hour", "2 hour"],
        image: "../../assets/customer.png",
        type: "ayurvedic",
      },
    ],
  },

  detailsTypeId: {type: null, id: null},
}

const massagesSlice = createSlice({
  name: "redux/massagesSlice",
  initialState,
  reducers: {
    setDeatils: () => {
      console.log("hello")
    }
  }
})

export const { setDeatils } = massagesSlice.actions;
export default massagesSlice.reducer;