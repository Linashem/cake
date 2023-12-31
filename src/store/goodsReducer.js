import { goodData } from "../Helper/arrays/listOfGoods";

const defaultState = {
  goods: goodData,
  categoryGoods: [],
  newTastes: goodData,
};
const goods = "goods";
const category = "category";
const newTastes = "newTastes";
const oneGood = "oneGood";
export const goodsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case category:
      return {
        ...state,
        categoryGoods: state.goods.filter((el) => {
          if (action.payload === "all") {
            return [state.goods];
          } else {
            return el.category === action.payload;
          }
        }),
      };

    case newTastes:
      if (action.payload === 1) {
        return {
          ...state,
          newTastes: state.goods.filter((el) => el.newTaste),
        };
      }
      break;
    default:
      return state;
  }
};

export const getGoodsActions = (payload) => ({
  type: goods,
  payload,
});

export const categoryActions = (payload) => ({
  type: category,
  payload,
});

export const newTastesActions = (payload) => ({
  type: newTastes,
  payload,
});

export const oneGoodActions = (payload) => ({
  type: oneGood,
  payload,
});
