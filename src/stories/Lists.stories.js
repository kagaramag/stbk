import Lists from './Lists.vue';

export default {
  title: 'Example/Lists',
  component: Lists,
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Lists },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    // Story args can be spread into the returned object
    return { ...args };
  },
  // Then, the spread values can be accessed directly in the template
  template: '<my-lists :user="user" />',
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  user: null,
};
