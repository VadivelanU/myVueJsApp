//global component
Vue.component('component1-selector',
    {
        //Got following issue when using camel case. Using lowercase to avoid it.
        // Note that HTML attributes are case-insensitive and camelCased props need to use their kebab-case equivalents when using in-DOM templates. You should probably use "input-data1" instead of "inputData1".
        //to use v-model way for 2 way bing the prop name must be value only!!!! or will not work
        props: ["inputdata1", "value"],
        //throws error, its not allowed anymore
        //data: {
        //    shared: 'This data is nowcommon between multiple instance of components',
        //},
        data: function () {
            return {
                unshareddata: "this data is not shared and is unique for each component instance"
            }
        },
        methods: {
            updateValue: function ($event) {
                console.log($event);
                this.$emit('value-changed', $event.target.value);
            }
        },

        template: "<div>" +
            //method 1 by using emit event
            "<input v-if='inputdata1' type='text' v-bind:value='inputdata1' v-on:change='updateValue' />" +
            //method 2 by using v-model
            //check: https://vuejs.org/v2/guide/components.html#Using-v-model-on-Components clear explanationnn!!
            "<input v-if='value' type='text' v-bind:value='value' v-on:change=\"$emit('input',$event.target.value)\" />"+
            "</div>"

    });