function initMainThread() {

    initUserModel();
    checkUser();
    dynIdPrepare();
    cssBeforeIconsPrepare();
    makeRaitingStarsModel(); 
    modalRoutineStart(); 
    filterRoutineStart(); 
    addLogoutListener();
    areaTriggersforHeaderDisplay();
    searchInit();
    searchReset();
    kindOfRouter(); 
};