new Vue({
    el: "#myVueJsApp",
    data: {
        dateTimeInfo: "PreviousValue",
        helloWorldText: "Helloworld",
        imageUrl: "logo.png",
        pInnerHtml: '<img src="logo.png" width="50" height="50" />',
        pInnerHtmlNotWorking: '<img :src="imageUrl" width="50" height="50" />',
        userName: "Unknown",
        showHiddenMessage: false,
        testCarData: [
            { name: "BMW" },
            { name: "Benz" },
            { name: "Ferrari" },
            { name: "Lamborghini" },
            { name: "Rolls Royce" },
            { name: "Porsche" }
        ],
        inputData: '',
        inputDataFor2wayComponent: 'FromParent',
        inputDataFor2wayComponent2: 'FromParent',
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
            //Not working
            setInterval(this.getDateTimeInformation(), 500);
        },
        getDateTimeInformation: function () {
            var date = new Date();
            this.dateTimeInfo = "Current Time : " + date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + " TimeZone-Offset: " + date.getTimezoneOffset() / 60;
            console.log(this.dateTimeInfo);
            //Not working as expected
            //setTimeout(this.getDateTimeInformation(), 500);
            //setInterval(this.getDateTimeInformation(), 500);
            return true;
        },
        handleButtonClick: function () {
            alert("Button Clicked");
        },
        keyDownHandler: function (event) {
            console.log(event);
        },
        childUpdatedValue: function (value) {
            console.log(value + "Event triggered in parent.");
            this.inputDataFor2wayComponent = value;
            alert("Value updated in parent level " + this.inputDataFor2wayComponent);
        }
    }
});