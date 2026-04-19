## The Redux Vocabulary
To understand the hooks, you must understand the machinery behind them:

### Redux
- The overall "State Machine." It is a single source of truth (a big JavaScript object) that holds the data for your entire app.

### Slice
- A "slice" of that big object. For an e-commerce app, you’d have a cartSlice, a userSlice, and a productSlice. It contains the initial data and the logic to update it.

### Reducer
- The "logic" inside the slice. It’s a function that takes the current state and an action, then returns a new state. (e.g., state.count + 1).

### RTK Query (The API Slice)
- A special slice that handles "Server State." It doesn't just store data; it manages the fetching, caching, and refreshing of that data.

------------------------------------------------------------------------------------------------------------

Understanding the Core Hooks
In a senior-level Next.js app, you will use two types of hooks: Standard Redux Hooks (for local UI state like the cart) and RTKQ Auto-generated Hooks (for server data like products).

# useSelector (The "Reader")
- Think of this as a "Select" statement in SQL. It allows your component to "extract" or "read" data from the Redux store.

Interview Tip: Mention that useSelector implements a selector function. It only triggers a re-render if the specific data you selected changes, which is a key performance optimization.

# useDispatch (The "Messenger")
- In Redux, you never change state directly (e.g., state.cart = [] is a crime). Instead, you "dispatch" an Action. The Dispatcher is the messenger that carries your request to the Reducer.

-----------------------------------------------------------------------------------------------------------

Instead of a standard slice, we use createApi. This will automatically generate a hook for us called useGetProductsQuery
