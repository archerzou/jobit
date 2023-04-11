const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
export const today = new Date().toLocaleDateString('en-US', options);
