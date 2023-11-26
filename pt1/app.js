console.log("Hello")

// This is like ReactDOM.render
const app = Vue.createApp({
    // Root component here
    // Set up data and functions to react to data

    // Tedious to create a template here so we can
    // instead create it directly on the DOM
    // template: '<h2> I am the template </h2>'

    // Data function like we are in a class definition
    // Properties we make inside this data object will
    // be accessible within the template element like:
    // {{ title }}    Think of this as a state variable
    data() {
        return {
            title: 'Nuzlocke S1',
            host: 'Kin Ka',
            year: 2020,
            visible: true
        }
    },
    // methods is a property which can access all the variables
    // and be accessible in the event listeners as well!
    // We can access the variables assuming this to be like a
    // class (Love OOP), using the context of this!
    // CAN ALSO USE DEBUGGERS OMG!
    methods: {
        nextSeason() {
            let value = parseInt(this.title.slice(10))
            this.title = this.title.slice(0, 10) + (value + 1)
        },
        resetToDefault(season) {
            this.title = this.title.slice(0, 10) + season
            this.year = 2020
        },
        toggleOptions() {
            this.visible = !this.visible
        }
    }
})

// This is where the app is mounted on to the DOM, similar to when
// the DOM is loaded, we run ReactDOM.render and pass in the component
// we want to render over the element one the page we selected
// So only elements inside of this #app div will be accessible for Vue
// to control. Anything outside, is not considered part of Vue
app.mount("#app")

