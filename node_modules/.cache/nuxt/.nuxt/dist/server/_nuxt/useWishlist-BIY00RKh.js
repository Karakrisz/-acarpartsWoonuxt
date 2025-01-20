import { i as useState } from "../server.mjs";
import { computed } from "vue";
function useWishlist() {
  const theList = useState("wishlist", () => []);
  function addToWishlist(item) {
    theList.value.push(item);
    localStorage.setItem("wishlist", JSON.stringify(theList.value));
  }
  function removeFromWishlist(databaseId) {
    theList.value = theList.value.filter((item) => item.databaseId !== databaseId);
    localStorage.setItem("wishlist", JSON.stringify(theList.value));
  }
  const isInList = (databaseId) => databaseId ? theList.value.some((item) => item.databaseId === databaseId) : false;
  const isEmpty = computed(() => theList.value.length === 0);
  function clearWishlist() {
    theList.value = [];
    localStorage.removeItem("wishlist");
  }
  return { theList, addToWishlist, removeFromWishlist, isInList, isEmpty, clearWishlist };
}
export {
  useWishlist as u
};
//# sourceMappingURL=useWishlist-BIY00RKh.js.map
