const   initialData=[];
const reducer = (state =initialData, action) => {
    switch (action.type) {
      case "ADD":
          return [...state, action.payload.newItem];
      case "DELETE": {
        const newList = [...state].filter((item) => item.id !== action.payload);
        return newList;
      }
      case "EDIT":{
          const tempList=state.map((item)=>{
              if(item.id===action.payload.id)
              {
                item.name=action.payload.name;
                item.email=action.payload.email;
                item.age=action.payload.age;
              }
              return item;
            });
          return tempList;
      }
      default:
        return state;
    }
  };
  export default reducer;