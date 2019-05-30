function initMainThread() {

    console.log("mainThread")
    initUserModel ()
    checkUser ()
    dynIdPrepare ();
    cssBeforeIconsPrepare ()
    makeRaitingStarsModel(); //model.utils
    modalRoutineStart(); //pre.events
    filterRoutineStart(); //pre.events
    addLogoutListener ()
    areaTriggersforHeaderDisplay()
    searchInit();
    searchReset ();
    kindOfRouter(); //ctrl_user

}