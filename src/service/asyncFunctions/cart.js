import { setCartData, setLocalCartData } from "../../store/cart";
import { setAlert } from "./home";

export const addTocart = (selectedProduct, token) => async (dispatch) => {
  try {
    const getStoreIdsData = localStorage.getItem("storeIds");
    const storeId = getStoreIdsData?.storeId || 2;
    const data = await axios.post(
      `${DOMAIN_BASE_URL}/cartLineItem?storeId=${storeId}`,
      selectedProduct,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    fetchCartData(token)(dispatch);
    setAlert("success", "Product added to cart")(dispatch);
  } catch (err) {
    setAlert("error", "unable to addTocart")(dispatch);
  }
};



/////////////////////////local cart
export const localAddToCart = (product, cartData) => async (dispatch) => {
  let localCart;
  if (Object.keys(cartData).length > 0 && cartData?.cartLineItem?.length > 0) {
    let { totalCartPrice, totalCartQuantity, cartLineItem } = cartData;
    let itemExists = cartLineItem.filter((item) => {
      // console.log(item, product[0]);
      if (item.productId === product[0].productId) return item;
    });
    if (itemExists.length > 0) {
      let selectedProduct = {
        ...product[0],
        quantity: product[0].quantity + itemExists[0].quantity,
      };
      console.log(selectedProduct, product[0].quantity);
      updateLocalCart(
        selectedProduct,
        cartData,
        "increment",
        product[0].quantity
      )(dispatch);
    } else {
      localCart = {
        totalCartPrice:
          totalCartPrice + product[0].standardPrice * product[0].quantity,
        totalCartQuantity: totalCartQuantity + product[0].quantity,
        cartLineItem: [...cartLineItem, product[0]],
      };
      dispatch(setLocalCartData(localCart));
    }
  } else {
    localCart = {
      cartLineItem: product,
      totalCartPrice: product[0].standardPrice * product[0].quantity,
      totalCartQuantity: product[0].quantity,
    };
    dispatch(setLocalCartData(localCart));
  }

  setAlert("success", "Product added to cart")(dispatch);
};

export const RemoveLocalProduct = (product, cartData) => async (dispatch) => {
  let localCart;

  let { totalCartQuantity, cartLineItem, totalCartPrice } = cartData;
  let list = cartLineItem.filter((id) => id.productId !== product.productId);
  let removeFromTotal = product.standardPrice * product.quantity;
  localCart = {
    totalCartQuantity: totalCartQuantity - product.quantity,
    totalCartPrice: totalCartPrice - removeFromTotal,
    cartLineItem: list,
  };

  dispatch(setLocalCartData(localCart));
  setAlert("success", "cart updated successfully")(dispatch);
};

export const updateLocalCart =
  (product, cartData, type, quantity) => async (dispatch) => {
    let localCart;

    let { totalCartQuantity, cartLineItem, totalCartPrice } = cartData;
    // let enteringkey = cartLineItem.findIndex((pr) => pr.id === product.id);
    const enteringkey = cartLineItem.findIndex((object) => {
      return object.productId === product.productId;
    });
    let array = [...cartLineItem];
    let list = cartLineItem.filter((id) => id.productId !== product.productId);
    array.splice(enteringkey, 1, product);
    console.log(quantity);
    localCart = {
      totalCartQuantity:
        type === "decrement"
          ? totalCartQuantity - quantity
          : totalCartQuantity + quantity,
      totalCartPrice:
        type === "decrement"
          ? totalCartPrice - product.standardPrice * quantity
          : totalCartPrice + product.standardPrice * quantity,
      // cartLineItem: [...list, product],
      cartLineItem: array,
    };

    dispatch(setLocalCartData(localCart));
    setAlert("success", "cart updated successfully")(dispatch);
  };
