
const starsElementsTemplate = {
0: "<i class='star-model far fa-star'></i><i class='star-model far fa-star'> </i><i class='star-model far fa-star'></i><i class='star-model far fa-star'></i><i class='star-model far fa-star'></i>",
0.5: "<i class='star-model fas fa-star-half-alt'></i><i class='star-model far fa-star'> </i><i class='star-model far fa-star'></i><i class='star-model far fa-star'></i><i class='star-model far fa-star'></i>",
1: "<i class='star-model fas fa-star'></i><i class='star-model far fa-star'></i><i class='star-model far fa-star'></i><i class='star-model far fa-star'></i><i class='star-model far fa-star'></i>",
1.5: "<i class='star-model fas fa-star'></i><i class='star-model fas fa-star-half-alt'></i><i class='star-model far fa-star'></i><i class='star-model far fa-star'></i><i class='star-model far fa-star'></i>",
2: "<i class='star-model fas fa-star'></i><i class='star-model fas fa-star'> </i><i class='star-model far fa-star'></i><i class='star-model far fa-star'></i><i class='star-model far fa-star'></i>",
2.5: "<i class='star-model fas fa-star'></i><i class='star-model fas fa-star'></i><i class='star-model fas fa-star-half-alt'></i><i class='star-model far fa-star'></i><i class='star-model far fa-star'></i>",
3: "<i class='star-model fas fa-star'></i><i class='star-model fas fa-star'></i><i class='star-model fas fa-star'></i><i class='star-model far fa-star'></i><i class='star-model far fa-star'></i>",
3.5: "<i class='star-model fas fa-star'></i><i class='star-model fas fa-star'></i><i class='star-model fas fa-star'></i><i class='star-model fas fa-star-half-alt'></i><i class='star-model far fa-star'></i>",
4: "<i class='star-model fas fa-star'></i><i class='star-model fas fa-star'></i><i class='star-model fas fa-star'></i><i class='star-model fas fa-star'></i><i class='star-model far fa-star'></i>",
4.5: "<i class='star-model fas fa-star'></i><i class='star-model fas fa-star'></i><i class='star-model fas fa-star'></i><i class='star-model fas fa-star'></i><i class='star-model fas fa-star-half-alt'></i>",
5: "<i class='star-model fas fa-star'></i><i class='star-model fas fa-star'></i><i class='star-model fas fa-star'></i><i class='star-model fas fa-star'></i><i class='star-model fas fa-star'></i>",
};

const routsIdTemplate = {
    ".navbar-navigation-trigger-reading": "/readnow",
    ".navbar-navigation-trigger-browse": "/browse",
    ".navbar-navigation-trigger-shop": "/shop",
    ".navbar-navigation-trigger-favs": "/favs",
    ".navbar-navigation-trigger-wishlist": "/wishlist",
    ".navbar-navigation-trigger-history": "/history",
    ".navbar-categories-trigger-must":"/must",
    ".navbar-categories-trigger-best":"/best",
    ".navbar-categories-trigger-classic":"/classic",
    ".navbar-categories-trigger-nonfiction":"/nonfiction",
    ".searchbar-leftside-filter-trigger-all":"/allbooks",
    ".searchbar-leftside-filter-trigger-recent": "/recent",
    ".searchbar-leftside-filter-trigger-pop":"/raiting",
    ".searchbar-leftside-filter-trigger-free": "/free"
};

const modalToggleShema = {
    0: "header-rightside-display-item-modal-1-register",
    1: "header-rightside-display-item-modal-2-login",
    3: "header-rightside-display-item-modal-3-logout",
    4: "header-rightside-display-item-modal-4-ava"
  };

  const cssIconsTemplate = {
    ".navbar-navigation-trigger-reading": '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fab fa-leanpub"></i>&nbsp;&nbsp;now reading',
    ".navbar-navigation-trigger-browse": '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fas fa-globe-americas"></i>&nbsp;&nbsp;browse',
    ".navbar-navigation-trigger-shop": '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fas fa-shopping-cart"></i>&nbsp;&nbsp;buy books',
    ".navbar-navigation-trigger-favs": '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fab fa-gratipay"></i>&nbsp;&nbsp;favourite books',
    ".navbar-navigation-trigger-wishlist": '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fas fa-th-list"></i>&nbsp;&nbsp;wishlist',
    ".navbar-navigation-trigger-history": '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fas fa-history"></i>&nbsp;&nbsp;history',
    ".navbar-categories-trigger-must":'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i style="font-size: calc(0.3vw + 0.3vh + 0.15vmin); color: crimson; "class="far fa-dot-circle"></i>&nbsp;&nbsp;must read',
    ".navbar-categories-trigger-best":'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i style="font-size: calc(0.3vw + 0.3vh + 0.15vmin); color: orange; "class="far fa-dot-circle"></i>&nbsp;&nbsp;best of list',
    ".navbar-categories-trigger-classic":'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i style="font-size: calc(0.3vw + 0.3vh + 0.15vmin); color: seagreen; "class="far fa-dot-circle"></i>&nbsp;&nbsp;classic novels',
    ".navbar-categories-trigger-nonfiction":'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i style="font-size: calc(0.3vw + 0.3vh + 0.15vmin); color: slateblue; "class="far fa-dot-circle"></i>&nbsp;&nbsp;non fiction',
    
  };