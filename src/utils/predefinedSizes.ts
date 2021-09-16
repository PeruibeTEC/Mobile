import percentageToDP from './percentageToDP';

export const sizes = {
  width: {
    dp4: percentageToDP.width('1.06%'),
    dp8: percentageToDP.width('2.13%'),
    dp12: percentageToDP.width('3.2%'),
    dp16: percentageToDP.width('4.26%'),
    dp20: percentageToDP.width('5.3%'),
    dp24: percentageToDP.width('6.4%'),
    dp30: percentageToDP.width('8%'),
    dp32: percentageToDP.width('8.5%'),
    dp40: percentageToDP.width('10.6%'),
  },
  height: {
    dp4: percentageToDP.height('1.06%'),
    dp8: percentageToDP.height('2.13%'),
    dp12: percentageToDP.height('3.2%'),
    dp16: percentageToDP.height('4.26%'),
    dp20: percentageToDP.height('5.3%'),
    dp24: percentageToDP.height('6.4%'),
    dp30: percentageToDP.height('8%'),
    dp32: percentageToDP.height('8.5%'),
    dp40: percentageToDP.height('10.6%'),
  },
};
