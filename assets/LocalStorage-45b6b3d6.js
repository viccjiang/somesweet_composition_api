const o={save(t){const e=JSON.stringify(t);localStorage.setItem("myFavorite",e)},get(){return JSON.parse(localStorage.getItem("myFavorite"))}};export{o as s};
