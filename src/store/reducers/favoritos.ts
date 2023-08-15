import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const product = action.payload

      const produtoExisteIndex = state.itens.findIndex(
        (p) => p.id === product.id
      )

      if (produtoExisteIndex !== -1) {
        state.itens.splice(produtoExisteIndex, 1)
      } else {
        state.itens.push(product)
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
