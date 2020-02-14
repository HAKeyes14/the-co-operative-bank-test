export const formatJoke = joke => {
  return joke.replace(/&quot;/g, '"');
};

export const validateInput = input => {
  return /^[a-zA-Z]+ [a-zA-Z]+$/.test(input.trim());
};

export const makeNameObj = input => {
  const names = input.split(" ");
  const capitalisedNames = names.map(name => {
    return name[0].toUpperCase() + name.slice(1).toLowerCase();
  });
  return { firstName: capitalisedNames[0], lastName: capitalisedNames[1] };
};
