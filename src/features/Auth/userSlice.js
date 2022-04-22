import userApi from "api/userApi"

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")

const initialState = {
    isLoading: false,
    errorMessage: '',
    currentUser: null,
}

// call api login 
export const login = createAsyncThunk(
    'user/login',
    async (data, { rejectWithValue } ) => {

        try {

            // {{host}}/api/administration/administrators/login.json
            const params = data.values;
            params.language = 'zho';

            const response = await userApi.login(params)
            console.log(response)

            if (response.status == 999) {
                return rejectWithValue(response)
            }

            return response;
        
        } catch(error) {
            console.log('Failed to login: ', error);
        }
       
    }
)

const user = createSlice({
    name: 'user',
    initialState, 
    reducers: {
        logout: () => initialState
    },
    extraReducers: (builder) => {

        builder.addCase(login.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(login.fulfilled, (state, action) => {
            state.isLoading = false;
            state.currentUser = action.payload;
        });

        builder.addCase(login.rejected, (state, action) => {
            state.isLoading = false;
            state.errorMessage = action.payload.message;

        })
    }
})

const { reducer, actions } = user;
export const { logout } = actions;
export default reducer
