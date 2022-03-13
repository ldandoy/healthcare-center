module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2b5cddeeb62d90249378cac14cc39aa8'),
  },
});
