function messageHandler(object) {

  console.log(object);
  let strings = object.strings;
  let message;

  message = object.name;
  message = message + "\n" + object.message;
  message = message + "\n";

  strings.forEach((item) => {
    message = message + "\n" + item;
  });

  message = message + "\n";
  message = message + "\n" + object.total;
  message = message + "\n" + object.timing;

  return message;

};

module.exports.messageHandler = messageHandler;
