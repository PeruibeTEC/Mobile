import pixelToDP from './pixelToDP';

export const sizes = {
  width: {
    dp4: pixelToDP.width(4),
    dp8: pixelToDP.width(8),
    dp12: pixelToDP.width(12),
    dp16: pixelToDP.width(16),
    dp20: pixelToDP.width(20),
    dp24: pixelToDP.width(24),
    dp30: pixelToDP.width(30),
    dp32: pixelToDP.width(32),
    dp40: pixelToDP.width(40),
  },
  height: {
    dp4: pixelToDP.height(4),
    dp8: pixelToDP.height(8),
    dp12: pixelToDP.height(12),
    dp16: pixelToDP.height(16),
    dp20: pixelToDP.height(20),
    dp24: pixelToDP.height(24),
    dp30: pixelToDP.height(30),
    dp32: pixelToDP.height(32),
    dp40: pixelToDP.height(40),
  },
};
