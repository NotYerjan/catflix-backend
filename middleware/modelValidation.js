const Joi = require("joi");

module.exports.userSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(20).required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  repeat_password: Joi.ref("password"),
  email: Joi.string().email({ minDomainSegments: 2 }),
  first_name: Joi.string(),
  last_name: Joi.string(),
  avatar_src: Joi.string(),
  birthday: Joi.date(),
  movies: Joi.array().items(
    Joi.object({
      id: Joi.string(),
      status: Joi.string().allow("finished", "watching", "will watch"),
      isFavorite: Joi.boolean(),
    })
  ),
});

module.exports.reviewSchema = Joi.object({
  user_id: Joi.string().required(),
  rating: Joi.number().max(5).min(0).required(),
  content: Joi.string().max(300).min(10).required(),
});
