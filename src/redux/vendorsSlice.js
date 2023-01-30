import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import http from "services/http";
import RequestEndpoints from "config/requestEndpoints";

const initialState = {
    loading: false,
    vendors: [],
    filters: {page: 0, page_size: 10, lat: 35.754, long: 51.328},
    error: ''
}

const fetchVendors = createAsyncThunk(
    'vendors/fetchVendors', (filters) => http.get(RequestEndpoints.vendors, filters || initialState.filters).then((response) => response.data.data.finalResult.filter((vendor) => vendor.type === 'VENDOR')))

const vendorsSlice = createSlice({
    name: 'vendors',
    initialState,
    reducers: {
        filteredVendors: (state, action) => {
            fetchVendors(state.filters)
            console.log(action)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchVendors.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchVendors.fulfilled, (state, action) => {
            state.loading = false
            state.vendors = action.payload
            state.error = ''
        })
        builder.addCase((fetchVendors.rejected, (state, action) => {
            state.loading = false
            state.vendors = []
            state.error = action.error.message
        }))
    }
})
export const {filteredVendors} = vendorsSlice.actions
export {fetchVendors}
export default vendorsSlice.reducer