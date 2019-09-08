Vue.component('car-make', {
    // camelCase in JavaScript
    props: ['text', 'value'],
    template: '<option value={{value}}>{{text}}</option>'
  });