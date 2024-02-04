import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Soledad Mammarella",
  username: "@soleMB",
  email: "solemammarellaB@gmail.com",
  address: "Av Córdoba 1646. Piso 12, depto 290",
  city: "Buenos Aires",
  country: "Argentina",
  phone: "23443335677",
  imageUrl:
    "https://firebasestorage.googleapis.com/v0/b/proyecto-libreria-22941.appspot.com/o/WhatsApp%20Image%202024-02-01%20at%2019.13.44.jpeg?alt=media&token=18356095-4744-4290-8fc4-e2c56bdc402c",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUSer: (state, action) => {
      const { name, username, email } = action.payload;
      state.name = name;
      state.username = username;
      state.email = email;
    },
    changeEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { addUSer, changeEmail } = userSlice.actions;
export default userSlice.reducer;
