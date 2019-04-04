const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_test_7AMqVreFejiZU40vXpmSVMSo00HOvrQyr7'
  : 'pk_test_7AMqVreFejiZU40vXpmSVMSo00HOvrQyr7';

export default STRIPE_PUBLISHABLE;