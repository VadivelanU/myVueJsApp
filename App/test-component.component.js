//global component
Vue.component('component-selector',
    {
        //Got following issue when using camel case. Using lowercase to avoid it.
        // Note that HTML attributes are case-insensitive and camelCased props need to use their kebab-case equivalents when using in-DOM templates. You should probably use "input-data1" instead of "inputData1".
        props: ["inputdata1", "inputdata2"],
        //throws error, its not allowed anymore
        //data: {
        //    shared: 'This data is nowcommon between multiple instance of components',
        //},
        data: function () {
            return {
                unshareddata: "this data is not shared and is unique for each component instance"
            }
        },

        //on  editing the value in parent it immediately refelects in the child like in Angular ngOnChanges
        template: "<div><span>Contents of the component {{ inputdata1 }} {{ inputdata2 }}" +
            //Try editing the value from the child and check if the parent value is affected.
            //No its a one way as we used v-bind and it throws console error as we are editing prop variable. 
            //using Objects may preserve the property values. 
            "<input type='text' v-model='inputdata1' />" +
            "</span> <br />" +
            //"<input type='text' v-model='shared' />" +
            //2 way
            "2 way binded data : <input type='text' v-model='unshareddata' />" +
            //1 way
            "1 way binded data :<input type='text' v-bind:value='unshareddata' />" +
            "</div>"
    });