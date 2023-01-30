import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import http from "services/http";
import RequestEndpoints from "config/requestEndpoints";

const initialState = {
    loading: false,
    vendors: [],
    filters: {page: -1, page_size: 10, lat: 35.754, long: 51.328},
    error: '',
    change: false
}

const fetchVendors = createAsyncThunk(
    "vendors/fetchVendors",
    async (arg, {getState}) => {
        const state = getState().vendors;
        if (state.filters.page === -1) return []
        return http.get(RequestEndpoints.vendors, state.filters).then((response) => response.data.data.finalResult.filter((vendor) => vendor.type === 'VENDOR'))
    }
);
const vendorsSlice = createSlice({
    name: 'vendors',
    initialState,
    reducers: {
        removeChange: (state,) => ({
            ...state,
            change: false,
        }),
        addPage: (state,) => ({
            ...state,
            change: true,
            filters: {
                ...state.filters,
                page: state.filters.page + 1
            }
        })
    },
    extraReducers: (builder) => {
        builder.addCase(fetchVendors.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchVendors.fulfilled, (state, action) => {
            state.loading = false
            console.log(action.payload)
            state.vendors = [...state.vendors, ...action.payload]
            state.error = ''
        })
        builder.addCase((fetchVendors.rejected, (state, action) => {
            state.loading = false
            state.vendors = []
            state.error = action.error.message
        }))
    }
})
export const {addPage, removeChange} = vendorsSlice.actions
export {fetchVendors}
export default vendorsSlice.reducer