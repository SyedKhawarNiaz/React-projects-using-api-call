import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchproducts = createAsyncThunk("fetchdata", async () => {
  let response = await fetch("https://fakestoreapi.com/products");
  return await response.json();
});

const initialState = {
  data: [],
  APidata: null,
  isLoading: false,
  error: false,
  total: null,
};

const Productslice = createSlice({
  name: "product",
  initialState,
  reducers: {
    storeitems(state, action) {
      let item = action.payload;
      const isitemExit = state.data.find((i) => i.Id === item.Id);
      if (isitemExit) {
        state.data.forEach((i) => {
          if (i.Id === item.Id) {
            i.quantity += 1;
            i.Price += i.Price;
            state.total = i.Price;
          }
        });
      } else {
        state.data.push(item);
        let total = state.data.reduce((acc, curr) => {
          return acc + curr.Price;
        }, 0);
        state.total = total;
      }
      // state.data.push(action.payload);
      // let total = state.data.reduce((acc, curr) => {
      //   return acc + curr.Price;
      // }, 0);
      // state.total = total;
    },

    updatestore(state, action) {
      state.data = state.data.filter((id) => id.Id !== action.payload);
      let total = state.data.reduce((acc, curr) => {
        return acc + curr.Price;
      }, 0);
      state.total = total;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchproducts.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(fetchproducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.APidata = action.payload;
      state.error = false;
    });
    builder.addCase(fetchproducts.rejected, (state) => {
      state.isLoading = true;
      state.error = true;
    });
  },
});

export const { storeitems, updatestore } = Productslice.actions;
export default Productslice.reducer;
