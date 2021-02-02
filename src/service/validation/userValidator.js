import { ValidationModels } from "../../model/model";

const validationMessages = {
  FirstFourCharCanNotNumber: "FirstFourCharCanNotNumber",
  UsernameHasDefaultValues: "This username is invalid",
  PasswordHasDefaultValues: "This password is invalid",
};

// Bütün metotların imzası aynı olmalı (validationContext) => void

// 1 - username: undefined, null veya empty ("") olmamalı
const validateUsernameHasDefaultValues = (validationContext) => {
  let user = validationContext.model;

  if (user === "" || user === undefined || user === null) {
    validationContext.validationResult.isValid = false;
    validationContext.validationResult.Message =
      validationMessages.InvalidUsername;
  }
  return;
};

// 2 - password: undefined, null veya empty ("") olmamalı
const validatePasswordHasDefaultValues = (validationContext) => {
  let password = validationContext.model;
  if (password === "" || password === undefined || password === null) {
    validationContext.validationResult.isValid = false;
    validationContext.validationResult.Message =
      validationMessages.InvalidPassword;
  }
  return;
};
// 3 - username: rakam veya string dışında bir şey içeremez.

// 4 - username: ilk 4 hane number olmasın.
const validateFirstFourCharIsNotNumber = (validationContext) => {
  let user = validationContext.model;
  let firstFourCharOfUsernameAsArray = user.username.slice(0, 4).split("");
  let arrayX = [];
  firstFourCharOfUsernameAsArray.forEach((e) => {
    if (Number.isInteger(parseInt(e))) {
      arrayX.push(e);
      if (arrayX.length === 4) {
        validationContext.validationResult.isValid = false;
        validationContext.validationResult.Message =
          validationMessages.FirstFourCharCanNotNumber;
      }
    }
  });
  return;
};

// 5 - password: en az 8 karakter içermeli
// 6 - en az 1 rakam, 1 harf içermeli

// yazılacak metotları yukarıdaki sırayla aşağıdaki array e eklemeliyiz.
const validators = [
  validateUsernameHasDefaultValues,
  validatePasswordHasDefaultValues,
  validateFirstFourCharIsNotNumber,
];

export const Validate = (user) => {
  let validationResult = new ValidationModels.ValidationResult();
  let validationContext = new ValidationModels.ValidationContext(
    user,
    validationResult
  );

  for (let index = 0; index < validators.length; index++) {
    validators[index](validationContext);

    if (!validationResult.isValid) break;
  }

  return validationResult;
};
