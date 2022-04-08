// Confucius Quotes
let confucius = [];

confucius.push({
  'quote': "Everything has beauty, but not everyone sees it.",
  'theme': ['beauty']
});

confucius.push({
  'quote': "It is easy to hate and it is difficult to love. This is how the whole scheme of things works. All good things are difficult to achieve, and bad things are very easy to get.",
  'theme': ['love']
});

confucius.push({
  'quote': "Life is really simple, but we insist on making it complicated.",
  'theme': ['life']
});

confucius.push({
  'quote': "Forget injuries, never forget kindnesses.",
  'theme': ['kindness']
});

confucius.push({
  'quote': "Wheresoever you go, go with all your heart.",
  'theme': ['engagment']
});


confucius.forEach(q => {
  q.name = 'Confucius';
  q.img = 'images/confucius.jpeg';
})
