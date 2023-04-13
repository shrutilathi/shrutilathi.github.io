const reducer = (state = [], action) => {
    switch (action.type) {
      case "ADD":
          return [...state, action.payload.newItem];
      case "DELETE": {
        const newList = [...state].filter((item) => item.id !== action.payload);
        return newList;
      }
      case "EDIT":{
          const newName=action.payload.name;
          const newEmail=action.payload.email;
          const newAge=action.payload.age;
          const tempList=state.map((item)=>{
              if(item.id===action.payload.id.id)
              {
                const newItem={
                  name:newName,
                  email:newEmail,
                  age:newAge
                }
                return Object.assign(item,newItem);
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