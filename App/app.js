new Vue({
    el: "#myVueJsApp",
    data: {
        dateTimeInfo:"PreviousValue",
        helloWorldText: "Helloworld",
        imageUrl: "logo.png",
        pInnerHtml: '<img src="logo.png" width="50" height="50" />',
        pInnerHtmlNotWorking: '<img :src="imageUrl" width="50" height="50" />',
    },
    methods: {
        greetUser: function () {
            var hourPart = new Date().getHours();
            if (hourPart < 11) {
                return "Good Morning."
            }
            else if (hourPart < 16) {
                return "Good Afternoon."
            } else {
                return "Good Evening."
            }
        },
        getDateTimeInformation: function () {
            var date = new Date();
            dateTimeInfo = "Current Time : " + date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + " TimeZone-Offset: " + date.getTimezoneOffset() / 60;
            console.log(dateTimeInfo);
            //setTimeout(getDateTimeInformation(), 500);
            return true;
        }
    }
});