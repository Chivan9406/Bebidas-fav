import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { createRecipesSlice, RecipesSliceType } from './recipeSlice.ts'
import { createFavoritesSlice, FavoritesSliceType } from './favoritesSlice.ts'
import { createNotificationSlice, NotificationSliceType } from './notificationSlice.ts'

export const useAppStore = create<RecipesSliceType & FavoritesSliceType & NotificationSliceType>()(devtools((...a) => ({
  ...createRecipesSlice(...a),
  ...createFavoritesSlice(...a),
  ...createNotificationSlice(...a)
})))